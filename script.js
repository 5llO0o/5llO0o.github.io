document.addEventListener('DOMContentLoaded', function() {
    const nextButton = document.getElementById('nextButton');
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');

    const noticeButton = document.getElementById('noticeButton');
    const worldButton = document.getElementById('worldButton');
    const characterButton = document.getElementById('characterButton');
    const systemButton = document.getElementById('systemButton');
    const battleButton = document.getElementById('battleButton');
    const memberButton = document.getElementById('memberButton');

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

    noticeButton.addEventListener('click', function() {
        screen2.style.display = 'none';
        noticePage.style.display = 'block';
    });

    worldButton.addEventListener('click', function() {
        screen2.style.display = 'none';
        worldPage.style.display = 'block';
    });

    characterButton.addEventListener('click', function() {
        screen2.style.display = 'none';
        characterPage.style.display = 'block';
    });

    systemButton.addEventListener('click', function() {
        screen2.style.display = 'none';
        systemPage.style.display = 'block';
    });

    battleButton.addEventListener('click', function() {
        screen2.style.display = 'none';
        battlePage.style.display = 'block';
    });

    memberButton.add
