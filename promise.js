'use strict';
/*global module*/
/**jshint: node=true*/
module.exports = {
	run: function () {

		// var count;
		var intervalId = -1;
		console.log('create a promise');
		var promise = new Promise(function (resolve) {
			var count = 0;
			intervalId = setInterval(function () {
				count++;
				console.log('count ' + count);
				if (count === 10) {
					clearInterval(intervalId);
					resolve(count);
				}
			}, 100);
			console.log('intervalId ' + intervalId);
		});
		promise.then(function () {
			console.log('finish');
		}, function () {});
	}
};