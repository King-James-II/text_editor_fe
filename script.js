// Getting the element with id "words" and assigning it to the variable el
let el = document.querySelector("#words");

// Function to set text color based on user input
function setColor() {
  // Getting the color input element
  const input = document.querySelectorAll("input")[0];
  // Setting the color of the text element to the input value
  el.style.color = input.value;
}

// Function to toggle underline style
function toggleUnderline() {
  // Toggling the "underline" class on the text element
  el.classList.toggle("underline");
}

// Function to toggle italic style
function toggleItalic() {
  // Toggling the "italic" class on the text element
  el.classList.toggle("italic");
}

// Function to toggle bold style
function toggleBold() {
  // Toggling the "bold" class on the text element
  el.classList.toggle("bold");
}

// Function to toggle monospace font style
function toggleMonospace() {
  // Toggling the "mono" class on the text element
  el.classList.toggle("mono");
}

// Function to remove all formatting from the text
function removeFormat() {
  // Removing all formatting classes from the text element
  el.classList.remove("underline", "italic", "bold", "mono");
  // Resetting text color to black
  el.style.color = "black";
}
