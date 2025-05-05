const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/niña-infeliz.jpg") {
    myImage.setAttribute("src", "images/niña-infeliz2.JPG");
  } else {
    myImage.setAttribute("src", "images/niña-infeliz.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `About the future of the music, ${myName}`;
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `About the future of the music, ${storedName}`;
  }

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `About the future of the music, ${myName}`;
    }
  }
  
  
myButton.addEventListener("click", () => {
    setUserName();
  });
     