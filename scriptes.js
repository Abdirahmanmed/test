
// function fonction(){
//     let body=document.getElementById('body')
//     body.style.color="white"
//     body.style.backgroundColor="black"
//    document.getElementById('lien').style.color='white'
//    document.getElementById('lien1').style.color='white'
//    document.getElementById('lien2').style.color='white'
//    document.getElementById('lien3').style.color='white'
//    document.getElementById('lien4').style.color='white'
//    }

   function menu(){
    let nav=document.querySelector('nav')
    let menubar=document.getElementById('navMenu')
    if (nav.style.display=="none") {
        menubar.innerHTML=nav.innerHTML
        menubar.style.display="block"
    }else{
        
    }
   }
