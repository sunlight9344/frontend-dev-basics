$(function() {
	imageViewer.init();
});

var imageViewer = {
	_images: [ 
			"국화:Chrysanthemum.jpg", 
			"사막:Desert.jpg", 
			"수국:Hydrangeas.jpg", 
			"해파리:Jellyfish.jpg", 
			"코알라:Koala.jpg", 
			"등대:Lighthouse.jpg", 
			"펭귄:Penguins.jpg", 
			"툴립:Tulips.jpg" 
	],
	
	init: function() {
		
		var changeImage = function() {
			var index = Math.floor(Math.random() * imageViewer._images.length);
			var info = imageViewer._images[index].split(":");
			$('img').attr({
				"src": "/ch07/images/" + info[1],
				"alt": info[0],
				"title": info[1]
			})
		};
		
		var slideImage = function() {
			isClicked = !isClicked;

			$('#btn-slideshow')
				.text(isClicked ? '슬라이드쇼 중지' : '슬라이드쇼 시작');

			isClicked ? slide() : clearInterval(interval);
		}

		var slide = function() {
			interval = setInterval(function() {
				var index = Math.floor(Math.random() * imageViewer._images.length);
				var info = imageViewer._images[index].split(":");
				$('img').attr({
					"src": "/ch07/images/" + info[1],
					"alt": info[0],
					"title": info[1]
				})
			}, 1000);
		}
		isClicked = false;
		changeImage();
		$("#btn-change").click(changeImage);
		$("#btn-slideshow").click(slideImage);
	}
}