

fetch('https://v6.exchangerate-api.com/v6/1d2ffcada273c97d7dd73c6d/latest/USD')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
