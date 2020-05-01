const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const errorContainer = document.querySelector('#error')
const resultContainer = document.querySelector('#result')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchElement.value

    errorContainer.textContent = ''
    resultContainer.textContent = 'Loading...'
    
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                errorContainer.textContent = data.error
                resultContainer.textContent = ''
            } else {
                resultContainer.textContent = data.location + ': ' + data.forecast
                errorContainer.textContent = ''
            }
        })
    })
})