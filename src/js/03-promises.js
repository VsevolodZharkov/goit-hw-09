const form = document.querySelector('.form');
form.addEventListener('submit', inputVal);
let delayVal;
let stepVal;
let amountVal;
let delayNum;
function inputVal(e) {
  e.preventDefault();
  const { delay, step, amount } = e.target.elements;
  delayVal = Number(delay.value);
  stepVal = Number(step.value);
  amountVal = Number(amount.value);
  for ( let i = 1,delayNum = delayVal; i <= amountVal; i += 1, delayNum += stepVal ) {
		console.log(delayNum);
		setTimeout(() => {
    	createPromise( i, delayNum )
      .then(( i, delayNum ) => {
        console.log(`✅ Fulfilled promise ${i} in ${delayNum}ms`);
      })
      .catch(( i, delayNum ) => {
        console.log(`❌ Rejected promise ${i} in ${delayNum}ms`);
      });
  	}, delayNum )
	}
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(position, delay);
			return;
    } 
    reject(position, delay);
  });
}

// 	const btnRef = document.querySelector('.submit');
// 	const formRef = document.querySelector('.form');
// 	const STORAGE_KEY = 'formData';
// 	let numberPromis = 0;
// 	let diff = '';

// 	// let delayEL = ;
// 	const inputHandler = e => {
// 		const { name, value } = e.target;

// 	const savedData = localStorage.getItem(STORAGE_KEY);
// 	const parsedData = JSON.parse(savedData);

// 		const formData = {
// 		...parsedData,
// 		[name]: value,
// 		};

// 		const serlizedData = JSON.stringify(formData);
// 		localStorage.setItem(STORAGE_KEY, serlizedData);
// 	};

// const xmite = (e) => {
// 	e.preventDefault();
// 	const savedData = localStorage.getItem(STORAGE_KEY);
// 	const parsedData = JSON.parse(savedData);
// 	diff = parsedData;
// 	const { position, delay, amount } = diff;

// 	for ( let i = 0; i < amount; i++ ) {

// 		createPromise();
// 	};
// };

// const createPromise = () => {
// 	const prom = new Promise((resolve, reject) => {
// 			const shouldResolve = Math.random() > 0.3;
// 		setTimeout(() => {
// 			if(shouldResolve) {
// 				numberPromis += 1;
// 				console.log(numberPromis);
// 				console.log(00)
// 				resolve();
// 			} else {
// 				numberPromis += 1;
// 				console.log(numberPromis);
// 				console.log(77)
// 				reject((err) => {
// 					if (err)
// 						console.log("Adding Location error" + err);
// 					return Promise.reject();
// 				});
// 			}
// 		},1000)
// 	})
// 	return prom;
// };
// createPromise()
// .then(( position, delay ) => {
// 	console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// })
// .catch(( position, delay ) => {
// 	console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// });
// formRef.addEventListener('input', inputHandler);
// btnRef.addEventListener('click', xmite);
