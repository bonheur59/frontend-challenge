const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const start_btn = document.getElementById("start_btn");
const stop = document.getElementById("stop_btn");
const reset_btn = document.getElementById("reset_btn");

const disp = document.getElementById("disp");

let interval = null;
let total = 0;


totalValue = () => {
  total =
    Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
};

timer = () => {
  totalValue();
  total--;

  if (total >= 0) {
    let hr = Math.floor(total / 3600);
    let mn = Math.floor((total % 3600) / 60);
    let sc = total % 60;

    hour.value = String(hr).padStart(2, "0");
    minute.value = String(mn).padStart(2, "0");
    second.value = String(sc).padStart(2, "0");

  } else {
    disp.innerText = "Time Over !!";
  }
};



start_btn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(timer, 1000);

  disp.innerText = "Timer started";
});

stop_btn.addEventListener("click", () => {
  clearInterval(interval);
});

reset_btn.addEventListener("click", () => {
  clearInterval(interval);
  hour.value = "";
  minute.value = "";
  second.value = "";
  disp.innerText = "Timer";
});
