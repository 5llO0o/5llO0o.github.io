document.addEventListener("DOMContentLoaded", function() {
	window.addEventListener('resize', () => {
		const sliderWidth = slider.clientWidth;
		gallery.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
	});
});