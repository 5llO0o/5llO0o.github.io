document.addEventListener("DOMContentLoaded", function() {
const mainButton = document.getElementById('mainButton');
const noticeButton = document.getElementById('noticeButton');
const worldButton = document.getElementById('worldButton');
const characterButton = document.getElementById('characterButton');
const systemButton = document.getElementById('systemButton');
const battleButton = document.getElementById('battleButton');
const memberButton = document.getElementById('memberButton');

const mainContent = document.getElementById('mainContent');
const noticePage = document.getElementById('noticePage');
const worldPage = document.getElementById('worldPage');
const characterPage = document.getElementById('characterPage');
const systemPage = document.getElementById('systemPage');
const battlePage = document.getElementById('battlePage');
const memberPage = document.getElementById('memberPage');

function hideAllPages() {
	mainContent.style.display = 'none';
    	noticePage.style.display = 'none';
    	worldPage.style.display = 'none';
    	characterPage.style.display = 'none';
    	systemPage.style.display = 'none';
    	battlePage.style.display = 'none';
    	memberPage.style.display = 'none';
}

document.getElementById('nextButton').addEventListener('click', function() {
    document.getElementById('screen1').style.display = 'none';
    document.getElementById('screen2').style.display = 'block';
    	hideAllPages();
	mainContent.style.display = 'block';
});

mainButton.addEventListener('click', function() {
	hideAllPages();
	mainContent.style.display = 'block';
});  
noticeButton.addEventListener('click', function() {
	hideAllPages();
	noticePage.style.display = 'block';
});
worldButton.addEventListener('click', function() {
	hideAllPages();
	worldPage.style.display = 'block';
});noticeButton.addEventListener('click', function() {
	hideAllPages();
	noticePage.style.display = 'block';
});
characterButton.addEventListener('click', function() {
	hideAllPages();
	characterPage.style.display = 'block';
});
systemButton.addEventListener('click', function() {
	hideAllPages();
	systemPage.style.display = 'block';
});
battleButton.addEventListener('click', function() {
	hideAllPages();
	battlePage.style.display = 'block';
});
memberButton.addEventListener('click', function() {
	hideAllPages();
	memberPage.style.display = 'block';
});
    let currentIndex = 0;
    const images = document.querySelectorAll(".gallery img");
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("active");
    }

    // Show the first image initially
    images[currentIndex].classList.add("active");

    // Change image every 2 seconds
    setInterval(showNextImage, 2000);
});
