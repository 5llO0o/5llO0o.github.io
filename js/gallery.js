document.addEventListener("DOMContentLoaded", function() {
	const slider = document.querySelector('.slider');
	const gallery = document.querySelector('.gallery');
	const images = gallery.getElementsByTagName('li');
	const totalImages = images.length;
	let currentIndex = 0;
	const speed = 5000; // 5 seconds interval
	
	function showNextImage() {
		const sliderWidth = slider.clientWidth;
		currentIndex = (currentIndex + 1) % totalImages;
		gallery.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
	}
	
	setInterval(showNextImage, speed);
	window.addEventListener('resize', () => {
		const sliderWidth = slider.clientWidth;
		gallery.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
	});

});