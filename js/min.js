//iphone mobile 

document.getElementById("Increment").addEventListener("click", function(){
    handleCase(true, "phone")
})
document.getElementById("Decrement").addEventListener("click", function(){
    handleCase(false, "phone")
})

// iphone mobile cass 

document.getElementById("case-increment").addEventListener("click", function(){
   handleCase(true, "case")
})
document.getElementById("case-decrement").addEventListener("click", function(){
    handleCase(false, "case")
})

function handleCase(isIncrement, product) {
    const productInput = document.getElementById(product + "-count").value
    const productCount = parseFloat(productInput)
    let productNewCount = productCount
    if(isIncrement == true){
        productNewCount = productCount + 1
    }
    if(isIncrement == false && productCount > 0){
        productNewCount = productCount - 1
    }
    document.getElementById(product + "-count").value = productNewCount

    // totalPrice = productNewCount * 59
    let totalPrice = 0;
    if(product == 'phone'){
        totalPrice = productNewCount * 1219;
    }
    if (product == 'case') {
        totalPrice = productNewCount * 59;
    }
    document.getElementById(product + "-total").innerText = totalPrice
    calculateTotal()
}

function calculateTotal(){
    const phoneCount = getInputValue('phone')
    const caseCount = getInputValue('case')

    const subTotal = phoneCount * 1219 + caseCount * 59
    document.getElementById("subTotal").innerText = "$ "+ subTotal

    const tax = Math.round(subTotal * 0.1) 
    document.getElementById("tax").innerText = "$ " + tax 

    const total = subTotal + tax 
    document.getElementById("total").innerText = "$ " + total 
    // const total = subTotal + tax
}

function getInputValue (product){
    const productInput = document.getElementById(product + "-count").value
    const productValue = parseFloat(productInput)
    return productValue;
}







// function handleProductChange(isIncrement){
//     const inputNumber = document.getElementById("inputNumber").value
//     const inputCount = parseFloat(inputNumber)
//     let newCount = inputCount;
//     if(isIncrement == true){
//         newCount = inputCount + 1
//     }
//     if(isIncrement == false && inputCount > 0){
//         newCount = inputCount - 1
//     }
//     document.getElementById("inputNumber").value = newCount
    
//     const totalPrice = newCount * 1219
//     document.getElementById("iphonePrice").innerText = totalPrice
// }


// function handleCase(isIncrement) {
//     const caseInput = document.getElementById("caseInput").value
//     const caseCount = parseFloat(caseInput)
//     let caseNewCount = caseCount
//     if(isIncrement == true){
//         caseNewCount = caseCount + 1
//     }
//     if(isIncrement == false && caseCount > 0){
//         caseNewCount = caseCount - 1
//     }
//     document.getElementById("caseInput").value = caseNewCount

//     totalPrice = caseNewCount * 59
//     document.getElementById("casePrice").innerText = totalPrice
// }