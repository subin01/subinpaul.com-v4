angular
	.module('app')
	.factory('Gallery', ['$http', '$q', function ($http, $q) {

			var url = 'data/subinpaulV2.json';
			var ENV = location.href.indexOf("subinpaul.com") > -1 ? 'PROD' : 'LOCAL';

			if (ENV === 'PROD') {
				url = 'https://subinpaul-v3.firebaseio.com/portfolio.json'; // Firebase URL for live site
		  }

			getFromLocalStorage = function () {
				var galleryData, localHandle;

				if (localStorage) {
					localHandle = localStorage.getItem('subinpaul');
					if (localHandle !== null) {
						galleryData = JSON.parse(localHandle);
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

					var dataPromise, localData = getFromLocalStorage();
					/* Check Data in Local storage */
					if (typeof localData != "undefined") {

						dataPromise = $q.resolve(localData);

					} else { /* Fetch from server otherwise  */
						dataPromise = $http.get(url).then(function (response) {
							setToLocalStorage(response.data);
							return response.data;
						});
					}

					return dataPromise;
				}

			} //return;
		}]

	)
