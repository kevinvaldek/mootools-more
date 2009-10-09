{
	tests: [
		{
			title: "OverText",
			description: "Displays help text over an input",
			before: function(){
				new OverText('ot');
			},
			verify: "Does the text appear over the input? Does it disappear when you focus or change the input? Does it reappear if you remove the text you add to the input (tab out after you remove your text)?"
		},
		{
			title: "OverText: Polling",
			description: "Polls inputs for changes",
			before: function(){
				$$('#pw, #un').each(function(el) {
					new OverText(el, {
						poll: true
					});					
				});
				$('un').addEvent('change', function(){
					$('pw').set('value', 'asdfasdf');
				});

			},
			verify: "When you enter avalue for the first input (username), the second input will be auto-filled. Does it's OverText disappear?"
		},
		{
			title: "OverText: Polling",
			description: "Removes OverText when an element gets removed",
			before: function(){
				$('un').dispose();
				OverText.update();
			},
			verify: "When the input element gets removed from the DOM. Does it's OverText disappear?"
		}
	],
	otherScripts: ["Selectors"]
}