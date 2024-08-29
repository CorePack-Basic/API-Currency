
let AmountInput = document.querySelector(".amounts")
let egyptInput =  document.querySelector(".egypt")
let syrianInput =  document.querySelector(".syrian")


fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=972a219c04ec4c25807eb8bf18ecab7a").then((reasonValue) => {
    let myData = reasonValue.json();
    return myData
}).then((latestData) => {
    console.log(latestData)
        AmountInput.oninput = function () {
            egyptInput.value = AmountInput.value * latestData.rates["EGP"];
            syrianInput.value = AmountInput.value * latestData.rates["SAR"];
        }
})
