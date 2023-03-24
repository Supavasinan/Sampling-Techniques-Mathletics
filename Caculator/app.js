
let form = document.querySelector("#forminput")
const discrepancy = document.querySelector("#discrepancyofvalue")
const value = document.querySelector("#inputvalueofgroup")
let resulted = document.querySelector("#test")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const CachesValue = +value.value
    const CachesDiscrepancy = +discrepancy.value / 100
    if (!CachesValue || !CachesDiscrepancy) {
        Swal.fire({
            title: 'Error!',
            text: 'You need to fill out the data.',
            icon: 'error'
          })
    }else {

        result = CachesValue / (1 + CachesValue * Math.pow(CachesDiscrepancy ,2))
        resulted.innerHTML = "result :&nbsp;"+result 
    }
    

})