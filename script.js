// Function to change text content dynamically
function changeText() {
    document.getElementById("text").textContent = "The text has been changed!";
}


function toggleBox() {
    let box = document.getElementById("box");
    
    if (box) {
        box.remove();  
    } else {
        let newBox = document.createElement("div");  
        newBox.id = "box";
        newBox.className = "box";
        newBox.textContent = "I am a box";
        document.body.appendChild(newBox);
    }
}
