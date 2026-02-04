const roles = [
  "DevOps Engineer",
  "Full Stack Developer",
  "AWS Cloud Engineer",
  "Kubernetes Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
const typing = document.querySelector(".typing");

function type() {
  if (charIndex < roles[roleIndex].length) {
    typing.textContent += roles[roleIndex][charIndex++];
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 1800);
  }
}

function erase() {
  if (charIndex > 0) {
    typing.textContent = roles[roleIndex].substring(0, --charIndex);
    setTimeout(erase, 45);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(type, 400);
  }
}

document.addEventListener("DOMContentLoaded", type);
