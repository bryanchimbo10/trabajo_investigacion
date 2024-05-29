const read = require (`prompt-sync`)();
function menu (){
    let menu=0
    menu=read(`Ingrese un numero del 1-24:  `)
    switch( menu){
        case "1": 
          function ejercicio1(){
            console.log("1.	Algoritmo que transforme de grados Celsius a Fahrenheit")
            let var2=32, celsius=0, fahren=0
            let var3=1.8 
            celsius = read ("Ingrese los grados celcius: ")
            celsius= parseFloat(celsius)
            fahren= celsius*var3+var2
            var3=parseFloat(var3)
            var2= parseInt(var2)
           console.log(`Su nueva temperatura es  ${fahren}`)

           }
           ejercicio1()
        break;
        case "2":
         function ejercicio2 (){
          console.log("2.	Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del ")
         let num1=0, doble=0,triple=0
         num1= read ("ingrese la cantidad para calcular su doble y el triple: ")
         num1 = parseInt(num1)
         doble= num1+num1
         triple=num1+num1+num1
         console.log (`El doble de tu cantidad ingresada es de: `,doble )
         console.log (`El triple de tu cantidad ingresada es de: `,triple )
         }
          ejercicio2()
        break
        case "3":
            function ejercicio3 (){
              console.log("3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética")
                let num1=0, num2=0,num3=0,num4=0,suma=0, media=0
                num1= read ("ingrese una cantidad: ") 
                num1 = parseInt(num1)
                num2= read ("ingrese una cantidad: ")
                num2 = parseInt(num2)
                num3= read ("ingrese una cantidad: ")
                num3 = parseInt(num3)
                num4= read ("ingrese una cantidad: ")
                num4 = parseInt(num4)
                suma=num1+num2+num3+num4
                media=suma/4
                console.log(`la suma de las cantidades es de ${suma}  la media es de ${media} `)
            }
            ejercicio3()
        break;
        case "4":
            function ejercicio4 (){
              console.log("")
                let pl=0, k=0, g=0
                pl= read ("ingrese el peso en libras : ")
                pl = parseInt(pl)
                k= pl/2.20
                g=pl/100
                console.log (`El peso en kilogramos es: `,k)
                console.log (`El peso en gramos es: `,g )
            }
            ejercicio4()
            break;
            case "5":
                function ejercicio5() {
                    console.log("5.	Diseñar un algoritmo que resuelva la siguiente expresión matemática:") 
                    console.log("x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))")
                    let parte1=0, parte2=0, x=0, valora=0, valorb=0,valorc=0
                    const sin = Math.sin
                    const cos = Math.cos
                    const sqrt = Math.sqrt
                    const trunc = Math.trunc
                    const pow = Math.pow
                     valora= read (`ingrese el valor de A: `)
                     valora=parseInt(valora)
                     valorb= read (`ingrese el valor de B: `)
                     valorb=parseInt(valorb)
                     valorc= read (`ingrese el valor de C: `)
                     valorc=parseInt(valorc)
                      parte1 = (sin(valora) + cos(valorb)) * (trunc(valorc) % 2)
                      parte2 = sqrt(pow(valora, 3)) / (valora* valorb + valorc)
                      x = parte1 + parte2;
                     console.log(`el resultado es: ${x}`)
                 }
                 ejercicio5()  
            break;
            case "6":
                function ejercicio6 (){
                  //console.log("6.	Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal. El porcentaje del seguro social(iess) es del 10% del ingreso total. Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.")
                    let horast=0,horasextras=0,ss=0.10,sobretiempo=0,ingtotal=0,ss2=0,sn=0,sueldosemana=0,horasextras2=0
                     horast= read(`Ingrese las horas de trabajo:`)
                     horast=parseInt(horast)
                     if (horast>40){
                        horasextras=read (`Ingrese el total de horas extras:` )
                     horasextras=parseInt(horasextras)
                     horasextras2=horast-horasextras
                     sueldosemana=horasextras2*5
                     st=horasextras*5
                     sobretiempo=st*2
                     ingtotal=sueldosemana+sobretiempo
                     ss2=ingtotal*ss
                     sn=ingtotal-ss2
                
                     console.log(`Rl valor del sueldo de la semana es: ${sueldosemana} ,el valor por sobretiempo es: ${sobretiempo} , el ingreso total es: ${ingtotal}, el descuento del seguro social es: ${ss2} ,el sueldo neto es:${sn}`)
                     }else{
                        sueldosemana=horast*5
                        console.log(`Usted no cuenta con hora extras su sueldo de la semana es: ${sueldosemana}`)
                     }
                }
                ejercicio6()
            break;
            case "7":
                function ejercicio7 (){
                  //console.log("7.	Algoritmo que pida dos números y presenta el mayor de los dos siempre y cando el primero sea par y el segundo impar")
                    let num1=0, num2=0
                    num1= read ("ingrese una cantidad: ") 
                    num1 = parseInt(num1)
                    num2= read ("ingrese una cantidad: ")
                    num2 = parseInt(num2)
                    if (num1%2==0&&num2%2!=0){
                         if (num1>num2){
                            console.log(`El numero ${num1} es mayor`)
                
                        }else{
                            console.log(`El numero ${num2} es mayor`)
                        }
                
                    }else{
                        console.log(`No se cumple con la primera condicion `)
                    }
                }
                ejercicio7()
            break;
            case "8":
                function ejercicio8(){
                  console.log("8.	Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y sino verificar si es un signo de puntuacion , . ; :y si no presentar solo el carácter.")
                    let arreglo4=[]
                    let numero4=0
                    numero4 = read ('ingrese un valor:')
                    arreglo4.push(numero4)
                    numero4 = read ('ingrese un valor:')
                    arreglo4.push(numero4)
                    numero4 = read ('ingrese un valor:')
                    arreglo4.push(numero4)
                    if(arreglo4[1]>arreglo4[0]||arreglo4[1]<arreglo4[2]){
                  
                      console.log ( arreglo4[0],arreglo4[1],arreglo4[2])
                    }
                    else{
                      console.log ( "no cumple las condiciones")
                    }  
                }
                ejercicio8()
            break;
            case "9":
                function ejercicio9(){
                  console.log("9.	Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas, el costo por unidad es de $0,25 caso  contrario el precio será  10% menos.")
                    let cc=0, ds=0.10,dcc=0,cu=0.25,cc2=0,cu2=0 
                    cc= read ("ingrese la cantidad de colas adquiridas: ")
                    cc = parseInt(cc)
                    if (cc<12){
                        cc=cc*cu
                        console.log(` el valor a cancelar por su compra es de ${cc}`)
                    }else{
                       dcc=cu*ds
                       cc2=cu-dcc 
                       cu2=cc*cc2
                
                       console.log(`el valor por unidad con el descuento es ${cc2}, el valor a cancelar por su compra es de ${cu2}`)
                    }
                }
                ejercicio9()
            break;
            case "10":
                function ejercicio10 (){
                 // console.log("El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200, se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.")
                    let valortraje=0, descuento=0.10,descuento2=10,valordescuento=0,valordescuento3=0,iva=0.15,iva1=0,iva2=0
                    valortraje= read ("ingrese el valor del traje: ")
                    valortraje = parseInt(valortraje)
                
                    if (valortraje>200){
                        valordescuento=valortraje*descuento
                        valordescuento3=valortraje-valordescuento
                        iva1=valordescuento3*iva
                        iva2=valordescuento+iva
                        console.log(`El valo incial de su compra es de ${valortraje},  el valor de se traje con descuento es ${valordescuento3}, el precio finala cancelar con iva de 15% es de ${iva2}`)
                      
                    }else {
                        valordescuento=valortraje-descuento2
                        iva1=valordescuento*iva 
                        iva2=valordescuento+iva
                        console.log(`El valo incial de su compra es de ${valortraje},  el valor de se traje con descuento es ${valordescuento}, el precio finala cancelar con iva de 15% es de ${iva2}`)
                    }  
                }
                ejercicio10()
            break;
            case "11":
                function ejercicio11(){
                  console.log("Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.")
                    let diasemana=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
                    let ds=""
                    ds= read(`ingrese un numero compredido entre el 1 y 7: `)
                    if (ds==1){
                      console.log(diasemana[0])
                    }else if (ds==2){
                      console.log(diasemana[1]) 
                    }else if (ds==3){
                      console.log(diasemana[2]) 
                    }else if (ds==4){
                      console.log(diasemana[3]) 
                    }else if (ds==5){
                      console.log(diasemana[4]) 
                    }else if (ds==6){
                      console.log(diasemana[5]) 
                    }else if (ds==7){
                      console.log(diasemana[6]) 
                    }else{
                      console.log(`dia no valido`)
                    }
                  
                  }
                  ejercicio11()
            break;
            case "12":
                function ejercicio12(){
                  console.log("12.	Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.")
                    let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
                    let numeromes=""
                    numeromes= read(`ingrese un numero compredido entre el 1 y 12: `)
                    if (numeromes==1){
                      console.log(meses[0])
                    }else if (numeromes==2){
                      console.log(meses[1]) 
                    }else if (numeromes==3){
                      console.log(meses[2]) 
                    }else if (numeromes==4){
                      console.log(meses[3]) 
                    }else if (numeromes==5){
                      console.log(meses[4]) 
                    }else if (numeromes==6){
                      console.log(meses[5]) 
                    }else if (numeromes==7){
                      console.log(meses[6]) 
                    }else if (numeromes==8){
                      console.log(meses[7]) 
                    }else if (numeromes==9){
                      console.log(meses[8]) 
                    }else if (numeromes==10){
                      console.log(meses[9]) 
                    }else if (numeromes==11){
                      console.log(meses[10])
                    }else if (numeromes==12){
                      console.log(meses[11])
                    }else{
                        console.log(`Mes no valido`)
                    }
                  }
                  ejercicio12()
            break;
            case "13":
                function ejercicio13 (){
                  console.log("13.	Dado 5 nombres almacenarlo en un arreglo y luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos.")
                    let arrglonombre=[]
                     nombre = read ('ingrese un nombre:')
                     arrglonombre.push(nombre)
                     console.log(``)
                     nombre1 = read ('ingrese un nombre:')
                     arrglonombre.push(nombre1)
                     console.log(``)
                     nombre2 = read ('ingrese un nombre:')
                     arrglonombre.push(nombre2)
                     console.log(``)
                     nombre3 = read ('ingrese un nombre:')
                     arrglonombre.push(nombre3)
                     console.log(``)
                     nombre4 = read ('ingrese un nombre:')
                     arrglonombre.push(nombre4)
                     console.log(``)
                     console.log(arrglonombre)
                     console.log(``)
                     arrglonombre= arrglonombre.reverse()
                     console.log(arrglonombre) 
                   }
                   ejercicio13()
            break;
            case "14":
                     function ejercicio14() {
                      console.log("14.	Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección")
                       direccion= read (`Ingrese una direccion: `)
                        let primerCaracter = direccion.charAt(0);
                        let ultimoCaracter = direccion.charAt(direccion.length - 1);
                        let posicionMedio = Math.floor(direccion.length / 2);
                        let caracterMedio = direccion.charAt(posicionMedio)
                        console.log("Dirección: " + direccion);
                        console.log("Primer carácter: " + primerCaracter);
                        console.log("Carácter del medio: " + caracterMedio);
                        console.log("Último carácter: " + ultimoCaracter);
                    }
                    ejercicio14();
            break;
            case "15":
                function ejercicio15(){
                  console.log("15.	Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.")
                    let  valor = parseInt(Math.random()*100)
                    let valores=[]
                    valores.push(valor)
                    valor = parseInt(Math.random()*100)
                    valores.push(valor)
                    valor = parseInt(Math.random()*100)
                    valores.push(valor)
                    valor = parseInt(Math.random()*100)
                    valores.push(valor)
                    valor = parseInt(Math.random()*100)
                    valores.push(valor)
                    
                    console.log(valores)
                  if ((valores[0] % 3 ==0&&valores[0]>0) && (valores[4]%5!=0&&valores[4]<0)){
                    console.log(valores[0],valores[4])
                  }else{
                    console.log (valores[0],valores[4])
                    
                  }
                }
                ejercicio15()
            break;
            case "16":
                function ejercicio16(){
                  console.log("16.	Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.")
                    let arreglo=[]
                  let nombre="",nombre1="",nombre2=""
                  nombre = read ('ingrese un nombre:')
                  arreglo.push(nombre)
                  console.log(``)
                  nombre1 = read ('ingrese un nombre:')
                  arreglo.push(nombre1)
                  console.log(``)
                  nombre2 = read ('ingrese un nombre:')
                  arreglo.push(nombre2)
                  console.log(``)
                  console.log (nombre.charAt(0),nombre.charAt(nombre.length-1))
                  console.log(``)
                  console.log (nombre1.charAt(0),nombre1.charAt(nombre1.length-1)).
                  console.log(``)
                  console.log (nombre2.charAt(0),nombre2.charAt(nombre2.length-1))
                }
                ejercicio16()
            break;
            case "17":
                function ejercicio17(){
                  console.log("17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito")
                    console.log("17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito")
                    console.log("")
                    let cadena=""
                    //,vocal1="a",vocal2="e",vocal3="i",vocal4="o",vocal5="u",vocal6="A",vocal7="E",vocal8="I",vocal9="O",vocal10="U"
                    const numeros="0123456789"
                    cadena= read(`Ingrese un caracter: `)
                    console.log(``)
                
                    if (cadena[0]==numeros.charAt(0)){
                      console.log(`${cadena[0]}...`)
                    }else{
                        console.log(`No se cumplen las condiciones...`)
                    }
                    
                
                }
                ejercicio17()
            break;
            case "18":
                function ejercicio18() {
                  console.log("18.	Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra")
                    let cadena=""
                    
                    const vocales="bcdfghjklmnñpqrstvwxyzBCDFGHJLMNPRQSTVWXYZ"
                    cadena= read(`Ingrese un caracter: `)
                    console.log(``)
                   
                   
                    if (cadena.charAt([cadena.length-1])==vocales.charAt([cadena.length-1])){
                      console.log(`${cadena.charAt(cadena.length-1)}...`)
                    }else{
                        console.log(`No se cumplen las condiciones...`)
                    }   
                }
                ejercicio18();
            break;
            case "19":
                function ejercicio19(){
                  console.log("19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal")
                    let cadena=""
                    const vocales="aeiouAEIOU"
                    cadena= read(`Ingrese un caracter: `)
                    console.log(``)
                   
                    if (cadena[0]==vocales.charAt(0)){
                      console.log(`${cadena[0]}...`)
                    }else{
                        console.log(`No se cumplen las condiciones...`)
                    }
                    
                
                }
                ejercicio19()
            break;
            case "20":
                function ejercicio20() {
                  console.log("20.	Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,”")
                    let cadena=""
                    const vocales=":;,."
                    cadena= read(`Ingrese un caracter: `)
                    console.log(``)
                    if (cadena.charAt([cadena.length/2])==vocales.charAt([cadena.length/2])){
                      console.log(`${cadena.charAt(cadena.length/2)}...`)
                    }else{
                        console.log(`No se cumplen las condiciones...`)
                    }
                }
                ejercicio20();
               
            break;
            case "21":
                function ejercicio21(){
                  console.log("21.	Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
                    let caracter1="",caracter2=""
                    caracter1= read(`Ingrese el primer caracter: `)
                    caracter2=read(`Ingrese el segundo caracter: `)
                    if ( caracter1==caracter2||caracter1<caracter2||caracter1>caracter2){
                        console.log(`Las condiciones se cumplen`)
                    }else {
                        console.log(`Las condiciones no se cumplen`)
                    }
                }
                ejercicio21()
                
            break;
            case "22":
                function ejercicio22 (){
                  console.log("22.	Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
                    let nombre=["ana","jose"]
                    if (nombre[0]==nombre[1]){
                        console.log("Los nombres son iguales. ")
                    }else if(nombre[0]>nombre[1]){
                        console.log ("El primer nombre es mayor que el segundo. ")
                      }else{
                        console.log ("El primer nombre es menor que el segundo. ")
                    }
                
                }
                ejercicio22()
            break;
            case "23":
                function ejercicio23(){
                  console.log("23.	Dado una cadena indicar cuantos elementos tiene, sin usar ciclos ")
                    let Cadena = "";
                    Cadena= read (`Ingrese la cadena: `)
                    let numeroCaracteres = Cadena.length;
                    console.log(`La cadena tiene ${numeroCaracteres} caracteres.`);
                  }
                  ejercicio23()
            break;
            case "24":
                function ejercicio24(){
                  console.log("24.	Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos")
                    let arreglo = [1, 2, 3, 4, 5], numeroElementos=0;
                    numeroElementos = arreglo.length;
                    console.log(`El arreglo tiene ${numeroElementos} elementos.`);
                }
                ejercicio24()
            break;
            default:
            console.log(`no existe ejercicio para el el número ingresado...`)
            break;





    }
}
menu()