// let m
// let i
// let nombre=prompt('veuillez entre une valeur de ton choix!');
// let c=prompt("veuillez l'operateur que vous voulez");
// let b=Number(nombre)
//     // let b=prompt('veuillez entre une valeur de ton choix!');
//     document.write("la table multiplication de "+b)
//      if(c=='-'){
//         document.write("<br>")
//         for(i=0;i<=10;i++){
//             m=b-i
//             document.write("<br>")
//             document.write(b+"-"+i+"="+m)
//         }
//      }  
//       else if (c=='*'){
//         document.write("<br>")
//         for(i=0;i<=10;i++){
//             m=b*i
//             document.write("<br>")
//             document.write(b+"*"+i+"="+m) 
//         }
//      }
//      else if(c=='/'){
//         document.write("<br>")
//         for(i=0;i<=10;i++){
//             m=b/i
//             document.write("<br>")
//             document.write(b+"/"+i+"="+m)
//         }
//      } 
//     else {
//     document.write("<br>")
//     for(i=0;i<=10;i++){
//         m=b+i
//         document.write("<br>")
//         document.write(b+"+"+i+"="+m)
//     }
// }
// function fonction(){
//  let nom=prompt('veuillez entre votre nom')
// while(nom==''){
//             nom=prompt('veuillez entre votre nom')
// }
// let name=prompt('veuilez confirme votre nom')
// while(name==''){
//     name=prompt('veuilez confirme votre nom') 
// }
//  if(nom==name){
//      alert('bonjour '+nom)
//  }
//  else{
//     alert('les deux nom ne sont pas egaux*')
//  }
// }
// fonction()
// let b=document.getElementById('p2')
// function fonction(){
// document.getElementById('b1').style.backgroundColor="red"    
// document.getElementById('p1').innerHTML=b.innerHTML
// document.getElementById('p1').style.background="cyan"
// }


let moi=prompt("veuillez entre  la position d'une mois")
let mois=parseInt(moi,10)
    function fonction(){
            if(mois==1){
                alert("vous dans le mois Janvier")
            }
            else if(mois==2){
                alert("vous dans le mois Fevrier")
            }
            else if(mois==3){
                alert("vous dans le mois Mars")
            }
            else if(mois==4){
                alert("vous dans le mois Avril")
            }
            else if(mois==5){
                alert("vous dans le mois Mais")
            }
            else if(mois==6){
                alert("vous dans le mois Juin")
            }
            else if(mois==7){
                alert("vous dans le mois Juiller")
            }
            else if(mois==8){
                alert("vous dans le mois Aout")
            }
            else if(mois==9){
                alert("vous dans le mois Septembre")
            }
            else if(mois==10){
                alert("vous dans le mois Octobre")
            }
            else if(mois==11){
                alert("vous dans le mois November")
            }
            else if(mois==12){
                alert("vous dans le mois Decembre")
            }
            else{








                throw("cette nombre est une erreur ")
            }
    }

try{
    fonction()
}
catch(e){
    alert(e)
}


















