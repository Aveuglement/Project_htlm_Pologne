function greet() {
    window.alert("You're not listenning what you're told, my word!");
}

function init() {

    //      Task 1
    document.getElementById("task1").src = "flower2.png"; 

    //      Task 2
    document.getElementById("task2").getElementsByTagName("img")[1].src = "flower2.png";
    let images = document.getElementById("task2").getElementsByTagName("img");
    images[1].src ="flower2.png";
    images[3].src ="flower2.png";

    //      Task 3
    document.getElementById("task3").innerHTML = "You are great!"; 

    //      Task 4
    let image = document.createElement("img");
    image.src = "flower2.png";
    task4.appendChild(image);

    //      Task 5
    let spans = document.getElementById("rainbow").getElementsByTagName("span"); 
    let color = ["red", "orange","yellow","green","blue","purple","pink"];
    for (var i = spans.length - 1; i >= 0; i--) 
    {
	    spans[i].style.color = color[i];
    }

    //      Task 6
    var changeSrc = function(event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '');
            if (filename === "flower1.png") {
                event.target.src = "flower2.png";
            }
            else {
                event.target.src = "flower1.png";
            }
        }
    }
    document.getElementById("event").addEventListener("mouseover", changeSrc);
}
