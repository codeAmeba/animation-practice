const input = document.querySelector('.email-input');
const sendEnvelope = document.querySelector('.send-envelope');
const sendButton = document.querySelector('.send-button');
const hiddedEnvelope = document.querySelector('.hidden-envelope');

const validateEmail = email => {
  const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return emailRegex.test(email) ? true : false;
}

input.addEventListener('keyup', e => {
  const email = e.target.value;
  !validateEmail(email)
    ? sendEnvelope.style.color = '#0E1C2C'
    : sendEnvelope.style.color = '#fff';
});

sendButton.addEventListener('click', e => {
  e.preventDefault();
  if (validateEmail(input.value)) {
    sendButton.style.left = 0;
    sendEnvelope.style.opacity = 0;
    setTimeout(() =>
      hiddedEnvelope.style.animation = '1s ease-in-out fadeOut forwards', 100);
  }
});