import flatpickr from 'flatpickr';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'flatpickr/dist/flatpickr.min.css';

Notify.init({
  rtl: true,
});

const CURRENT_DATE = Number.parseInt(Date.now() / 60000);
let date;

const refs = {
  startBtn: document.querySelector('[data-start]'),
  countDays: document.querySelector('[data-days]'),
  countHours: document.querySelector('[data-hours]'),
  countMinutes: document.querySelector('[data-minutes]'),
  countSecondss: document.querySelector('[data-seconds]'),
};
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  locale: {
    firstDayOfWeek: 1,
  },
  onClose(selectedDates) {
    date = selectedDates[0].getTime();
    const isValid = isSelectedDateValid(date / 60000);
    if (!isValid) {
      Notify.failure('Please choose a date in the future');
      return;
    }
    refs.startBtn.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

refs.startBtn.addEventListener('click', enableTimer);

function isSelectedDateValid(date) {
  return date > CURRENT_DATE;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function enableTimer() {
  refs.startBtn.disabled = true;
  const timerId = setInterval(() => {
    const currentDate = Date.now();
    const msCount = date - currentDate;

    const { days, hours, minutes, seconds } = convertMs(msCount);
    updateTimerValues({ days, hours, minutes, seconds });

    if (msCount < 0) {
      clearInterval(timerId);
    }
  }, 1000);
}

function updateTimerValues({ days, hours, minutes, seconds }) {
  if (seconds < 0) {
    return;
  }

  if (Number(refs.countMinutes.innerHTML) !== minutes) {
    refs.countMinutes.innerHTML = addLeadingZero(minutes);
  }

  if (Number(refs.countHours.innerHTML) !== hours) {
    refs.countHours.innerHTML = addLeadingZero(hours);
  }

  if (Number(refs.countDays.innerHTML) !== days) {
    refs.countDays.innerHTML = addLeadingZero(days);
  }

  refs.countSecondss.innerHTML = addLeadingZero(seconds);
}
