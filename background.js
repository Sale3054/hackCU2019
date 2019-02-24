console.log("Initializing the Web Histotree extension!")

var graph_headnodes = {}
var graph_roots = []//JSON.parse("[{\"tab_id\":2,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://live.hackcu.org/rules/\",\"node_id\":0,\"is_root\":true,\"children\":[]},{\"tab_id\":14,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://open.spotify.com/playlist/7vceFdFKK31o6ejfZxmDeu\",\"node_id\":1,\"is_root\":true,\"children\":[{\"tab_id\":14,\"window_id\":3,\"time\":\"2019-02-24T08:24:39.958Z\",\"url\":\"https://open.spotify.com/collection\",\"node_id\":17,\"is_root\":false,\"children\":[{\"tab_id\":14,\"window_id\":3,\"time\":\"2019-02-24T08:24:39.985Z\",\"url\":\"https://open.spotify.com/collection/playlists\",\"node_id\":18,\"is_root\":false,\"children\":[{\"tab_id\":14,\"window_id\":3,\"time\":\"2019-02-24T08:24:43.065Z\",\"url\":\"https://open.spotify.com/playlist/1Gkjj1u4xmXlkpr6j17Run\",\"node_id\":19,\"is_root\":false,\"children\":[]}]}]}]},{\"tab_id\":15,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://www.reddit.com/r/AboveandBeyond/comments/au2c36/above_beyond_armin_van_buuren_show_me_love/\",\"node_id\":2,\"is_root\":true,\"children\":[{\"tab_id\":15,\"window_id\":3,\"time\":\"2019-02-24T08:23:16.382Z\",\"url\":\"https://www.reddit.com/\",\"node_id\":13,\"is_root\":false,\"children\":[{\"tab_id\":15,\"window_id\":3,\"time\":\"2019-02-24T08:24:38.101Z\",\"url\":\"https://www.reddit.com/r/all/\",\"node_id\":16,\"is_root\":false,\"children\":[]}]}]},{\"tab_id\":41,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://www.reddit.com/\",\"node_id\":3,\"is_root\":true,\"children\":[{\"tab_id\":41,\"window_id\":3,\"time\":\"2019-02-24T08:23:35.578Z\",\"url\":\"https://www.reddit.com/r/ImaginaryArchitecture/comments/au2gkp/labyrinth_by_artur_sadlos/\",\"node_id\":14,\"is_root\":false,\"children\":[{\"tab_id\":41,\"window_id\":3,\"time\":\"2019-02-24T08:23:48.325Z\",\"url\":\"https://www.reddit.com/\",\"node_id\":15,\"is_root\":false,\"children\":[]}]}]},{\"tab_id\":17,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"about:debugging\",\"node_id\":4,\"is_root\":true,\"children\":[]},{\"tab_id\":37,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://moodle.cs.colorado.edu/\",\"node_id\":5,\"is_root\":true,\"children\":[]},{\"tab_id\":43,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://www.google.com/search?client=firefox-b-1-d&q=javascript+parse+json\",\"node_id\":6,\"is_root\":true,\"children\":[{\"tab_id\":43,\"window_id\":3,\"time\":\"2019-02-24T08:23:03.614Z\",\"url\":\"https://www.w3schools.com/js/js_json_parse.asp\",\"node_id\":8,\"is_root\":false,\"children\":[{\"tab_id\":43,\"window_id\":3,\"time\":\"2019-02-24T08:23:07.702Z\",\"url\":\"https://www.w3schools.com/js/js_ajax_intro.asp\",\"node_id\":9,\"is_root\":false,\"children\":[{\"tab_id\":45,\"window_id\":3,\"time\":\"2019-02-24T08:23:09.511Z\",\"url\":\"https://www.w3schools.com/js/js_htmldom_events.asp\",\"node_id\":10,\"is_root\":false,\"children\":[{\"tab_id\":45,\"window_id\":3,\"time\":\"2019-02-24T08:24:46.118Z\",\"url\":\"https://www.w3schools.com/js/js_object_prototypes.asp\",\"node_id\":20,\"is_root\":false,\"children\":[{\"tab_id\":45,\"window_id\":3,\"time\":\"2019-02-24T08:24:57.984Z\",\"url\":\"https://www.w3schools.com/js/js_es5.asp\",\"node_id\":25,\"is_root\":false,\"children\":[{\"tab_id\":45,\"window_id\":3,\"time\":\"2019-02-24T08:25:06.260Z\",\"url\":\"https://www.w3schools.com/js/js_errors.asp\",\"node_id\":29,\"is_root\":false,\"children\":[]}]}]}]},{\"tab_id\":46,\"window_id\":3,\"time\":\"2019-02-24T08:23:10.224Z\",\"url\":\"https://www.w3schools.com/js/js_htmldom_eventlistener.asp\",\"node_id\":11,\"is_root\":false,\"children\":[{\"tab_id\":46,\"window_id\":3,\"time\":\"2019-02-24T08:24:48.135Z\",\"url\":\"https://www.w3schools.com/\",\"node_id\":21,\"is_root\":false,\"children\":[{\"tab_id\":46,\"window_id\":3,\"time\":\"2019-02-24T08:24:56.084Z\",\"url\":\"https://www.w3schools.com/bootstrap4/default.asp\",\"node_id\":24,\"is_root\":false,\"children\":[{\"tab_id\":46,\"window_id\":3,\"time\":\"2019-02-24T08:25:04.411Z\",\"url\":\"https://www.w3schools.com/bootstrap4/bootstrap_jumbotron.asp\",\"node_id\":28,\"is_root\":false,\"children\":[]}]}]}]},{\"tab_id\":47,\"window_id\":3,\"time\":\"2019-02-24T08:23:10.945Z\",\"url\":\"https://www.w3schools.com/js/js_htmldom_navigation.asp\",\"node_id\":12,\"is_root\":false,\"children\":[{\"tab_id\":47,\"window_id\":3,\"time\":\"2019-02-24T08:24:54.320Z\",\"url\":\"https://www.w3schools.com/js/js_function_definition.asp\",\"node_id\":23,\"is_root\":false,\"children\":[{\"tab_id\":47,\"window_id\":3,\"time\":\"2019-02-24T08:25:02.395Z\",\"url\":\"https://www.w3schools.com/js/js_es6.asp\",\"node_id\":27,\"is_root\":false,\"children\":[]}]}]},{\"tab_id\":43,\"window_id\":3,\"time\":\"2019-02-24T08:24:51.887Z\",\"url\":\"https://www.w3schools.com/js/js_htmldom_css.asp\",\"node_id\":22,\"is_root\":false,\"children\":[{\"tab_id\":43,\"window_id\":3,\"time\":\"2019-02-24T08:25:00.249Z\",\"url\":\"https://www.w3schools.com/js/js_object_accessors.asp\",\"node_id\":26,\"is_root\":false,\"children\":[]}]}]}]}]},{\"tab_id\":44,\"window_id\":3,\"time\":\"2019-02-24T08:21:59.198Z\",\"url\":\"about:blank\",\"node_id\":7,\"is_root\":true,\"children\":[{\"tab_id\":44,\"window_id\":3,\"time\":\"2019-02-24T08:25:11.418Z\",\"url\":\"moz-extension://e115d065-4501-4b0b-bd13-1624056ffbe4/demo.html\",\"node_id\":30,\"is_root\":false,\"children\":[]}]},{\"tab_id\":49,\"window_id\":3,\"time\":\"2019-02-24T08:25:32.340Z\",\"url\":\"about:blank\",\"node_id\":31,\"is_root\":true,\"children\":[{\"tab_id\":49,\"window_id\":3,\"time\":\"2019-02-24T08:25:34.040Z\",\"url\":\"https://www.google.com/search?client=firefox-b-1-d&q=cyclic+object+value\",\"node_id\":32,\"is_root\":false,\"children\":[{\"tab_id\":49,\"window_id\":3,\"time\":\"2019-02-24T08:25:36.927Z\",\"url\":\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value\",\"node_id\":33,\"is_root\":false,\"children\":[]}]}]}]")
var graph_nodes = []//JSON.parse("[{\"tab_id\":2,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://live.hackcu.org/rules/\",\"node_id\":0,\"is_root\":true,\"children\":[]},{\"tab_id\":14,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://open.spotify.com/playlist/7vceFdFKK31o6ejfZxmDeu\",\"node_id\":1,\"is_root\":true,\"children\":[{\"tab_id\":14,\"window_id\":3,\"time\":\"2019-02-24T08:24:39.958Z\",\"url\":\"https://open.spotify.com/collection\",\"node_id\":17,\"is_root\":false,\"children\":[{\"tab_id\":14,\"window_id\":3,\"time\":\"2019-02-24T08:24:39.985Z\",\"url\":\"https://open.spotify.com/collection/playlists\",\"node_id\":18,\"is_root\":false,\"children\":[{\"tab_id\":14,\"window_id\":3,\"time\":\"2019-02-24T08:24:43.065Z\",\"url\":\"https://open.spotify.com/playlist/1Gkjj1u4xmXlkpr6j17Run\",\"node_id\":19,\"is_root\":false,\"children\":[]}]}]}]},{\"tab_id\":15,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://www.reddit.com/r/AboveandBeyond/comments/au2c36/above_beyond_armin_van_buuren_show_me_love/\",\"node_id\":2,\"is_root\":true,\"children\":[{\"tab_id\":15,\"window_id\":3,\"time\":\"2019-02-24T08:23:16.382Z\",\"url\":\"https://www.reddit.com/\",\"node_id\":13,\"is_root\":false,\"children\":[{\"tab_id\":15,\"window_id\":3,\"time\":\"2019-02-24T08:24:38.101Z\",\"url\":\"https://www.reddit.com/r/all/\",\"node_id\":16,\"is_root\":false,\"children\":[]}]}]},{\"tab_id\":41,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://www.reddit.com/\",\"node_id\":3,\"is_root\":true,\"children\":[{\"tab_id\":41,\"window_id\":3,\"time\":\"2019-02-24T08:23:35.578Z\",\"url\":\"https://www.reddit.com/r/ImaginaryArchitecture/comments/au2gkp/labyrinth_by_artur_sadlos/\",\"node_id\":14,\"is_root\":false,\"children\":[{\"tab_id\":41,\"window_id\":3,\"time\":\"2019-02-24T08:23:48.325Z\",\"url\":\"https://www.reddit.com/\",\"node_id\":15,\"is_root\":false,\"children\":[]}]}]},{\"tab_id\":17,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"about:debugging\",\"node_id\":4,\"is_root\":true,\"children\":[]},{\"tab_id\":37,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://moodle.cs.colorado.edu/\",\"node_id\":5,\"is_root\":true,\"children\":[]},{\"tab_id\":43,\"window_id\":3,\"time\":\"2019-02-24T08:21:57.760Z\",\"url\":\"https://www.google.com/search?client=firefox-b-1-d&q=javascript+parse+json\",\"node_id\":6,\"is_root\":true,\"children\":[{\"tab_id\":43,\"window_id\":3,\"time\":\"2019-02-24T08:23:03.614Z\",\"url\":\"https://www.w3schools.com/js/js_json_parse.asp\",\"node_id\":8,\"is_root\":false,\"children\":[{\"tab_id\":43,\"window_id\":3,\"time\":\"2019-02-24T08:23:07.702Z\",\"url\":\"https://www.w3schools.com/js/js_ajax_intro.asp\",\"node_id\":9,\"is_root\":false,\"children\":[{\"tab_id\":45,\"window_id\":3,\"time\":\"2019-02-24T08:23:09.511Z\",\"url\":\"https://www.w3schools.com/js/js_htmldom_events.asp\",\"node_id\":10,\"is_root\":false,\"children\":[{\"tab_id\":45,\"window_id\":3,\"time\":\"2019-02-24T08:24:46.118Z\",\"url\":\"https://www.w3schools.com/js/js_object_prototypes.asp\",\"node_id\":20,\"is_root\":false,\"children\":[{\"tab_id\":45,\"window_id\":3,\"time\":\"2019-02-24T08:24:57.984Z\",\"url\":\"https://www.w3schools.com/js/js_es5.asp\",\"node_id\":25,\"is_root\":false,\"children\":[{\"tab_id\":45,\"window_id\":3,\"time\":\"2019-02-24T08:25:06.260Z\",\"url\":\"https://www.w3schools.com/js/js_errors.asp\",\"node_id\":29,\"is_root\":false,\"children\":[]}]}]}]},{\"tab_id\":46,\"window_id\":3,\"time\":\"2019-02-24T08:23:10.224Z\",\"url\":\"https://www.w3schools.com/js/js_htmldom_eventlistener.asp\",\"node_id\":11,\"is_root\":false,\"children\":[{\"tab_id\":46,\"window_id\":3,\"time\":\"2019-02-24T08:24:48.135Z\",\"url\":\"https://www.w3schools.com/\",\"node_id\":21,\"is_root\":false,\"children\":[{\"tab_id\":46,\"window_id\":3,\"time\":\"2019-02-24T08:24:56.084Z\",\"url\":\"https://www.w3schools.com/bootstrap4/default.asp\",\"node_id\":24,\"is_root\":false,\"children\":[{\"tab_id\":46,\"window_id\":3,\"time\":\"2019-02-24T08:25:04.411Z\",\"url\":\"https://www.w3schools.com/bootstrap4/bootstrap_jumbotron.asp\",\"node_id\":28,\"is_root\":false,\"children\":[]}]}]}]},{\"tab_id\":47,\"window_id\":3,\"time\":\"2019-02-24T08:23:10.945Z\",\"url\":\"https://www.w3schools.com/js/js_htmldom_navigation.asp\",\"node_id\":12,\"is_root\":false,\"children\":[{\"tab_id\":47,\"window_id\":3,\"time\":\"2019-02-24T08:24:54.320Z\",\"url\":\"https://www.w3schools.com/js/js_function_definition.asp\",\"node_id\":23,\"is_root\":false,\"children\":[{\"tab_id\":47,\"window_id\":3,\"time\":\"2019-02-24T08:25:02.395Z\",\"url\":\"https://www.w3schools.com/js/js_es6.asp\",\"node_id\":27,\"is_root\":false,\"children\":[]}]}]},{\"tab_id\":43,\"window_id\":3,\"time\":\"2019-02-24T08:24:51.887Z\",\"url\":\"https://www.w3schools.com/js/js_htmldom_css.asp\",\"node_id\":22,\"is_root\":false,\"children\":[{\"tab_id\":43,\"window_id\":3,\"time\":\"2019-02-24T08:25:00.249Z\",\"url\":\"https://www.w3schools.com/js/js_object_accessors.asp\",\"node_id\":26,\"is_root\":false,\"children\":[]}]}]}]}]},{\"tab_id\":44,\"window_id\":3,\"time\":\"2019-02-24T08:21:59.198Z\",\"url\":\"about:blank\",\"node_id\":7,\"is_root\":true,\"children\":[{\"tab_id\":44,\"window_id\":3,\"time\":\"2019-02-24T08:25:11.418Z\",\"url\":\"moz-extension://e115d065-4501-4b0b-bd13-1624056ffbe4/demo.html\",\"node_id\":30,\"is_root\":false,\"children\":[]}]},{\"tab_id\":49,\"window_id\":3,\"time\":\"2019-02-24T08:25:32.340Z\",\"url\":\"about:blank\",\"node_id\":31,\"is_root\":true,\"children\":[{\"tab_id\":49,\"window_id\":3,\"time\":\"2019-02-24T08:25:34.040Z\",\"url\":\"https://www.google.com/search?client=firefox-b-1-d&q=cyclic+object+value\",\"node_id\":32,\"is_root\":false,\"children\":[{\"tab_id\":49,\"window_id\":3,\"time\":\"2019-02-24T08:25:36.927Z\",\"url\":\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value\",\"node_id\":33,\"is_root\":false,\"children\":[]}]}]}]")
var SCALE_FACTOR = 50 // tune this parameter

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
					// parent: undefined,
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
				// parent: graph_headnodes[tabID],
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
			// parent: graph_headnodes[details.sourceTabId],
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
	let min_tabid = 2147483647
	let max_tabid = 0
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
		if (graph_nodes[i].tab_id < min_tabid)
		{
			min_tabid = graph_nodes[i].tab_id
		}
		if (graph_nodes[i].tab_id > max_tabid)
		{
			max_tabid = graph_nodes[i].tab_id
		}
	}
	SCALE_FACTOR = (max_tabid - min_tabid) * 2
	while (queue.length > 0)
	{
		let curr = queue.pop()
		let rearranged_node = {
			id: curr.node_id,
			label: curr.url,
			size: 1,
			x: (curr.time - min_timestamp)/(max_timestamp - min_timestamp) * SCALE_FACTOR, // does a thing
			y: curr.tab_id - min_tabid, // FIXME is this helpful?????
			// z: Math.random()
			// x: 1,
			// y: 1
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