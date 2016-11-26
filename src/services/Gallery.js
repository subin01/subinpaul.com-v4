angular
	.module('app')
	.factory('Gallery', ['$http', '$q', function ($http, $q) {

			var url = 'data/subinpaul.json';
			if (location.href.indexOf("subinpaul.com") > -1 ) { // Firebase URL for live site
				url = '//subinpaul-v3.firebaseio.com/portfolio.json';
		  }

			getFromLocalStorage = function (subPath) {
				var galleryData, localHandle;

				if (localStorage) {
					localHandle = localStorage.getItem('subinpaul');
					if (localHandle !== null) {
						galleryData = JSON.parse(localHandle)[subPath];
					}
				}
				return galleryData;
			};

			setToLocalStorage = function (data) {
				if (localStorage) {
					localStorage.setItem('subinpaul', JSON.stringify(data));
				}
			};


			return {

				get: function (subPath) {

					var dataPromise, localData = getFromLocalStorage(subPath);

					/* Check Data in Local storage */
					if (typeof localData != "undefined") {

						dataPromise = $q.resolve(localData);

					} else { /* Fetch from server otherwise  */
						dataPromise = $http.get(url).then(function (response) {
							setToLocalStorage(response.data);
							response = response.data[subPath];
							return response;
						});
					}

					return dataPromise;
				}

			} //return;
		}]

	)
