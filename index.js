
function rolldice(){
    const num = document.getElementById('numinput').value;
    const result = document.getElementById('result') ;
    const resultimg = document.getElementById('resultimg');
    const values = [];
    const images = [];

    for(let i = 0; i< num;i++){
        const value = Math.floor((Math.random()*6) +1);
        values.push(value);
        images.push(`<img src="imagess/${value}.png">`);
        
    }
    result.textContent=`Dice: ${values.join(', ')}`
    resultimg.innerHTML=images.join('')


    

}


