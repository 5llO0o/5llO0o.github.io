document.addEventListener('DOMContentLoaded', (event) => {
    function checkPassword() {
        const passwordInput = document.getElementById('password').value;
        const correctPassword = '0000';
        const errorMessage = document.getElementById('error-message');
        const protectedContent = document.getElementById('protected-content');
        const passwordContainer = document.getElementById('password-container');

        if (passwordInput === correctPassword) {
            passwordContainer.style.display = 'none';
            protectedContent.style.display = 'block';
            errorMessage.style.display = 'none';
        } else {
            errorMessage.style.display = 'block';
        }
    }
	
	function handleKeyUp(event) {
        if (event.key === 'Enter') {
            checkPassword();
        }
    }
    // checkPassword 함수를 전역 범위로 설정하여 HTML에서 호출할 수 있도록 합니다.
    window.checkPassword = checkPassword;
    window.handleKeyUp = handleKeyUp;
});
