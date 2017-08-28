var body = document.body;
var figura = document.getElementById('row');
var seccc = document.getElementById('portafolio');
var cont = 1;
var num = 1;

//agrgando imagenes

function agregaImagen (picture){  
    picture = ['assets/images/portfolio/ima-1.png','assets/images/portfolio/ima-2.png','assets/images/portfolio/ima-3.png','assets/images/portfolio/ima-4.png','assets/images/portfolio/ima-5.png','assets/images/portfolio/ima-6.png'];
    for(var i = 0; i<picture.length; i++){
        var divim = document.createElement('div');
        divim.setAttribute('class','col-4');
        divim.setAttribute('id',cont++);
        divim.setAttribute('onclick','photo(this)');
       
        var imasov = document.createElement('img');
        imasov.setAttribute('src',picture[i]);
        imasov.setAttribute('id','foto'+num++);
        imasov.setAttribute('class','zoom');
        imasov.setAttribute('width','300');
        
        divim.appendChild(imasov);
        figura.appendChild(divim);;
        seccc.appendChild(figura);
    }
    
}

agregaImagen();

// efexto texto con foto al hacerclick en la imagen
function photo (e){
    var edpp = e.id;
    
    var modal = document.createElement('div');
    modal.setAttribute('class','modal');

    var spanX = document.createElement("span");
    spanX.setAttribute('class','delete');
    spanX.innerHTML = "X";
    
    var content = document.createElement('div');
    content.setAttribute('class','content');
    
    var rowing = document.createElement('div');
    rowing.setAttribute('class','wing');
    
    var h2 = document.createElement('h2');
    h2.setAttribute('class','titulopor');
    h2.innerHTML = 'PROJECT TITLE';
    
    var hr = document.createElement('hr');
    hr.setAttribute('class','star-primary');
    
    var creaIma = document.createElement('img');
    creaIma.setAttribute('src','assets/images/portfolio/'+'ima-'+e.id+'.png');
    creaIma.setAttribute('class','tienda');
    
    var texto = document.createElement('p');
    texto.setAttribute('class','ppp');
    texto.innerHTML = 'Use this area of the page to describe your project. The icon above is part of a free icon set by <a href=#>Flat Icons </a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!'
    
    var uli = document.createElement('ul');
    uli.setAttribute('class','ulli');
    
    var lila1 = document.createElement('li');
    lila1.setAttribute('class','llilli');
    lila1.innerHTML = 'Client: <a href=#>Start Bootstrap</a>'
    
    var lila2 = document.createElement('li');
    lila2.setAttribute('class','llilli');
    lila2.innerHTML = 'Date:<a href=#>August 2017</a>'
    
    var lila3 = document.createElement('li');
    lila3.setAttribute('class','llilli');
    lila3.innerHTML = 'Service:<a href=#>Web Development</a>'
    
    
    var closeX = document.createElement("button");
    closeX.setAttribute('class','verde');
    closeX.innerHTML = "X close";
    
    modal.appendChild(spanX);
    modal.appendChild(content);
    content.appendChild(rowing);
    rowing.appendChild(h2);
    rowing.appendChild(hr);
    rowing.appendChild(creaIma);
    rowing.appendChild(texto);
    rowing.appendChild(uli);
    uli.appendChild(lila1);
    uli.appendChild(lila2);
    uli.appendChild(lila3);
    modal.appendChild(closeX)
    body.appendChild(modal);
    
    modal.addEventListener("click", function(event){
        if (event.target && event.target.className == "delete") {
            event.target.parentNode.remove();
        }
    });
    
    modal.addEventListener("click", function(event){
        if (event.target && event.target.className == "verde") {
            event.target.parentNode.remove();
        }
    });


}
//efecto scroll con menu dinamico

 var menu = document.getElementsByClassName("encabezado")[0];
 var Boostrap = document.getElementsByClassName("nav")[0];
 var link1 = document.getElementsByTagName("li")[0];
 var link2 = document.getElementsByTagName("li")[1];
 var link3 = document.getElementsByTagName("li")[2];

 function scrolling (e){
   var smoothScroll = window.pageYOffset || document.body.scrollTop;
   if(smoothScroll>3){
     Boostrap.style.fontSize = "18px";
   }
   if(smoothScroll>660){
      console.log(link1);
     link1.classList.add("dinamico");
   }else{
     link1.classList.remove("dinamico");
   }
   if(smoothScroll>1500){
     link2.classList.add("dinamico");
     link1.classList.remove("dinamico");
   }else{
     link2.classList.remove("dinamico");
   }
   if(smoothScroll>2095){
     link3.classList.add("dinamico");
     link2.classList.remove("dinamico");
   }else{
     link3.classList.remove("dinamico");
   }
 }
 window.addEventListener("scroll",scrolling);
