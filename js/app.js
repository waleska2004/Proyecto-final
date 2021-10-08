var lblSigno = document.getElementById("lbl-signo")
var txtNumero = document.getElementById("txt-numero")
var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var n3 = document.getElementById("n3")
var n4 = document.getElementById("n4")
var n5 = document.getElementById("n5")
var n6 = document.getElementById("n6")
var n7 = document.getElementById("n7")
var n8 = document.getElementById("n8")
var n9 = document.getElementById("n9")
var n0 = document.getElementById("n0")
var btnsum = document.getElementById("btn-sum")
var btnrest = document.getElementById("btn-rest")
var btnmult = document.getElementById("btn-mult")
var btndiv = document.getElementById("btn-div")
var btnpor = document.getElementById("btn-por")
var btnelev = document.getElementById("btn-elev")
var btnraiz = document.getElementById("btn-raiz")
var btnln = document.getElementById("btn-ln")
var btnlog = document.getElementById("btn-log")
var btnans = document.getElementById("btn-ans")
var btndel = document.getElementById("btn-del")
var btnac = document.getElementById("btn-ac")
var btnpt = document.getElementById("btn-pt")
var btnigual = document.getElementById("btn-igual")

var num1 = 0
var num2 = 0
var ans = 0
var signo = ""

 txtNumero.value = ""
console.log("*********")


/*n4.addEventListener('click',interaccionBotones)*/
n1.addEventListener('click', seleccionNumero)
n2.addEventListener('click', seleccionNumero)
n3.addEventListener('click', seleccionNumero)
n4.addEventListener('click', seleccionNumero)
n5.addEventListener('click', seleccionNumero)
n6.addEventListener('click', seleccionNumero)
n7.addEventListener('click', seleccionNumero)
n8.addEventListener('click', seleccionNumero)
n9.addEventListener('click', seleccionNumero)
n0.addEventListener('click', seleccionNumero)
btnpt.addEventListener('click', seleccionNumero)
btnsum.addEventListener('click',seleccionarSigno)
btnrest.addEventListener('click',seleccionarSigno)
btndiv.addEventListener('click',seleccionarSigno)
btnmult.addEventListener('click',seleccionarSigno)
btnpor.addEventListener('click',seleccionarSigno)
btnraiz.addEventListener('click',seleccionarSigno)
btnelev.addEventListener('click',seleccionarSigno)
btnln.addEventListener('click',seleccionarSigno)
btnlog.addEventListener('click',seleccionarSigno)
btnans.addEventListener('click',respuesta)
btnigual.addEventListener('click', igual)
btnac.addEventListener('click', borrarTodo)
btndel.addEventListener('click', delite)

function prueba(){
  console.log("Click de prueba "+this.value) 
}

function seleccionNumero(){
  console.log("Click correcto")
  txtNumero.value = txtNumero.value + this.value
}
function seleccionarSigno(){
  signo = this.value
 lblSigno.innerHTML = signo
  num1 = parseFloat(txtNumero.value)
  console.log(num1)
  txtNumero.value = ""
}

function respuesta(){
  txtNumero.value= ans
}
function igual(){
  num2 = parseFloat(txtNumero.value)
  switch (signo) {
    case "/":
      {
      console.log(parseInt(num1.value)/parseInt(num2.value))
    console.log(num1/num2)
       ans = (num1/num2)
       txtNumero.value = ans
        break
        
      }
    case "*":
      {
      console.log(parseInt(num1.value)*parseInt(num2.value))
      console.log(num1*num2)
        ans= (num1*num2)
      txtNumero.value = ans
        break
       
      }
    case "+":
      {
      console.log(parseInt(num1.value)+parseInt(num2.value))
      console.log(num1+num2)
         ans= (num1+num2)
      txtNumero.value = ans
        break
    
      }
      case "-":
      {
      console.log(parseInt(num1.value)-parseInt(num2.value))
      console.log(num1-num2)
          ans = (num1-num2)
       txtNumero.value = ans
        break
   
      }
      case "%":
      {
         console.log(parseInt(num1.value)*parseInt(num2.value)/100)
      console.log(num1*num2/100)
        ans = (num1*num2/100)
       txtNumero.value = ans
        break
     
      }
       case "ln":
      {
      console.log(Math.log(parseInt(num1.value)))
      console.log(Math.log(num1))
        ans = Math.log(num1)
       txtNumero.value = ans
        break
     
      }
      case "log":
      {
      console.log(Math.log10(parseInt(num1.value)))
      console.log(Math.log10(num1))
      ans = Math.log10(num1)
      txtNumero.value = ans
        break
     
      }
       case "√ ":
      {
       console.log(Math.sqrt(parseInt(num1.value)))
      console.log(Math.sqrt(num1))
       ans = Math.sqrt(num1)
       txtNumero.value = ans
        break
      }
      case "x²":
      {
      console.log(parseInt(num1.value)*parseInt(num1.value))
      console.log(num1*num1)
       ans= (num1*num1)
       txtNumero.value = ans
        break
    
      }
  }
}
function borrarTodo(){
  txtNumero.value = ""
}
function delite(){
  txtNumero.value = txtNumero.value.substring(0, txtNumero.value.length - 1)
}
