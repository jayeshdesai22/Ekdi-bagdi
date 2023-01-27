var secretArr = []
var started = false;

/*key press from keyboard*/

$(document).keypress(function(){
    if(!started){
        var Jayesh =     prompt("JAYESH, Enter your secret number");
var Ashish = prompt("ASHISH,Enter your secret number");
var Dharmesh = prompt("DHARMESH, Enter your secret number");
var Manish = prompt("MANISH, Enter your secret number");
var Shubham = prompt("SHUBHAM, Enter your secret number");
var Vimal = prompt("VIMAL, Enter your secret number");
$("h1").text("એકડી બગડી");
       
        started=true;
}  

secretArr.push(Jayesh);
secretArr.push(Ashish);
secretArr.push(Dharmesh);
secretArr.push(Manish);
secretArr.push(Shubham);
secretArr.push(Vimal);

$(".btn1").click(function(){

    var userChoosenBtn = $(this).attr("id");
 
    checking(userChoosenBtn);
    outClass(userChoosenBtn);
});
})

$("#start").click(function(){
    if(!started){
        var Jayesh =     prompt("JAYESH, Enter your secret number");
var Ashish = prompt("ASHISH,Enter your secret number");
var Dharmesh = prompt("DHARMESH, Enter your secret number");
var Manish = prompt("MANISH, Enter your secret number");
var Shubham = prompt("SHUBHAM, Enter your secret number");
var Vimal = prompt("VIMAL, Enter your secret number");

var userChoosenBtn = $(this).attr("id");
outClass(userChoosenBtn);

$("h1").text("એકડી બગડી");
       
        started=true;
}  

secretArr.push(Jayesh);
secretArr.push(Ashish);
secretArr.push(Dharmesh);
secretArr.push(Manish);
secretArr.push(Shubham);
secretArr.push(Vimal);

/*start button press */
$(".btn1").click(function(){

    var userChoosenBtn = $(this).attr("id");
 
    checking(userChoosenBtn);
    outClass(userChoosenBtn);
});

})
       
    
    
  /*  function checking(userChoosenBtn) {
       if (secretArr.includes(userChoosenBtn)) {
        $("h1").text(userChoosenBtn + " is Out from Game") 
       }
          
            } */           

function makeSound()
{
    $("div").addClass("danger");
 setTimeout(function()  {
 $("div").removeClass("danger")

    }, 1500);
    var outSound = new Audio("sound/out.wav")
    outSound.play();
}      
function checking(userChoosenBtn) {
    if (secretArr.includes(userChoosenBtn)) {
        switch (userChoosenBtn) {
                case secretArr[0]:
                            $("h1").text("Jayesh " + userChoosenBtn + " is Out from Game") 
                            
                            makeSound();
                            
                            break;
                case secretArr[1]:
                                $("h1").text("Ashish " + userChoosenBtn + " is Out from Game") 
                                makeSound();
                                break;
                case secretArr[2]:
                            $("h1").text("Dharmesh " + userChoosenBtn + " is Out from Game") ;
                            makeSound();
                            break;
                case secretArr[3]:
                            $("h1").text("Manish " + userChoosenBtn + " is Out from Game") 
                            makeSound();
                            break;
                case secretArr[4]:
                            $("h1").text("Shubham " + userChoosenBtn + " is Out from Game") 
                            makeSound();
                            break;
                case secretArr[5]:
                            $("h1").text("Vimal " + userChoosenBtn + " is Out from Game") 
                            makeSound();
                            break;
                        default:
                            break;
                    }
                 
                }
                   
                     }  
    
  
function outClass(userChoosenBtn){
    $("#"+userChoosenBtn).addClass("pressed");
}
