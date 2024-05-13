for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", drum_click);
}

// var i = 0;
// while (i < document.querySelectorAll(".drum").length){
//     document.querySelectorAll("button")[i].addEventListener("click", drum_click);
//     i++;
// }

function drum_click(){
    var buttonHTML = this.innerHTML;
    returnSound(buttonHTML).play();
    buttonAnimation(buttonHTML);

    // switch (buttonHTML) {
    //     case "w":
    //         var tom1 = new Audio("sounds/tom-1.mp3");
    //         tom1.play();           
    //         break;
        
    //     case "a":
    //         var tom2 = new Audio("sounds/tom-2.mp3");
    //         tom2.play();
    //         break
    
    //     case "s":
    //         var tom2 = new Audio("sounds/tom-3.mp3");
    //         tom2.play();
    //         break

    //     case "d":
    //         var tom2 = new Audio("sounds/tom-4.mp3");
    //         tom2.play();
    //         break

    //     case "j":
    //         var tom2 = new Audio("sounds/snare.mp3");
    //         tom2.play();
    //         break

    //     case "k":
    //         var tom2 = new Audio("sounds/crash.mp3");
    //         tom2.play();
    //         break

    //     case "l":
    //         var tom2 = new Audio("sounds/kick-bass.mp3");
    //         tom2.play();
    //         break
    //     default:
    //         console.log(buttonHTML);
    // }
    // var audio = new Audio("sounds/tom-3.mp3");
    // audio.play();
}

document.addEventListener("keypress", function(event) {
    //console.log(event.key);
    var keyText = event.key;
    returnSound(keyText).play();
    buttonAnimation(keyText);
}
)

function returnSound (text) {
    switch (text) {
        case "w":
            var tom = new Audio("sounds/tom-1.mp3");    
            return tom;      
            break;
        
        case "a":
            var tom = new Audio("sounds/tom-2.mp3");
            return tom;
            break
    
        case "s":
            var tom = new Audio("sounds/tom-3.mp3");
            return tom;
            break

        case "d":
            var tom = new Audio("sounds/tom-4.mp3");
            return tom;
            break

        case "j":
            var tom = new Audio("sounds/snare.mp3");
            return tom;
            break

        case "k":
            var tom = new Audio("sounds/crash.mp3");
            return tom;
            break

        case "l":
            var tom = new Audio("sounds/kick-bass.mp3");
            return tom;
            break
        default:
            console.log(text);
            return text;

    }
}

function buttonAnimation(kurrentKey){
   var activeButton =  document.querySelector("."+ kurrentKey);
   activeButton.classList.add("pressed")

   setTimeout(function(){
    activeButton.classList.remove("pressed")
   }, 200)
}