// Let's first initialize sigma:
var s = new sigma('graph');


for (var i = data.length - 1; i >= 0; i--) {
	topic = data[i]
	s.graph.addNode({
	// Main attributes:
	id: topic.name,
	label: topic.name,
	// Display attributes:
	x : Math.cos(Math.PI * 2 * i / data.length),
	y : Math.sin(Math.PI * 2 * i / data.length),
	size: 1,
	color: '#444'
})
};
n = 1
for (var i = data.length - 1; i >= 0; i--) {
	topic = data[i]

	
	for (var j = 0 ; j < topic.linkedTo.length; j++) {
		n = n+1;
		console.log('e'+String(n))
		s.graph.addEdge({
		id: 'e'+String(n),
		// Reference extremities:
		source: topic.name,
		target: topic.linkedTo[j]
		});
	};
	
};


// s.startForceAtlas2();
// Finally, let's ask our sigma instance to refresh:

s.startForceAtlas2();
window.setTimeout(function(){s.stopForceAtlas2()},200)

