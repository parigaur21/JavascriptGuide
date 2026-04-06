//The change in the state of an object is called Event.
// -> mouse events ( click, double-click), key events (keydown, keyup), mousemove


document.getElementById("btn").onclick = function() {
    console.log("button is clicked");
}

//Event Listeners
// -> addEventListener()
// -> removeEventListener()

//Event Object
// -> event.target
// -> event.type
// -> event.preventDefault()
// -> event.stopPropagation()

//we have a third parameter here which is false [event propogation]- not necsesary to write so we skip...
document.getElementById("btn").addEventListener("click", function (e){
    console.log(e);
}, false);


//attachEvent

document.getElementById("btn").attachEvent("onclick", function(){
    console.log("button is clicked");
});

//jQuery

$("#btn").click(function(){
    console.log("button is clicked");
}); 


//-----------------------------------------------------------------------------------------------------//


// Event Handling :: responding to users action like clicking a button, hovering mouse , typing something, submitting a form!
/* <button onclick="sayHello()">Click me</button>

<script>
function sayHello() {
    alert("Hello!");
}
</script> */


//-----------------------------------------------------------------------------------------------------//


// Event Object :: contains information about the event that just happened...when event occurs js automatically creates an event object.

/* document.addEventListener("click", function(event) {
    console.log(event.target); //here event.target is the element that triggered the event
}); 
Common Properties:

event.target → element that triggered event
event.type → type of event (click, keydown, etc.)
event.clientX / clientY → mouse position
event.key → key pressed*/


//----------------------------------------------------------------------------------------------------//

/* Event Listener - best and modern way to handle events..

document.getElementById("btn").addEventListener("click", function() {
    console.log("button is clicked");
});
}) 

Two phases:::

Capturing Phase (top → down)
Bubbling Phase (bottom → up)
Default is bubbling

element.addEventListener("click", handler, true); // capturing
element.addEventListener("click", handler, false); // bubbling (default)
*/





//MOST IMPORTANT TOPIC::

//Event Propagation  and its types:
//1. Capturing Phase (top → down) --TRUE
//2. Target Phase-- reached the actual clicked element
//3. Bubbling Phase (bottom → up) --FALSE


document.getElementById("btn").addEventListener("click", function() {
    console.log("button is clicked");
    e.stopPropagation()
} , false);   //will not bubble up


//defaultPrevent

document.getElementById("btn").addEventListener("click", function(e) {
    e.preventDefault();
    console.log("button is clicked");
} , false);