let i = 0;



function changeSlider() {
    let imgs = [{
            link: './assets/images/slider/chicago.jpeg',
            heading: "Chicago",
            description: "Thank you, Chicago - A night we won't forget."
        },
        {
            link: './assets/images/slider/la.jpeg',
            heading: "Los Angeles",
            description: "We had the best time playing at Venice Beach!"
        }, {
            link: './assets/images/slider/ny.jpeg',
            heading: "New York",
            description: "The atmosphere in New York is lorem ipsum."
        }

    ];
    const slider = document.getElementById('slider');
    const heading = document.getElementsByClassName('text-heading');
    const description = document.getElementsByClassName('text-description');
    slider.style.backgroundImage = `url(${imgs[i].link})`;
    heading[0].innerHTML = imgs[i].heading;
    description[0].innerHTML = imgs[i].description;

    i++;
    if (i == 3) {
        i = 0;
    }
}
setInterval(changeSlider, 2000);