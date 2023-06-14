/* === Work Toggle === */
let logoToggle = false;
function toggleLogos() {
  logoToggle = !logoToggle;
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    console.log("logoToggle : ", logoToggle)
    if (logoToggle && item.classList.contains("logoItem")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle("logoToggle");
  document.getElementById("showAllButton").style.display = logoToggle ? "block" : "none";
  document.getElementById("LogoButton").style.display = "none";
  document.getElementById("webDesignButton").style.display = "none";
  document.getElementById("illustrationButton").style.display = "none";
  document.getElementById("devButton").style.display = "none";
}

let designToggle = false;
function toggleDesigns() {
  designToggle = !designToggle;
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    console.log("designToggle : ", designToggle)
    if (designToggle && item.classList.contains("webDesignItem")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle("designToggle");
  document.getElementById("showAllButton").style.display = designToggle ? "block" : "none";
  document.getElementById("LogoButton").style.display = "none";
  document.getElementById("webDesignButton").style.display = "none";
  document.getElementById("illustrationButton").style.display = "none";
  document.getElementById("devButton").style.display = "none";
}

let illustrationToggle = false;
function toggleIllustrations() {
  illustrationToggle = !illustrationToggle;
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (illustrationToggle && item.classList.contains("illustrationItem")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle("illustrationToggle");
  document.getElementById("showAllButton").style.display = illustrationToggle ? "block" : "none";
  document.getElementById("LogoButton").style.display = "none";
  document.getElementById("webDesignButton").style.display = "none";
  document.getElementById("illustrationButton").style.display = "none";
  document.getElementById("devButton").style.display = "none";
}

let devToggle = false;
function toggleDev() {
  devToggle = !devToggle;
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (devToggle && item.classList.contains("webDevItem")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle("devToggle");
  document.getElementById("showAllButton").style.display = devToggle ? "block" : "none";
  document.getElementById("LogoButton").style.display = "none";
  document.getElementById("webDesignButton").style.display = "none";
  document.getElementById("illustrationButton").style.display = "none";
  document.getElementById("devButton").style.display = "none";
}

function showAll() {
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.style.display = "block";
  }
  document.body.classList.remove("logoToggle");
  document.body.classList.remove("designToggle");
  document.body.classList.remove("illustrationToggle");

  logoToggle = false;
  designToggle = false;
  illustrationToggle = false;
  devToggle = false;
  document.getElementById("showAllButton").style.display = "none";
  document.getElementById("LogoButton").style.display = "block";
  document.getElementById("webDesignButton").style.display = "block";
  document.getElementById("illustrationButton").style.display = "block";
  document.getElementById("devButton").style.display = "block";
}

/*=== Dark Mode === */
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList.add("darkTheme");
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("dark");
      buttons[i].classList.add("white");
    }
  } else {
    document.body.classList.remove("darkTheme");
    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("white");
      buttons[i].classList.add("dark");
    }
  }
}



/* === About === */
let isAboutOpen = false;
function toggleAbout() {
  if (isAboutOpen) {
    isAboutOpen = false;
    return document.body.classList.remove("aboutOpen");
  }
  isAboutOpen = true;
  document.body.classList += " aboutOpen";
}

/* === Buttons === */

document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');
