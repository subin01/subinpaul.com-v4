angular
	.module('app')
	.controller('galleryCtrl', ['$scope', '$state', '$sce', '$timeout', 'Gallery', function ($scope, $state, $sce, $timeout, Gallery) {

		var subPath = $state.current.name || "home";
		//Get returns a Promise object not data
		Gallery.get( subPath ).then(function (response) {

			var collectionObj = {};
			filteredGallery = filterByCollection (response.gallery, subPath);

			$scope.title   = response.collections[subPath].title;
			$scope.message = $sce.trustAsHtml(response.collections[subPath].message);
			$scope.filter  = response.collections[subPath].filter;
			$scope.gallery = filteredGallery;
		});


		filterByCollection = function (gallery, collectionKey) {
			var filteredGallery = {};
			for (var key in gallery){
				if(gallery[key].collection === collectionKey) {
					filteredGallery[key] = gallery[key];
			  }
			}
			return filteredGallery;

		};


		$scope.$on('$viewContentLoaded', function (event) {
			$timeout(function () {

				initBindings();

			}, 100);
		});

		initBindings = function () {
			setup.init();
			setup.initAnimateIn();
			setup.initFilter();
			setup.galleryInit();

		};

		var setup = {

			init: function () {

				$('#message1').fadeOut(10);


				 $('#container').on("click", "#gallery-wrap li.visible", function (e) {
						var postId = $(this).attr('id');
						//get the photo
						setup.getPhoto(postId);
					});


				$.Shortcuts.add({
					type: 'down',
					mask: 'Right',
					handler: fun1
				});
				$.Shortcuts.add({
					type: 'down',
					mask: 'Left',
					handler: fun2
				});
				$.Shortcuts.add({
					type: 'down',
					mask: 'Space',
					handler: fun1
				});
				$.Shortcuts.add({
					type: 'down',
					mask: 'Esc',
					handler: fun3
				});

				$.Shortcuts.start();

				function fun1() {
					jQuery('.next-post').trigger('click');
				}

				function fun2() {
					jQuery('.prev-post').trigger('click');
				}

				function fun3() {
					jQuery('.gallery-close a').trigger('click');
				}


			},

			initAnimateIn() {

				$("#gallery-wrap li").fadeTo(0, 0.1);

				var speed = 20; //speed in ms
				var timer = setInterval(function () {

					$notLoaded = $("#gallery-wrap li").not(".loaded");
					$notLoaded.eq(Math.floor(Math.random() * $notLoaded.length)).fadeTo(100, 1).addClass("loaded");

					if ($notLoaded.length == 0) {
						clearInterval(timer);
					}
				}, speed);

			},


			initFilter: function () {

				$('#gallery-terms li a').click(function () {
					var cat = $(this).data('value')
					setup.sortPhotos(cat);

					$('#gallery-terms li a').removeClass("current");
					$(this).addClass("current");
					return false;
				});

				$('#gallery-terms li a.all').click(function (e) {
					$('#gallery-wrap li')
						.addClass('visible')
						.fadeTo(200, 1);

					return false;

				});

			},

			sortPhotos: function (cat) {

				if ($('#gallery-wrap li').hasClass(cat)) {

					$('#gallery-wrap li')
						.not('.' + cat)
						.removeClass('visible')
						.fadeTo(200, 0.1);

					$('#gallery-wrap li.' + cat)
						.addClass('visible')
						.fadeTo(200, 1);
				}
			},


			galleryInit: function () {

				$('.next-post, .prev-post').click(function () {

					var postId = $(this).data('id');
					setup.getPhoto(postId);
					return false;
				});


				$('.gallery-close a').click(function () {

					$("body").removeClass("modal-on");
					$('#gallery-overlay').fadeOut(500, function () {
						$("#primary-nav").fadeIn(500);
					});
					return false;

				});

				$('#loader').click(function () {

					$("body").removeClass("modal-on");
					$('#gallery-overlay').fadeOut(500, function () {
						$("#primary-nav").fadeIn(500);
					});

				});

			},


			getPhotoUrl: function (postId) {
				var photoUrl = $("#" + postId).data('fullsize');
				return photoUrl;
			},

			getPhoto: function (postId) {

				if(postId === "undefined" ) {
					return; // first or last item
				}

				$('#message').fadeOut(1000, function () {
					$('#message1').fadeIn();
				})
				var photoUrl = setup.getPhotoUrl(postId);
				var next = $("#" + postId).nextAll(".visible").eq(0).attr("id"); //TODO next visible
				var prev = $("#" + postId).prevAll(".visible").eq(0).attr("id");

				var disableNext = "", disablePrev= "";
				if(typeof next == "undefined") {
					disableNext = "disabled";
				}
				if(typeof prev == "undefined") {
					disablePrev = "disabled";
				}

				var scrollTop = $("body").scrollTop() + 106;


				$('#loader').fadeIn(200, function () {

					var html =

						'<div id="gallery-container">' +
						'<div id="gallery-header" class="clearfix">' +
						'<div id="gallery-title-wrap">' +
						'<!-- <h1 class="gallery-title">Salute to the sun <span>/ </span></h1>' +
						'<p>…as a lovely morning breaks outs in bank of the Yamuna River, Delhi.</p> -->' +
						'</div>' +

						'<div id="gallery-nav">' +
						'<ul>' +
						'<li class="gallery-prev '+disablePrev+'"><a title="Previous Photo in the Set" class="prev-post"  data-id="' + prev + '"  href="#">&lsaquo;</a></li>' +
						'<li class="gallery-next '+disableNext+'"><a title="Next Photo in the Set"     class="next-post"  data-id="' + next + '" href="#">&rsaquo;</a></li>' +
						'<li class="gallery-close"><a title="Close the viewer" href="#">&times;</a></li>' +
						'</ul>' +
						'</div>' +

						'</div>' +

						'<div id="gallery-photo">' +
						'<div id="position" style="padding-top:' +scrollTop+'px">' +

						'<img src="' + photoUrl + '" class="attachment-full wp-post-image" alt="tourism india travel beauty photography north india taj love story yamuna sunrise tajmahal man yoga practice hindu hinduism banks sand" title="people (18)"></div>' +
						'</div>' +

						'<div id="gallery-footer-desc"></div>' +
						'</div>';



					var gallery = $('#gallery-overlay');
					// gallery.height($('#footer').position().top);
					gallery.html(html);
					gallery.height($(document).height() + "px");

					$("body").addClass("modal-on");
					$("#primary-nav").fadeOut(500);

					$('#gallery-overlay, #body-overlay').fadeIn(500, function () {
						$('#loader').fadeOut(500);
					});

					//re-initialize the gallery
					setup.galleryInit();


				});

			}




		};

		//$scope.items = ['item1','item2','item3','item4' ];

		$scope.sort = function () {
			alert("sorting..");
			//	$http.post ('/api/friends' ,gallery)
		};

		$scope.remove = function (id) {
			alert("deleting.. " + id);
			$scope.gallery.splice(id, 1);
			//	$http.post ('/api/friends' ,gallery)
		}

	}]);
