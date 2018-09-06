var mobileNav = document.querySelector(".mobile-nav");
var toggleButton = document.querySelector(".toggle-button");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNo = document.querySelector(".modal-box__no");
var wiggle = document.querySelector(".nav-item__cta");
var planButton = document.querySelectorAll(".plan-button");

setInterval(function() {
  wiggle.classList.add("nav-item__cta1");
}, 8100);

setInterval(function() {
  wiggle.classList.remove("nav-item__cta1");
}, 8000);

for (let index = 0; index < planButton.length; index++) {
  planButton[index].addEventListener("click", function() {
    backdrop.style.display = "block";
    if (modal) {
      modal.style.display = "block";
    }
    setTimeout(function() {
      modal.classList.add("open");
    }, 10);
  });
}

toggleButton.addEventListener("click", function() {
  backdrop.style.display = "block";
  mobileNav.classList.add("open");
});

if (modalNo) {
  modalNo.addEventListener("click", function() {
    modal.classList.remove("open");
    setTimeout(function() {
      modal.style.display = "none";
    }, 500);
    backdrop.style.display = "none";
  });
}

backdrop.addEventListener("click", function() {
  mobileNav.classList.remove("open");
  backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
    setTimeout(function() {
      modal.style.display = "none";
    }, 500);
  }
});
