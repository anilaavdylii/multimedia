if (document.getElementById("slider--text")) {
    let slides = [
        "<h2>Figures & <small>Facts</small></h2>",
        "<h2> All about <small> US </small></h2>",
        
    ];

    let i = 0;

    const slider = () => {
        document.getElementById("slider--text").innerHTML = slides[i];
        document.getElementById("slider--text").classList.add('fade-in');

        (i < slides.length - 1) ? i++ : i = 0;
    };

    slider(); // Start slider immediately
    setInterval(slider, 4000); // Slide every 4 seconds
}