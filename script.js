const clickButton = document.querySelector(".clicker-button");
const modalWindow = document.querySelector(".modal-window");
const modalButton = document.querySelector(".back-button");
const modalButtonClose = document.querySelector(".cross-link");
const clickCounterTitle = document.querySelector(".js-click-title");
const winModal = document.querySelector(".js-modal");
const rebithButton = document.querySelector(".rebith-button");
const clickSound = new Audio("./meow.mp3");
const clickPower = document.querySelector(".js-text");
const backdropCloser = document.querySelector(".js-closer");

let count = 1;
let clickCounter = 0;

modalButtonClose.addEventListener("click", () => {
  const clickButtonSound = new Audio("./click.wav");
  clickButtonSound.play();
  modalWindow.classList.add("is-open");
});

backdropCloser.addEventListener("click", () => {
  if (event.target === backdropCloser) {
    console.log("Нажатие по бэкдропу");
    modalWindow.classList.remove("is-open");
  }
});

modalButton.addEventListener("click", () => {
  const clickButtonSound = new Audio("./click.wav");
  clickButtonSound.play();
  modalWindow.classList.remove("is-open");
});

clickButton.addEventListener("click", () => {
  const clickButtonSound = new Audio("./click.wav");
  clickButtonSound.play();
  clickCounter += count;
  clickCounterTitle.textContent = clickCounter;
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = `WoW!
  +${count}`;

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add("show");
  }, 0);
  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => {
      popup.remove();
    }, 600);
  }, 600);
});

rebithButton.addEventListener("click", () => {
  const clickButtonSound = new Audio("./click.wav");
  clickButtonSound.play();

  if (clickCounter >= 100) {
    clickCounter -= 100;
    clickCounterTitle.textContent = clickCounter;
    count += 1;

    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerText = "New LEVEL. One click is + 1!";

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add("show");
    }, 0);
    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => {
        popup.remove();
      }, 600);
    }, 1400);
  } else {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerText = "You haven't enought clicks! :(";

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add("show");
    }, 0);
    setTimeout(() => {
      popup.classList.remove("show");
      setTimeout(() => {
        popup.remove();
      }, 600);
    }, 1400);
  }
  if (count == 10) {
    winModal.classList.add("is-open");
    clickSound.loop = true;
    clickSound.play();
  }
  clickPower.textContent = `Your click power is ${count}!`;
});
