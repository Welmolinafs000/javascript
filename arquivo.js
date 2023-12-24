const buttonconvert = document.querySelector(".button-convert")
const currencyselectconverted = document.querySelector(".currency-select-converted")

function convertvalues() {
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert")
    const currencyvalueconverted = document.getElementById("currency-value-converted")

    const dolartoday = 4.86
    const eurotoday = 5.36
    const libratoday = 6.16

    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)

    if (currencyselectconverted.value == "dolar") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolartoday)


    }

    if (currencyselectconverted.value == "euro") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)
    }

    if (currencyselectconverted.value == "libra") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputcurrencyvalue / libratoday)
    }
}

function changecurrency() {
    const changeimageconverted = document.querySelector(".img-currency-converted")
    const currecyconverted = document.querySelector(".currencyconverted")

    if (currencyselectconverted.value == "dolar") {
        changeimageconverted.src = "./assets/dolar.png"
        currecyconverted.innerHTML = "Dólar"
    }

    if (currencyselectconverted.value == "euro") {
        changeimageconverted.src = "./assets/euro.png"
        currecyconverted.innerHTML = "Euro"
    }

    if (currencyselectconverted.value == "libra") {
        changeimageconverted.src ="./assets/libra.png"
        currecyconverted.innerHTML = "Libra"
    }



    convertvalues()
}

buttonconvert.addEventListener("click", convertvalues)
currencyselectconverted.addEventListener("change", changecurrency)