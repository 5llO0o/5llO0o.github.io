document.addEventListener('DOMContentLoaded', (event) => {
    function checkPassword() {
        const passwordInput = document.getElementById('password').value;
        const correctPassword = 'Omne Sublime Videt';
        const errorMessage = document.getElementById('error-message');
        const protectedContent = document.getElementById('protected-content');
        const passwordContainer = document.getElementById('password-container');

        if (passwordInput === correctPassword) {
            passwordContainer.classList.remove('show');
            setTimeout(() => {
                passwordContainer.style.display = 'none';
                protectedContent.style.display = 'block';
                protectedContent.classList.add('show');
            }, 500);
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
    window.checkPassword = checkPassword;
    window.handleKeyUp = handleKeyUp;
	const passwordContainer = document.getElementById('password-container');
    passwordContainer.classList.add('show');
});
