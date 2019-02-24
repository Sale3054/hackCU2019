console.log("Initializing the WebHistoryGraph extension!")

var graph_headnodes = {}
var graph_roots = []
var graph_nodes = []
var SCALE_FACTOR = 1

var last_target_creation = 0
var node_counter = 0

// get all current browser tabs and add them as graph roots.
browser.tabs.query({}).then((response) => {
	for (let i = 0; i < response.length; i++)
	{
		handle_tab_creation(response[i])
	}
}, (err0r) => {console.log(err0r)})

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
					node_id: node_counter,
					is_root: true,
					parent: undefined,
					children: []
				}
				graph_nodes.push(node)
				node_counter++
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
				node_id: node_counter,
				is_root: false,
				parent: graph_headnodes[tabID],
				children: []
			}
			graph_nodes.push(node)
			node_counter++
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
			node_id: node_counter,
			is_root: false,
			parent: graph_headnodes[details.sourceTabId],
			children: []
		}
		graph_nodes.push(node)
		node_counter++
		graph_headnodes[details.sourceTabId].children.push(node)
		graph_headnodes[details.tabId] = node
		// console.log("Parent: ")
		// console.log(graph_headnodes[details.sourceTabId])
	}
	// create a new graph branch, which involves creating a new head-node
}

function remove_internal_from_history(historyItem)
{
	if (historyItem.url === browser.runtime.getURL("demo.html"))
	{
		browser.history.deleteUrl({url: historyItem.url})
	}
}

function create_internal_page(tab)
{
	browser.tabs.create({url: "demo.html"});
}

function database_query_responder(request, sender, sendResponse)
{
	let graph = {
		"nodes": [],
		"edges": []
	}
	let edge_counter = 0
	let root_counter = 0
	let queue = []
	let min_timestamp = new Date()
	let max_timestamp = 0
	for (let i = 0; i < graph_roots.length; i++)
	{
		queue.unshift(graph_roots[i])
	}
	for (let i = 0; i < graph_nodes.length; i++)
	{
		if (graph_nodes[i].time < min_timestamp)
		{
			min_timestamp = graph_nodes[i].time
		}
		if (graph_nodes[i].time > max_timestamp)
		{
			max_timestamp = graph_nodes[i].time
		}
	}
	while (queue.length > 0)
	{
		let curr = queue.pop()
		let rearranged_node = {
			id: curr.node_id,
			label: curr.url,
			size: 1,
			// x: (curr.time - min_timestamp)/(max_timestamp - min_timestamp) * SCALE_FACTOR,
			// y: curr.tab_id
			x: 1,
			y: 1
		}
		if (curr.is_root)
		{
			// rearranged_node.x = root_counter
			root_counter++
		}
		graph.nodes.push(rearranged_node)
		for (let i = 0; i < curr.children.length; i++)
		{
			queue.unshift(curr.children[i])
			graph.edges.push({
				id: edge_counter,
				source: curr.node_id,
				target: curr.children[i].node_id
			})
			edge_counter++
		}
	}
	sendResponse(graph)
}

browser.tabs.onCreated.addListener(handle_tab_creation)
browser.tabs.onUpdated.addListener(handle_tab_update)
browser.tabs.onRemoved.addListener(handle_tab_removal)

browser.webNavigation.onCreatedNavigationTarget.addListener(handle_target_creation)

browser.history.onVisited.addListener(remove_internal_from_history)

browser.browserAction.onClicked.addListener(create_internal_page)

browser.runtime.onMessage.addListener(database_query_responder)