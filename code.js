const price1=54.99;
const price2=74.99;

function remove_sup(){
    let cant = document.getElementById("cant_sup").textContent;
    let tot = document.getElementById("acum").textContent;
    let cant2 = document.getElementById("cant_inf").textContent;
    cant2= parseInt(cant2);
    cant = parseInt(cant);
    tot = parseFloat(tot).toFixed( 2 );
    if (cant > 0){
        cant = cant - 1;
        document.getElementById("cant_sup").textContent = cant;
        tot = tot - price1;
        if (cant == 0 &&  cant2 == 0){
            document.getElementById("acum").textContent =  '0';
        }else{
            document.getElementById("acum").textContent =  tot.toFixed( 2 );
        }
    }   

}

function add_sup(){
    let cant = document.getElementById("cant_sup").textContent;
    let tot = document.getElementById("acum").textContent;
    cant = parseInt(cant);
    tot = parseFloat(tot);
    if (tot ==0){
        cant = cant + 1;
        document.getElementById("cant_sup").textContent = cant;
        tot = tot + price1 + 19;
         document.getElementById("acum").textContent =  tot.toFixed( 2 );
    } else{
        if (cant < 10){
        cant = cant + 1;
        document.getElementById("cant_sup").textContent = cant;
        tot = tot + price1;
        document.getElementById("acum").textContent =  tot;
        } 
    }
}


function remove_inf(){
    let cant = document.getElementById("cant_inf").textContent;
    let cant2 = document.getElementById("cant_sup").textContent;
    let tot = document.getElementById("acum").textContent;
    cant = parseInt(cant);
    cant2= parseInt(cant2);
    tot = parseFloat(tot).toFixed( 2 );
    if (cant > 0){
        cant = cant - 1;
        document.getElementById("cant_inf").textContent = cant;
        tot = tot - price2;
        if (cant == 0 &&  cant2 == 0){
            document.getElementById("acum").textContent =  '0';
        }else{
            document.getElementById("acum").textContent =  tot.toFixed( 2 );
        }
    }   
}


function add_inf(){
    let cant = document.getElementById("cant_inf").textContent;
    let tot = document.getElementById("acum").textContent;
    cant = parseInt(cant);
    tot = parseFloat(tot);    
    if (tot ==0){
        cant = cant + 1;
        document.getElementById("cant_inf").textContent = cant;
        tot = tot + price2 + 19;
        document.getElementById("acum").textContent =  tot.toFixed( 2 );
    } else{
        if (cant < 10){
        cant = cant + 1;
        document.getElementById("cant_inf").textContent = cant;
        tot = tot + price2;
        document.getElementById("acum").textContent =  tot;
        } 
    }
}


function butt_cont(){
    let cont=0;
    let flag= 0;
    // email validation
    let email=document.getElementById("email").value;
    len = email.length-1;

    for (let i = 0; i <= len ;i++){
        if (email[i] == '@'){
            flag = flag+1;
        } else if (email[i] == '.'){
            flag = flag+1;
        } 
    }

    if (flag>1){
        document.getElementById("errorE").style.visibility="hidden"
        cont = cont + 1;
    }else{
        document.getElementById("errorE").style.visibility="visible"
        cont=0;
    }


    // phone validation
    let phone=document.getElementById("phone").value;
    pl = phone.length;
    if (pl < 10 || pl > 10){
        document.getElementById("errorP").style.visibility="visible"
        cont=0;
    } else{
        document.getElementById("errorP").style.visibility="hidden"
        cont = cont + 1;
    }

    // empty text validation
    let name=document.getElementById("name").value;
    if (name.length == 0){
        document.getElementById("errorF").style.visibility="visible"
        cont=0;
    }else {
        document.getElementById("errorF").style.visibility="hidden"
        cont = cont + 1;
    }

    let address=document.getElementById("address").value;
    if (address.length == 0){
        document.getElementById("errorA").style.visibility="visible"
        cont=0;
    }else {
        document.getElementById("errorA").style.visibility="hidden"
        cont = cont + 1;
    }

    let city=document.getElementById("city").value;
    if (city.length == 0){
        document.getElementById("errorC").style.visibility="visible"
        cont=0;
    }else {
        document.getElementById("errorC").style.visibility="hidden"
        cont = cont + 1;
    }

    let postal=document.getElementById("postal").value;
    if (postal.length == 0){
        document.getElementById("errorPo").style.visibility="visible"
        cont=0;
    }else {
        document.getElementById("errorPo").style.visibility="hidden"
        cont = cont + 1;
    }

    if (cont == 6){
       // document.getElementById("confirm").style.visibility="visible"
        
        if (document.getElementById("checkbox").checked){
            window.alert("Information succesfully send and Shipping address saved.");
        } else{
            window.alert("Information succesfully send.");
        }
        
        
       
    }
    console.log(cont)
    
}

