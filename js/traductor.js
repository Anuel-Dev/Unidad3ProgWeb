function hacerclic(){

    lista=document.querySelectorAll("#principal p");
    lista[0].onclick=mostraralerta;
    lista[1].onclick=mostraralerta;
    }
    
    function changeColor(x){
     if(x==0){
        lista[x].style.color="blue";
        lista[x].innerHTML="Hello World.";
     }
        else if(x==1){
            lista[x].style.color="green";
            lista[x].innerHTML="You have a good day.";
            return false;
        }
        else{
            lista[0].style.color="red";
            lista[0].innerHTML="Hello World";
            lista[1].style.color="purple";
            lista[1].innerHTML="You have a goog day";
        }
    }
    window.onload=hacerclic;
    