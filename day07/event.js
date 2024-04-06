// document.getElementById('owl').onclick = function(){
//     alert("owl clicked")
// }
/* onclick() jada use nhi krna chaiye usse better eventlistener use kro jo ki
 hume propagation provide krta hai or yeh shi way hai */

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul");
// }, false)

// objects
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode

/* Propagation refers to how events travel through the Document Object Model (DOM) tree.
 The DOM tree is the structure which contains parent/child/sibling elements in relation to each other.*/

// propagation types :- Event Bubbling and Capturing

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside the ul");
// }, false)

// document.getElementById('owl').addEventListener('click', function(e){
//     console.log("owl clicked");
//     e.stopPropagation()
// }, false)

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault();
//     e.stopPropagation()
//     console.log("google clicked");
// }, false)

document.querySelector('#images').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
    }

    
})
