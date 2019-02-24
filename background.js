console.log("Creating the WebHistoryGraph extension!")

var graph_headnodes = {}
var graph_roots = []

function handle_tab_creation(tab)
{

}

function handle_tab_update(tabID, changeInfo, tab)
{

}

function handle_tab_removal(tabID, removeInfo)
{
	
}

function handle_target_creation(details)
{
	
}

browser.tabs.onCreated.addListener(handle_tab_creation)
browser.tabs.onUpdated.addListener(handle_tab_update)
browser.tabs.onRemoved.addListener(handle_tab_removal)
browser.webNavigation.onCreatedNavigationTarget.addListener(handle_target_creation)
