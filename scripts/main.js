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
    myHeading.textContent = `${myName}, learn about the future of the music.`;
  }

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `${storedName}, learn about the future of the music.`;
  }

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `${myName}, learn about the future of the music.`;
    }
  }
  
  
myButton.addEventListener("click", () => {
    setUserName();
  });
     
