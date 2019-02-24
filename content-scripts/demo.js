function draw_graph(data)
{
	console.log("drawing the graph")
	console.log(data)
	var s = new sigma({
		graph: data,
		container: 'container',
		settings: {
			defaultNodeColor: '#ec5148' // FIXME make this different?
		}
	})
	s.startForceAtlas2()
	setTimeout(() => {s.killForceAtlas2(); console.log("drew the graph"); console.log(s); s.refresh();}, 1000);
}

function handle_error(error)
{
	console.log(error);
}

browser.runtime.sendMessage({}).then(draw_graph, handle_error)
