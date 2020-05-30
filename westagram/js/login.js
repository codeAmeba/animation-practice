(function () {
  
  const inputEmail = document.querySelector('.input-email');
  const inputPassword = document.querySelector('.input-password');

  inputEmail.addEventListener('change', (e) => {
    if (e.target.value.length < 4) {
      alert('4글자 이상 입력하셔야 합니다.');
    }
    checkInput();
  });
  
  inputPassword.addEventListener('change', (e) => {
    if (e.target.value.length < 8) {
      alert('비밀번호는 8글자 이상 입력하셔야 합니다.');
    }
    checkInput();
  });

  const checkInput = () => {
    const loginBtn = document.querySelector('.login-btn');

    if (inputEmail.value.length >= 4 && inputPassword.value.length >= 8) {
      loginBtn.disabled = false;
      loginBtn.style.opacity = 1;
      loginBtn.style.cursor = 'pointer';
    } else {
      loginBtn.disabled = true;
      loginBtn.style.opacity = 0.3;
    }
  };

  const forgotPassword = () => {
    const findPassword = document.querySelector('.find-password');

    findPassword.addEventListener('click', () => {
      alert('잘 기억해보세요^^');
    });
  };

  forgotPassword();
  
})();
