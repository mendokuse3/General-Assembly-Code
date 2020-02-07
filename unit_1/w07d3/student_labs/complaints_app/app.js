// https://data.cityofnewyork.us/resource/erm2-nwe9.json

$(() => {

    $.ajax({
        url: 'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD'
    }).then(
        (data) => {
            console.log(data);
            console.log(data[1].complaint_type)
            
        },
        () => {
            console.log("bad request");
        }
    );

    const $userInput = $('input[type="text"]').val();
    const $brooklyn = $('#brooklyn');
    const $manhattan = $('#manhattan');
    const $queens = $('#queens');
    const $bronx = $('#bronx');
    const $statenIsland = $('staten-island');
    const $listOfComplaints = $('#list-of-complaints')
    
    const getData = (num) => {
        for(let i = 0; i < num; i++) {
            const $complaint = ('li').text(data[i].complaint_type);
            $listOfComplaints.append($complaint);
        }

    }
    $brooklyn.on('click', getData($userInput));

  


});