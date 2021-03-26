var len = document.querySelectorAll(".drum").length;
for(var i=0;i< len ;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // var audio = new Audio("sounds/tom-1.mp3");
        // audio.play();
        // console.log(this.style.color = "white");
        function s (a){

        }
        //var buttoninnerHTML = this.innerHTML;
        makesound(this.innerHTML);
        butttonanimation(this.innerHTML);
        
    });
}

document.addEventListener("keypress", function(event){
    makesound(event.key);
    butttonanimation(event.key);
});

function makesound(key){

    switch (key){
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;
        
        case "s":
            var crash = new Audio("sounds/crash.mp3");
            crash.play(); 
            break;
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;  
        case "f":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play(); 
            break;  
            
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); 
            break;

        case "k":
            var snare = new Audio("sounds/snare.mp3");
            snare.play(); 
            break; 
        
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            break;

        default: console.log(buttoninnerHTML);
    }
}

function butttonanimation(currentkey){
    var activekey = document.querySelector("."+currentkey);
    activekey.classList.add("pressed");
    setTimeout(function(){
        activekey.classList.remove("pressed");  
    },0.5);
}

