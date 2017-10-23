$(document).ready(function(){
    const dogs = [
        {
            name: 'dog1',
            src: 'img/dog1.jpg',
            counter: 0
        },
        {
            name: 'dog2',
            src: 'img/dog2.jpg',
            counter: 0
        },{
            name: 'dog3',
            src: 'img/dog3.jpg',
            counter: 5
        },
        {
            name: 'dog4',
            src: 'img/dog4.jpg',
            counter: 0
        },
        {
            name: 'dog5',
            src: 'img/dog5.jpg',
            counter: 0
        },
    ]

    $('#dog-list li').click(function(){
        let name = $(this).text()
        for (let i = 0; i < dogs.length; i++) {
            if (dogs[i].name === name){
                $('#click-counter').text(dogs[i].counter);
                $('#img-src').attr('src', dogs[i].src)
            }
        }
        
    })
    $('#img-src').click(function(){
        let src = $(this).attr('src');
        for (let i = 0; i < dogs.length; i++) {
            if (dogs[i].src === src) {
                dogs[i].counter++;
                $('#click-counter').text(dogs[i].counter);
            }
        }
    })

})