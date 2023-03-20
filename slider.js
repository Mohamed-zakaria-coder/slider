let next = document.querySelector(".next");
let previous = document.querySelector(".previous");
let images = document.querySelectorAll("img");
let ul = document.querySelector("ul");

let index = 0;

for (let i = 0; i < images.length; i++) {
  let li = document.createElement("li");
  li.textContent = i + 1;
  li.setAttribute("data-num", i);
  ul.appendChild(li);
}
function showImage() {
  if (index === images.length - 1) {
    next.style.cursor = "no-drop";
  } else {
    next.style.cursor = "pointer";
  }
  if (index === 0) {
    previous.style.cursor = "no-drop";
  } else {
    previous.style.cursor = "pointer";
  }
  images.forEach((img) => img.classList.remove("active"));
  images[index].className = "active";
  if (ul.children) {
    Array.from(ul.children).forEach((child) =>
      child.classList.remove("active")
    );
    Array.from(ul.children)[index].classList.add("active");
    Array.from(ul.children).forEach((child) => {
      child.onclick = function () {
        index = parseInt(child.getAttribute("data-num"));
        showImage();
      };
    });
  }
}
showImage();

previous.onclick = function () {
  if (index <= 0) {
  } else {
    --index;
    showImage();
    console.log(index);
  }
};
next.onclick = function () {
  if (index === images.length - 1) {
  } else {
    index++;
    showImage();
    console.log(index);
  }
};
