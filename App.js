var main = document.getElementById("main");
    function AC(){
        main.value = 0;
    }
    function AddData(x){
        if(main.value === ""){
            alert("please press on AC to start")
        }
        else{
            main.value += x;
        }
    }
    function Dlt(){
        main.value = "" ;
    }
    function calt(){
        main.value = eval(main.value);
    }