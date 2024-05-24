document.addEventListener("DOMContentLoaded", function() {
const mainButton = document.getElementById('mainButton');
const noticeButton = document.getElementById('noticeButton');
const worldButton = document.getElementById('worldButton');
const characterButton = document.getElementById('characterButton');
const systemButton = document.getElementById('systemButton');
const battleButton = document.getElementById('battleButton');
const memberButton = document.getElementById('memberButton');

const links = document.querySelectorAll('.menu a');
const subpages = document.querySelectorAll('.subpage');

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


    // 메뉴 버튼 클릭 이벤트 핸들러
    menuButton.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    });
    // 페이지 전환 링크 클릭 이벤트 핸들러
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('data-target');
            subpages.forEach(subpage => {
                subpage.style.display = 'none';
                if (subpage.id === targetId) {
                    subpage.style.display = 'block';
                }
            });
            menu.style.display = 'none';
        });
    });
});
