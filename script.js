document.addEventListener("DOMContentLoaded", function() {
const mainButton = document.getElementById('mainButton'); 		//헤더 로고
const noticeButton = document.getElementById('noticeButton'); 	//헤더 공지
const worldButton = document.getElementById('worldButton'); 	//헤더 세계관
const guideButton = document.getElementById('guideButton'); 	//헤더 캐릭터 가이드
const systemButton = document.getElementById('systemButton'); 	//헤더 일반 시스템
const battleButton = document.getElementById('battleButton'); 	//헤더 배틀 시스템
const memberButton = document.getElementById('memberButton'); 	//헤더 멤버란

const menuButton = document.getElementById('menuButton');		//메뉴 버튼
const menu = document.getElementById('menu');					//메뉴 블록
const menuItems = menu.querySelectorAll('ul li');				//메뉴 리스트
let menuVisible = false;
const links = document.querySelectorAll('.menu a');				//메뉴 글자

const subpages = document.querySelectorAll('.subpage');			//바뀌는 페이지 부분 블록

const mainContent = document.getElementById('mainContent');		//메인
const noticePage = document.getElementById('noticePage');		//공지
const worldPage = document.getElementById('worldPage');			//세계관
const guidePage = document.getElementById('guidePage');			//가이드
const systemPage = document.getElementById('systemPage');		//일반시스템
const battlePage = document.getElementById('battlePage');		//배틀시스템
const memberPage = document.getElementById('memberPage');		//멤버란

function hideAllPages() {
	mainContent.style.display = 'none';
    noticePage.style.display = 'none';
    worldPage.style.display = 'none';
    guidePage.style.display = 'none';
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
guideButton.addEventListener('click', function() {
	hideAllPages();
	guidePage.style.display = 'block';
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

	 menuButton.addEventListener('click', function () {
		const menuWidth = menu.offsetWidth;
		if (!menuVisible) {
            menu.style.display = 'block';
            setTimeout(() => {
                menu.style.left = '0';
                menuItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100); // Adjust the delay as needed
                });
            }, 100);
        } else {
            menuItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(-100%)';
                }, index * 30); // Adjust the delay as needed
            });
            setTimeout(() => {
                menu.style.left = menuWidth === 300 ? '-300px' : '-100%';
                setTimeout(() => {
                    menu.style.display = 'none';
                }, 300);
            }, menuItems.length * 50);
        }
        menuVisible = !menuVisible;
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