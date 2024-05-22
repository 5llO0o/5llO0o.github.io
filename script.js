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
        screen1.style.display = 'none';
        screen2.style.display = 'block';
    });

    function hideAllPages() {
        mainContent.style.display = 'none';
        noticePage.style.display = 'none';
        worldPage.style.display = 'none';
        characterPage.style.display = 'none';
        systemPage.style.display = 'none';
        battlePage.style.display = 'none';
        memberPage.style.display = 'none';
    }

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
});