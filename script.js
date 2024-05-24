<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>레비아탄이되~</title>
    <link rel=stylesheet href=style.css>
</head>
<body>
    <button id="menuButton">☰</button>
    <div id="menu" class="menu">
        <ul>
            <li><a href="#" data-target="mainPage">메인</a></li>
            <li><a href="#" data-target="noticePage">공지사항</a></li>
            <li><a href="#" data-target="worldPage">세계관</a></li>
            <li><a href="#" data-target="characterPage">캐릭터 가이드</a></li>
            <li><a href="#" data-target="systemPage">통합시스템</a></li>
            <li><a href="#" data-target="battlePage">전투시스템</a></li>
            <li><a href="#" data-target="memberPage">멤버란</a></li>
        </ul>
    </div>
    <div id="screen1" class="screen">
        <main>
            <button id="nextButton">→</button>
        </main>
    </div>
    <div id="screen2" class="screen" style="display: none;">
        <header>
            <div class="button-container">
                <button id="noticeButton">공지사항</button>
                <button id="worldButton">세계관</button>
                <button id="characterButton">캐릭터 가이드</button>
                <button id="mainButton">메인</button>
                <button id="systemButton">통합시스템</button>
                <button id="battleButton">전투시스템</button>
                <button id="memberButton">멤버란</button>
            </div>
        </header>
        <div class="gallery">
            <img class="gallery-img" src="image/123.jpg" title="오이 코뢐 ㅋ">
            <img class="gallery-img" src="image/12345.jpg" title="뭘보냐 코롹~ㅋ">
            <img class="gallery-img" src="image/23.jpg" title="어이~ㅋ">
        </div>
        <main>
            <div id="mainContent" class="subpage active">
                <p>지금부터 메인을 만들어~</p>

            </div>
            <div id="noticePage" class="subpage">
                <h1>공지사항</h1>
                <p>공지사항 내용...</p>
            </div>
            <div id="worldPage" class="subpage">
                <h1>세계관</h1>
                <p>세계관 내용...</p>
            </div>
            <div id="characterPage" class="subpage">
                <h1>캐릭터 가이드</h1>
                <p>캐릭터 가이드 내용...</p>
            </div>
            <div id="systemPage" class="subpage">
                <h1>통합시스템</h1>
                <p>통합시스템 내용...</p>
            </div>
            <div id="battlePage" class="subpage">
                <h1>전투시스템</h1>
                <p>전투시스템 내용...</p>
            </div>
            <div id="memberPage" class="subpage">
                <h1>멤버란</h1>
                <p>멤버란 내용...</p>
            </div>
        </main>
    </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
