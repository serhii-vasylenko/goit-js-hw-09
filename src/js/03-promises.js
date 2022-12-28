import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  useIcon: false,
  fontSize: '16px',
});

const refs = {
  formContainer: document.querySelector('.form'),
  delayInput: document.querySelector('[name="delay"]'),
  stepInput: document.querySelector('[name="step"]'),
  amountInput: document.querySelector('[name="amount"]'),
};

refs.formContainer.addEventListener('submit', event => {
  event.preventDefault();

  const { amount, delay, step } = event.target.elements;
  let currentDelay = Number(delay.value);

  for (let i = 1; i <= amount.value; i++) {
    createPromise(i, currentDelay)
      .then(({ position, delay }) => onSuccess({ position, delay }))
      .catch(({ position, delay }) => onError({ position, delay }));
    currentDelay += Number(step.value);
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }
      reject({ position, delay });
    }, delay);
  });
}

function onSuccess({ position, delay }) {
  Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
}

function onError({ position, delay }) {
  Notify.failure(`Rejected promise ${position} in ${delay}ms`);
}
