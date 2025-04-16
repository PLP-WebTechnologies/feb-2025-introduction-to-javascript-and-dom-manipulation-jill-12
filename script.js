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
// Function to add a new element dynamically
  function addNewElement() {
    const newElementContainer = document.getElementById("newElementContainer");
    
    const newElement = document.createElement("div");
    newElement.classList.add("box");
    newElement.textContent = "This is a new dynamically added box!";
    
    newElementContainer.appendChild(newElement);
  }
  
  // Function to remove the last dynamically added element
  function removeElement() {
    const newElementContainer = document.getElementById("newElementContainer");
    
    // Check if there are elements to remove
    if (newElementContainer.children.length > 0) {
      newElementContainer.removeChild(newElementContainer.lastChild);
    } else {
      alert("No elements to remove!");
    }
  }
