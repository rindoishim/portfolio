let themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function () {
    document.body.classList.toggle("dark-mode");
};
  

let editJobBtn = document.getElementById("editJobBtn");
let jobTitle = document.querySelector(".job-title");

editJobBtn.onclick = function () {
    let newTitle = prompt("Enter new job title:");
    if (newTitle) {
        jobTitle.textContent = newTitle;
    }
};


let toggleSkillsBtn = document.getElementById("toggleSkillsBtn");
let skillsSection = document.getElementById("skillsSection");

toggleSkillsBtn.onclick = function () {
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleSkillsBtn.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleSkillsBtn.textContent = "Show Skills";
    }
};


let msgBox = document.getElementById("msgBox");
let counter = document.getElementById("counter");

msgBox.onkeyup = function () {
    let remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
};


function validateForm() {
    let nameField = document.getElementById("nameField").value;
    let emailField = document.getElementById("emailField").value;

    if (nameField === "" || emailField === "") {
        alert("Please fill up the required fields.");
        return false;
    }
    return true;
}


let dateDisplay = document.getElementById("dateDisplay");
dateDisplay.textContent = new Date().toDateString();


let quoteBtn = document.getElementById("quoteBtn");
let quoteText = document.getElementById("quoteText");

let quotes = [
    "Keep moving forward.",
    "Better late than never, but never late is better.",
    "Trust the pares.",
];

quoteBtn.onclick = function () {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomNumber];
};
