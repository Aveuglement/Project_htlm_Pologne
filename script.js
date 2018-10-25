function greet() {
    window.alert("Vous n'écoutez pas ce qu'on vous dit ma parole !");
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
    let image = document.createElement("img");
}
