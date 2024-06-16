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

document.getElementById('featherButton').addEventListener('click', function() {
        if (document.getElementById('password-inputBox').style.display === 'block')
			document.getElementById('password-inputBox').style.display = 'none';
		else 
			document.getElementById('password-inputBox').style.display = 'block'
});

document.addEventListener("DOMContentLoaded", function() {
	const Button1st = document.getElementById('btn1st');
	const Button4th = document.getElementById('btn4th');
	const Button7th = document.getElementById('btn7th');
	const ButtonA = document.getElementById('btnA');
	
	const page1st = document.getElementById('1st');
	const page4th = document.getElementById('4th');
	const page7th = document.getElementById('7th');
	const pageA = document.getElementById('adult');
	
	function hideAllPages() {
		page1st.style.display = 'none';
		page4th.style.display = 'none';
		page7th.style.display = 'none';
		pageA.style.display = 'none';
    }
	Button1st.addEventListener('click', function(){
		hideAllPages();
		page1st.style.display = 'block';
	});
	Button4th.addEventListener('click', function(){
		hideAllPages();
		page4th.style.display = 'block';
	});
	Button7th.addEventListener('click', function(){
		hideAllPages();
		page7th.style.display = 'block';
	});
	ButtonA.addEventListener('click', function(){
		hideAllPages();
		pageA.style.display = 'block';
	});
});
