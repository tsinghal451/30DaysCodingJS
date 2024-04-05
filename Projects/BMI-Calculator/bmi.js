const forms = document.querySelector("form")
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

forms.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const guide = document.querySelector('#Guides')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Plz gives a valid height! ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Plz gives a valid weight! ${weight}`;
    }else{
        const answer = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${answer} </span>`

        if(answer < 18.6){
            guide.innerHTML = "Under Weight";
        }else if(answer >= 18.6 && answer<24.9){
            guide.innerHTML = "Normal Range"
        }else{
            guide.innerHTML = "OverWeight"
        }
    }



})