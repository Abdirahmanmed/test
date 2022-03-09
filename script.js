// document.getElementById('demo').innerHTML="bonjour et bienvenue sur mon site web";
// document.write("Hello!  "); 
// window.alert("attention !");

// let x =2;
// let y =6;

// console.log('x est :',x);
// console.log('y est :',y);

// exo1: faire un programme qui affiche la multiplication?
// let x =2;
// let a =1*2;
// let  b = 2*2;
// let c = 3*2;
// let d = 4*2;
// let e = 5*2;
// let f = 6*2;
// let g = 7*2;
// let h = 8*2;
// let i = 9*2;
// let k = 10*2;

// document.write(a);
// document.write(b);
// document.write(c);
// document.write(d);
// document.write(e);
// document.write(f);
// document.write(g);
// document.write(h);
// document.write(i);
// document.write(k);

// // fair un programme qui permet de determine les noms de vos parent une fois qu on sais 

// let pere =" abdi";
// let mere =" halima";

// let verification = pere=="abdi" || mere=="halimo";
// console.log(verification?"il a reconnu les deux parents ":"il n'a pas reconnu"); 
// let verfication=mere==name;
// document.write(verfication?"le nom de mere est reconnu":"le nom de mere ne pas reconnu");
// //faire un programmer qui permet determiner 
// let a=45;
// let d=45;
// let m;
// while (i<10){
//   m=1*5;
// }
// console.log(m);


 

// let num=255;
// num++;
// let txt="255";
// let bin=true;
// let flt=7.23;
// flt +=num;
// document.write(num+"   ");
// document.write(typeof(num)+"   ");
// document.write(txt +"est une chaine de caracter" +"   " );
// document.write(typeof(txt)+"   ");
// document.write(!bin +" ");
// document.write(typeof(bin)+"   "); 
// document.write(flt +" ");
// document.write(typeof(flt)+"   ");
// let num=25;
// let txt="25";
// document.write(num+parseInt(txt));
// comment declare array
// const tab=["abdi","ali",12123,233,99];

// acceder un element du tableau
// document.write(tab[1]);
// tab[2]="merci de m'avoir accept"
// document.write(tab[2])
// document.write(tab.length)

// let tab1=[1,2,3];
// let item=tab1[1];
// tab1[1]=5;
// document.write(tab1[1]);
// ajouter un element a la fin du tableau sachant que le tableau est compose trois ligne
// let tab1=[1,2,3];
// tab1.push(13);
// tab1.push(14);
// document.write(tab1[4]);
// ajouter un element dans un tableau on utilise push et retourne la taille du tableau
// suprimer le dernier element dans un tableau on utilise poop et retourne element qui a ete supprimer
// suprimer le premier element dans un tableau on utilise shift et retourne element qui a ete supprimer
//ajouter au debut   element dans un tableau on utilise unshift et retourne la taille du tableau
// exo1
// let semain=["lun","mra","mer","jeu","ven","sam","ddi"];
// let elementSupprimer=semain.pop();
// document.write(semain);
// let tailler=semain.push("dim");
// document.write(semain);
// semain[1]="mar"
// document.write(semain+"  ");
// document.write(tailler);
// document.write("  "+ semain[2]);
let fruit=["Mangue","Rasin","Figo","wiki","orange"];
document.write("<br>");
document.write(fruit)
document.write("<br>");
let fruit_client=prompt("veuillez saisir le fruit que vous desire!");
document.write("les fruit que vous desire est "+fruit_client);
let index =fruit.indexOf(fruit_client);
document.write("<br>");
document.write("l'indice "+fruit_client+" est " +index);
document.write("<br>");
let trouver=fruit_client=="Mangue"||fruit_client=="Rasin"||fruit_client=="Figo"||fruit_client=="wiki"||fruit_client=="orange"
trouver?fruit.splice(index,1) : document.write("le fruit "+fruit_client+" n'est pas disponible");
document.write("<br>");
trouver?document.write("ok"):
document.write("<br>");

document.write("<br>");
document.write(fruit);
document.write("<br>");















