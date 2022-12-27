const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};
let timerId = null;
refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', enableBodyRandomBgColor);
refs.stopBtn.addEventListener('click', disableBodyRandomBgColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function enableBodyRandomBgColor() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  timerId = setInterval(
    () => (document.body.style.backgroundColor = `${getRandomHexColor()}`),
    2000
  );
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function disableBodyRandomBgColor() {
  document.body.style.backgroundColor = '#fafafa';
  clearInterval(timerId);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}
