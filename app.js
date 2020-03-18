//Color Randomizer 


function getColor(){
    let symbol, color;
    color = '#';
    symbol = '0123456789ABCDEF';


    //this loop is used to generate a random hex value which has 6 digits - looping the string 6 times - which will generate a random 6 length string
    for (let i = 0; i < 6; i++){
        color = color + symbol[Math.floor(Math.random() * symbol.length)];
    }

    document.getElementById('digits').textContent = color;
    document.body.style.background = color;


}


document.getElementById('clickme').addEventListener('click', function(){
    getColor();
})
