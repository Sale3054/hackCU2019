console.log("Initializing the WebHistoryGraph extension!")

var graph_headnodes = {}
var graph_roots = []

var last_target_creation = new Date()

function handle_tab_creation(tab)
{
	// create a new graph root if target creation was NOT fired
	// waits a bit and checks to see if the event happened recently
	// if it didn't then we're probably OK
	function create_handler(tab)
	{
		return function()
		{ // aaaaaaaa
			if (Math.abs(new Date() - last_target_creation) > 600)
			{
				let node = {
					tab_id: tab.id,
					window_id: tab.windowId,
					time: new Date(),
					url: tab.url,
					parent: undefined,
					children: []
				}
				graph_roots.push(node)
				graph_headnodes[tab.id] = node
			}
		}
	}
	// console.log("fired tab creation")
	setTimeout(create_handler(tab), 500)
}

function handle_tab_update(tabID, changeInfo, tab)
{
	// console.log("fired tab update")
	if (changeInfo.url !== undefined)
	{
		// console.log(changeInfo.url)
		if (graph_headnodes[tabID].url !== changeInfo.url)
		{
			let node = {
				tab_id: tabID,
				window_id: graph_headnodes[tabID].window_id,
				time: new Date(),
				url: changeInfo.url,
				parent: graph_headnodes[tabID],
				children: []
			}
			graph_headnodes[tabID].children.push(node)
			graph_headnodes[tabID] = node
		}
	}
	// add nodes to the graph based on the current headnodes if the url has changed from the previous url (with timestamp etc)
}

function handle_tab_removal(tabID, removeInfo)
{
	// console.log("fired tab removal")
	delete graph_headnodes[tabID]
	// removes an existing headnode
}

function handle_target_creation(details)
{
	// console.log("fired target creation")
	last_target_creation = new Date()
	if (details.sourceFrameId === 0)
	{
		let node = {
			tab_id: details.tabId,
			window_id: graph_headnodes[details.sourceTabId].window_id,
			time: new Date(),
			url: details.url,
			parent: graph_headnodes[details.sourceTabId],
			children: []
		}
		graph_headnodes[details.sourceTabId].children.push(node)
		graph_headnodes[details.tabId] = node
		// console.log("Parent: ")
		// console.log(graph_headnodes[details.sourceTabId])
	}
	// create a new graph branch, which involves creating a new head-node
}

browser.tabs.onCreated.addListener(handle_tab_creation)
browser.tabs.onUpdated.addListener(handle_tab_update)
browser.tabs.onRemoved.addListener(handle_tab_removal)
browser.webNavigation.onCreatedNavigationTarget.addListener(handle_target_creation)
