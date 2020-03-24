let value = 0;
// value can now update
let storedValue = 0;

let operator;




$(() => {
    $('#output').text(value);
    // console.log(typeof $('.button').eq(5).text())
    
    
    $('.button').on('click', () => {
        const num = $(event.currentTarget);
        if(Number.isNaN(Number(num.text())) === false){
            if (value !== 0){
                value = `${value}${num.text()}`;
                $('#output').text(value);
            } else {
                value = num.text();
                $('#output').text(value);
            }
        }
        
        
    })
    
    $('.decimal').on('click', () => {
        const num = $(event.currentTarget);
        value = `${value}${num.text()}`;
        $('#output').text(value);
    })

    $('.operator').on('click', () => {
        storedValue = value;
        value = 0;
        $('#output').text(value);
        const op = $(event.currentTarget);
        operator = op.text();
        
    })

    $('.calculate').on('click', () => {
        let calc = `${storedValue} ${operator} ${value}`;
        $('#output').text(eval(calc));
        value = 0;
        storedValue = 0;
        
    })
    
});