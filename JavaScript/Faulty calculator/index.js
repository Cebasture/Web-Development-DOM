console.log("Faulty Calculator")

function calc() {
    let a = prompt("enter num1")
    let b = prompt("enter num2")
    let Op = prompt("Enter 1 for +, 2 for -, 3 for *, 4 for /")
    let num = Math.random()
    if (num > 0.1) {
        if (Op == 1) {
            prompt(a + b)
        }
        else if (Op == 2) {
            prompt(a - b)
        }
        else if (Op == 3) {
            prompt(a * b)
        }
        else if (Op == 4) {
            prompt(a / b)
        }
    }
    else{
        if (Op == 1) {
            prompt(a - b)
        }
        else if (Op == 2) {
            prompt(a / b)
        }
        else if (Op == 3) {
            prompt(a + b)
        }
        else if (Op == 4) {
            prompt(a ** b)
        }
    }
}

calc()