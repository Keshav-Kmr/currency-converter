const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rate and update DOM
function calculate() {
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;

  fetch(
    `https://v6.exchangerate-api.com/v6/db9dd06ef07d2112693c914d/latest/${currency_one}`
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currency_two];

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
}

// Event listener
currencyOne.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
currencyTwo.addEventListener("change", calculate);
amountTwo.addEventListener("input", calculate);

swap.addEventListener("click", () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;

  calculate();
});

calculate();

// const currencyOne = document.getElementById( 'currency-one');
// const currencyTwo = document.getElementById( 'currency-two');
// const amountOne = document.getElementById( 'amount-one');
// const amountTwo = document.getElementById( 'amount-two');
// // const currencyOne = document.getElementById( 'currency-One');
// const rate = document.getElementById( 'rate');
// const swap = document.getElementById('swap');
//
// function calculate(){
//   const currOne = currencyOne.value;
//   const currTwo = currencyTwo.value;
//
//
//   fetch(`https://free.currconv.com/api/v7/convert?q=${currOne}_${currTwo}&compact=ultra&apiKey=2cb1b6b1ce60b793198f`)
//   .then((res => res.json())
// .then((data) => {
//       console.log (data);
//         const rateE = data.rates[currTwo];
//
//      rate.innerText = `1 ${currOne} = ${rateE} ${currTwo} `;
//      amountTwo.value = (amountOne.value * rateE).toFixed(2);
//      console.log (data);
//   });
// }
//
//
// currencyOne.addEventListener('change', calculate);
// currencyTwo.addEventListener('change', calculate);
// amountOne.addEventListener('input', calculate);
// amountTwo.addEventListener('input', calculate);
// swap.addEventListener('click',()=>{
//   const temp = currencyOne.value;
//   currencyOne.value = currencyTwo.value;
//   currencyOne.value = temp;
//   calculate();
// });
// calculate();
//  // console.log(currencyOne.value);
