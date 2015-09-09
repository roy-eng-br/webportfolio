"use strict";

/*
*
* Course examples
*
*/

function Dog() {
    var name, breed;
}

Dog.prototype.speak = function speak(sayWhat) {
    console.log(sayWhat);
};

var firstDog = new Dog();
firstDog.name = "Rover";
firstDog.breed = "Doberman";
firstDog.speak('Woof!');

var secondDog = new Dog();
secondDog.name = "Fluffy";
secondDog.breed = "Poddle";
secondDog.speak('weef!');

console.log(firstDog.name);
console.log(secondDog.name);



// module Arithmetic with namespacing

var Arithmetic = (function() {
    
    return {
        sum:function(x, y) {
            var result = 0;
            for (var index = arguments.length - 1; index > -1; index--) {
                result+= arguments[index];
            }
            return result;
            //return this; to concatenate calls
        },
        
        sub:function(y, x) {
            var result = 0;
            for (var index = arguments.length - 1; index > -1; index--) {
                result = arguments[index] - result;
            }
            return result;
        }
    };
    
})();

console.log("Sum is: ", Arithmetic.sum(2, 2, 2));
console.log("Subtraction is: ", Arithmetic.sub(3, 2));






/*
 * Web site funcions:
 *
*/

function adjustStyle() {
    var width = 0;
    
    if (window.innerHeight) {
        width = window.innerWidth;
    } else if (document.documentElement && document.documentElement.clientHeight) {
        width = document.documentElement.clientWidth;
    } else if (document.body) {
        width = document.body.clientWidth;
    }
    
    if (width < 600) {
        document.getElementById('cssFile').setAttribute("href", "style/mobile.css");
    } else {
        document.getElementById('cssFile').setAttribute("href", "style/desktop.css");
    }
}

window.onload = function() {
    adjustStyle();    
};

window.onresize = function() {
    adjustStyle();
}