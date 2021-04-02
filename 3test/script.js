






function jumpkey(){
    setInterval(jump,100);
}
function runkey(){
    setInterval(run,100);

}




function meleekey(){

    setInterval(melee,100);


}




function n(){
    setInterval(m,100);
    setInterval(k,100);
    
    setInterval(dash,100)
    
  


   
    
}

var a = 0;




function m (){
    var d1 = document.getElementById("d1");
a = a - 180;
d1.style.backgroundPositionX = a + "px";
}

var b = 0;

function k(){
    var d2 = document.getElementById("d2");
    b = b - 128;
    d2.style.backgroundPositionX = b + "px";
}


var f = 0 ;



function jump(){
    var d6 = document.getElementById("d6");
    f = f - 128;
    d6.style.backgroundPositionX = f + "px";

    

    
}


var c = 0;
var rL = 0;


function run(){
    var d3 = document.getElementById("d3");
    c = c - 128;
    d3.style.backgroundPositionX = c + "px";
    


   





}

var d = 0 ;


function dash(){
    var d4 = document.getElementById("d4");
    d = d - 128;
    d4.style.backgroundPositionX = d + "px";
}


var e = 0 ;


function melee(){
    var d5 = document.getElementById("d5");
    e = e - 128;
    d5.style.backgroundPositionX = e + "px";
}


var RR = 0;
var Rs = 0;
var Rb = 0;
 var Rr = 0;
 var m = 0 ;

function start(event){
    var bs = event.which;
    /*alert(bs);*/


    if(bs == 68){

       
        runkey();


       

        for ( var Rs = 0;Rs<10;Rs++){

            RR = RR + 5;

        var d3 = document.getElementById("d3");
        
        d3.style.marginLeft = RR + "px";

       

        }

        

        



    }
    
    if(bs == 65) {

        for ( var Rs = 0;Rs<10;Rs++){

            RR = RR - 5;

        var d3 = document.getElementById("d3");
        
        d3.style.marginLeft = RR + "px";

       
      
        


        }

    


    }

     var JJ = 0 ;

    if(bs == 87) {

        jumpkey();


        for (var Js = 0; Js <10; Js++) {

            
            var d6 = document.getElementById("d6");

       d6.style.marginTop = JJ + "px"; 

       JJ = JJ + 1;

        }

       




    }

  /*//////////// J = 74 /////////*/ 
    if( bs = 74){

        meleekey();


    }


     
}


