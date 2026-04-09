const input = document.getElementById('numberInput')
const ravno = document.getElementById('ravno')
const clear = document.getElementById('clear')

let operator

document.querySelectorAll('.calculator-buttons-row1 button, .calculator-buttons-row2 button, .calculator-buttons-row3 button').forEach(button => {
    button.addEventListener('click', () => {
        input.value += button.textContent
    })
})

document.querySelectorAll('.operator-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        input.value += button.textContent
        operator = button.textContent
    })
})


ravno.addEventListener('click', () => {
    let expression = input.value
    let match = expression.match(/(\d+)([+\-*/])(\d+)/)
    
    if (match) {
        let a = +match[1]  
        let operatorChar = match[2]  
        let b = +match[3]  
        let result

        switch(operatorChar) {
            case '+': result = a + b; break
            case '-': result = a - b; break
            case '*': result = a * b; break
            case '/': result = b !== 0 ? a / b : 'Error'; break
        }
        
        const paragraph = document.createElement('p')
        paragraph.textContent = `Результат вычислений: ${input.value} ${result}`
        paragraph.classList.add('styled-paragraph')
        document.body.appendChild(paragraph)
        input.value = ''
        
    }
})

clear.addEventListener('click', () => {
    input.value = ''
    operator = ''
})
