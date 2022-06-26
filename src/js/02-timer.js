import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputRef = document.querySelector('input');
const startRef = document.querySelector('button');
const timerRef = document.querySelector('.timer');
const dayEl = document.querySelector('span[data-days]');
const hourEl = document.querySelector('span[data-hours]');
const minuteEl = document.querySelector('span[data-minutes]');
const secondEl = document.querySelector('span[data-seconds]');

const date = new Date();
let currentTime = '';
let diff = '';


startRef.setAttribute('disabled', 'disabled');

function openWindowSelection() {
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] === date || selectedDates[0] < date) {
        window.alert('Please choose a date in the future');
      } else if (selectedDates[0] > date) {
        currentTime = selectedDates[0];
        startRef.removeAttribute('disabled', 'disabled');
      }
    },
  };
  flatpickr(inputRef, options);
}

function startOfTiming() {
  const renderTime = () => {
    let date = new Date();
    const userTimeOut = new Date(currentTime);
    diff = userTimeOut - date;
    if (diff < 0) {
      clearInterval();
      timerRef.textContent = 'Отсчет окончен!';
    } else {
      const { days, hours, minutes, seconds } = convertMs(diff);
      secondEl.innerHTML = seconds < 10 ? '0' + seconds : seconds;
      minuteEl.innerHTML = minutes < 10 ? '0' + minutes : minutes;
      hourEl.innerHTML = hours < 10 ? '0' + hours : hours;
      dayEl.innerHTML = days < 10 ? '0' + days : days;
    }
  };
  setInterval(renderTime, 1000);
}

function convertMs(ms) {
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

inputRef.addEventListener('click', openWindowSelection);
startRef.addEventListener('click', startOfTiming);