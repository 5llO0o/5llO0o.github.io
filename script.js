document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('nextButton');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');

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

    nextButton.addEventListener('click', function() {
        screen1.classList.remove('active');
        screen2.classList.add('active');
    });

    function hideAllPages() {
        mainContent.classList.remove('active');
        noticePage.classList.remove('active');
        worldPage.classList.remove('active');
        characterPage.classList.remove('active');
        systemPage.classList.remove('active');
        battlePage.classList.remove('active');
        memberPage.classList.remove('active');
    }

    mainButton.addEventListener('click', function() {
        hideAllPages();
        mainContent.classList.add('active');
    });

    noticeButton.addEventListener('click', function() {
        hideAllPages();
        noticePage.classList.add('active');
    });

    worldButton.addEventListener('click', function() {
        hideAllPages();
        worldPage.classList.add('active');
    });

    characterButton.addEventListener('click', function() {
        hideAllPages();
        characterPage.classList.add('active');
    });

    systemButton.addEventListener('click', function() {
        hideAllPages();
        systemPage.classList.add('active');
    });

    battleButton.addEventListener('click', function() {
        hideAllPages();
        battlePage.classList.add('active');
    });

    memberButton.addEventListener('click', function() {
        hideAllPages();
        memberPage.classList.add('active');
    });
});
