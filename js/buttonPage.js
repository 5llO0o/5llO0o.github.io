document.addEventListener("DOMContentLoaded", function() {
	const mainButton = document.getElementById('mainButton'); 		//헤더 로고
	const noticeButton = document.getElementById('noticeButton'); 	//헤더 공지
	const worldButton = document.getElementById('worldButton'); 	//헤더 세계관
	const guideButton = document.getElementById('guideButton'); 	//헤더 캐릭터 가이드
	const systemButton = document.getElementById('systemButton'); 	//헤더 일반 시스템
	const battleButton = document.getElementById('battleButton'); 	//헤더 배틀 시스템
	const memberButton = document.getElementById('memberButton'); 	//헤더 멤버란
	
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

});
document.addEventListener('DOMContentLoaded', (event) => {
	function scrollToTop() {
		document.body.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
	}
	window.scrollToTop = scrollToTop;
  
});