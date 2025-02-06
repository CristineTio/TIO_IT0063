function showBox(day) {
    var box = document.getElementById('slideBox');

    var colors = {
        "Monday": "#EC72AB",  
        "Tuesday": "#FB81BA",
        "Wednesday": "#FE97AC",
        "Thursday": "#FEA8A9",
        "Friday": "#FEC4B9", 
        "Saturday": "#FED7D0",
        "Sunday": "#FFB6C1"
    };

    if (box.classList.contains('show')) {
        box.classList.remove('show');

        setTimeout(function () {
            box.style.backgroundColor = colors[day]; 
            box.classList.add('show'); 
        }, 500); 
    } else {
        box.style.backgroundColor = colors[day];
        box.classList.add('show');
    }
}
