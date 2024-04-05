const clock = document.getElementById('clock')

// clock.innerHTML = date.toLocaleTimeString;

setInterval(function(){
    let date = new Date()
     clock.innerHTML = date.toLocaleTimeString();
},1000)
