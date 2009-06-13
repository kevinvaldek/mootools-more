/*
Script: Class.Delegates.js
	Exposes methods of contained elements as its own by delegating specified method calls directly to specified elements within the Class.

	License:
		MIT-style license.

	Authors:
		Kevin Valdek
*/

Class.Mutators.Delegates = function(self, delegations) {
	new Hash(delegations).each(function(delegates, target) {
		$splat(delegates).each(function(delegate) {
			self[delegate] = function() {
				target = eval(target);
				target[delegate].apply(target, arguments);
			};
		});
	});
	return self;
};