document.addEventListener("DOMContentLoaded", function() {
const mainButton = document.getElementById('mainButton'); 		//��� �ΰ�
const noticeButton = document.getElementById('noticeButton'); 	//��� ����
const worldButton = document.getElementById('worldButton'); 	//��� �����
const guideButton = document.getElementById('guideButton'); 	//��� ĳ���� ���̵�
const systemButton = document.getElementById('systemButton'); 	//��� �Ϲ� �ý���
const battleButton = document.getElementById('battleButton'); 	//��� ��Ʋ �ý���
const memberButton = document.getElementById('memberButton'); 	//��� �����

const menuButton = document.getElementById('menuButton');		//�޴� ��ư
const menu = document.getElementById('menu');					//�޴� ���
const menuItems = menu.querySelectorAll('ul li');				//�޴� ����Ʈ
let menuVisible = false;
const links = document.querySelectorAll('.menu a');				//�޴� ����

const subpages = document.querySelectorAll('.subpage');			//�ٲ�� ������ �κ� ���

const mainContent = document.getElementById('mainContent');		//����
const noticePage = document.getElementById('noticePage');		//����
const worldPage = document.getElementById('worldPage');			//�����
const guidePage = document.getElementById('guidePage');			//���̵�
const systemPage = document.getElementById('systemPage');		//�Ϲݽý���
const battlePage = document.getElementById('battlePage');		//��Ʋ�ý���
const memberPage = document.getElementById('memberPage');		//�����

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
    // ������ ��ȯ ��ũ Ŭ�� �̺�Ʈ �ڵ鷯
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