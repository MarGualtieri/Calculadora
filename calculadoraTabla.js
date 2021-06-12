var cifra="";
var acumulador=0;
var restar=false;
var sumar=false;
var p_operacion=true;
var numero1=0;
var numero2=0;
var memoria=new Array;



function display_numeros(numero) {
    document.getElementById("display").value=cifra+numero;

    cifra=document.getElementById("display").value
}

function suma() {
  
   if (sumar==false) {
    acumulador=parseInt(document.getElementById("display").value);
    cifra=0;
   }

    if (restar) {
        acumulador=acumulador-parseInt(cifra);
        document.getElementById("display").value=acumulador;
      
       }else{
        acumulador=acumulador+parseInt(cifra);
      
        document.getElementById("display").value=acumulador;
      
       }


        cifra="";
        restar=false;
        sumar=true;
        p_operacion=false;

}
function resta() {

   
   if (p_operacion==false) {
       
  
   
   
    if (sumar) {
    acumulador=acumulador+parseInt(cifra);
    document.getElementById("display").value=acumulador;
   }else{
    acumulador=acumulador-parseInt(cifra);
  
    document.getElementById("display").value=acumulador;
    
   }
}else{

    acumulador=parseInt(cifra);
    p_operacion=false;

}
   cifra="";
   sumar=false;
   restar=true;

}
    

    function multiplicar() {
        
        if (memoria[0]!=null) {
            memoria[1]=parseInt(document.getElementById("display").value)
            document.getElementById("display").value=memoria[0]*memoria[1];

        }else{

            memoria[0]=parseInt(document.getElementById("display").value);
            document.getElementById("display").value=memoria[0];
        }
       
       
      

    }

    function resultado() {
        
        if (sumar) {
          
            document.getElementById("display").value=acumulador+parseInt(cifra);  
        }else if(restar){
            document.getElementById("display").value=acumulador-parseInt(cifra);
        }
        acumulador=parseInt(document.getElementById("display").value);
        cifra=0;

    }
    function borrar() {
         cifra="";
        acumulador=0;
    document.getElementById("display").value=0;
    restar=false;
     sumar=false;
    p_operacion=true;
    }