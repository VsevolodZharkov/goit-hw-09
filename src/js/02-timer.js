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
let currentTime = null;
let diff = null;

startRef.disabled = true;

flatpickr(inputRef, {
	enableTime: true,
	time_24hr: true,
	defaultDate: new Date(),
	minuteIncrement: 1,
	onClose(selectedDates) {
		if (selectedDates[0] === date || selectedDates[0] < date) {
			window.alert('Please choose a date in the future');
		} else if (selectedDates[0] > date) {
			currentTime = selectedDates[0];
			startRef.disabled = false;
		}
	},
});

function startOfTiming() {
  const renderTime = () => {
		startRef.disabled = true;
		inputRef.disabled = true;
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

startRef.addEventListener('click', startOfTiming);
























// import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';

// Notiflix.Notify.init({
//   width: '300px',
//   position: 'center-top',
//   closeButton: false,
// });

// const date = document.querySelector('#datetime-picker');
// const button = document.querySelector('[data-start]');
// const day = document.querySelector('[data-days]');
// const hour = document.querySelector('[data-hours]');
// const minute = document.querySelector('[data-minutes]');
// const second = document.querySelector('[data-seconds]');

// let timerId = null;

// button.disabled = true;

// flatpickr(date, {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] <= Date.now()) {
//       Notiflix.Notify.failure('Please choose a date in the future');
//     } else {
//       button.disabled = false;

//       // console.log(selectedDates[0]);
//     }
//   },
// });

// button.addEventListener('click', onClickStart);

// function onClickStart() {
//   timerId = setInterval(() => {
//     date.disabled = true;
//     button.disabled = true;
//     const choosenDate = new Date(date.value);
//     const timeToFinish = choosenDate - Date.now();

//     let { days, hours, minutes, seconds } = convertMs(timeToFinish);

//     day.textContent = days < 10 ? '0' + days : days;
//     hour.textContent = hours < 10 ? '0' + hours : hours;
//     minute.textContent = minutes < 10 ? '0' + minutes : minutes;
//     second.textContent = seconds < 10 ? '0' + seconds : seconds;

//     if (timeToFinish < 1000) {
//       clearInterval(timerId);

//       button.disabled = true;
//     }
//   }, 1000);
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };



