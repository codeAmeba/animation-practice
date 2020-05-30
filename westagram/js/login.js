(function () {
  const inputElements = document.querySelectorAll('input');
  const inputEmail = document.querySelector('.input-email');
  const inputPassword = document.querySelector('.input-password');
  const loginBtn = document.querySelector('.login-btn');
  
  inputEmail.addEventListener('change', (e) => {
    if (e.target.value.length < 4) {
      alert('4글자 이상 입력해주세요.');
    }
  });
  
  inputPassword.addEventListener('change', (e) => {
    if (!e.target.value) {
      alert('비밀번호를 입력해주세요.');
    }
  });
  
  inputElements.forEach((el) => {
    el.addEventListener('change', (e) => {
      console.log(e.target.value);
  
    });
  });
  
})();
