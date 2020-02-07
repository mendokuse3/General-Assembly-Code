console.log('shape clicker js file is connected');

//remember to set up your window onload!
$(()=> {

    

    let $currentIndex = 0;

    const switchClass = (index) => {  
        const storedIndex = index;
        const shapeArray = ['circle','square','triangle-down','octagon','heart','triangle'];
        index < 5 ? $currentIndex += 1 : $currentIndex = 0;
        return shapeArray[storedIndex];
    };

    $allShapes = $('.triangle');

    $allShapes.on('click',(event) => {
        $currentClass = $(event.currentTarget).attr('class');
        $(event.currentTarget).removeClass($currentClass);
        $(event.currentTarget).addClass(switchClass($currentIndex));
    });

});