import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
  let timeout = Number(delay.value);
  
  for (let i = 1; i <= amount.value; i++) {
    setTimeout(() => {      
      createPromise(i, currentDelay)
        .then(result => onSuccess(result))
        .catch(error => onError(error));
        currentDelay += Number(step.value);
    }, timeout);
    timeout += Number(step.value);
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`Fulfilled promise ${position} in ${delay}ms`);
    }
    reject(`Rejected promise ${position} in ${delay}ms`);
  });
}

function onSuccess(result) {
  Notify.success(result);
}

function onError(error) {
  Notify.failure(error);
}
