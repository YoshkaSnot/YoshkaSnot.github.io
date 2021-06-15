menu.onclick=function myFunction(){
    var x = document.getElementById('header_menu');
        if(x.className === "menu_header"){
            x.className += " responsive";
        }
        else{
            x.className="menu_header";
        }
    }