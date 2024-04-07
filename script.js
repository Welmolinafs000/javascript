const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")
const currencyselecttoconvert = document.querySelector(".currency-select-to-convert")

const convertvalues = async () => {
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") // valor do real
    const currencyvalueconverted = document.querySelector(".currency-value") // valor converdido outras moedas

    
    
    

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolartoday = data.USDBRL.high
    const eurotoday = data.EURBRL.high
    const librastoday = 6.20
    const bitcointoday = 0.00000467
    console.log(data)

    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)
    

    if (currencyselect.value == "dolar") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyvalue / dolartoday)
    }

    if (currencyselect.value == "euro") {
        currencyvalueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyvalue / eurotoday)

        
        }

        if (currencyselect.value == "libras" ){
            currencyvalueconverted.innerHTML = new Intl.NumberFormat("en-GB",{
                style: "currency",
                currency: "GBP"
            }).format(inputcurrencyvalue/librastoday)
        }



    }

    function changecurrency() {
        const currencydolar = document.getElementById("currency-dolar")
        const currencyimagedolar = document.querySelector(".dolar-image")
        const currencyimagereal = document.querySelector(".real-image") // converter outras moeda para o real, image do real para outra
        const  currencyreal = document.getElementById("currency-real")  // outras moedas para o real, o nome real para outra moeda

        if (currencyselect.value == "libras"){
            currencyimagedolar.src = "./assets/libra.png"
            currencydolar.innerHTML = "Libras"
        }

        if (currencyselect.value == "dolar") {
            currencydolar.innerHTML = "Dolar Americano"
            currencyimagedolar.src = "./assets/Dolar.png"


        }
        if (currencyselect.value == "euro") {
            currencydolar.innerHTML = "Euro"
            currencyimagedolar.src = "./assets/Euro.png"
        }
        convertvalues()
    }
    currencyselect.addEventListener("change", changecurrency)
    convertbutton.addEventListener("click", convertvalues)
