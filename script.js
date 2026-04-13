// const toggle = document.getElementById("menu-toggle");
// const menu = document.getElementById("nav-menu");

// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active");
//   menu.classList.toggle("active");
// });

// const dropdowns = document.querySelectorAll(".dropdown");

// dropdowns.forEach((drop) => {
//   drop.addEventListener("click", () => {
//     drop.classList.toggle("open");
//   });
// });


const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.classList.toggle("open");
  });
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("clicking");
    setTimeout(() => {
      window.location.href = card.dataset.link;
    }, 200);
  });
});

/* TESTIMONIAL DRAG FIX */
// const container = document.querySelector(".testimonials-container");

// if (container) {
//   let isDown = false;
//   let startX;
//   let scrollLeft;

//   container.addEventListener("mousedown", (e) => {
//     isDown = true;
//     startX = e.pageX - container.offsetLeft;
//     scrollLeft = container.scrollLeft;
//   });

//   container.addEventListener("mouseup", () => {
//     isDown = false;
//   });

//   container.addEventListener("mouseleave", () => {
//     isDown = false;
//   });

//   container.addEventListener("mousemove", (e) => {
//     if (!isDown) return;
//     e.preventDefault();

//     const x = e.pageX - container.offsetLeft;
//     const walk = (x - startX) * 2;

//     container.scrollLeft = scrollLeft - walk;
//   });

//   container.addEventListener("touchstart", (e) => {
//     startX = e.touches[0].pageX - container.offsetLeft;
//     scrollLeft = container.scrollLeft;
//   });

//   container.addEventListener("touchmove", (e) => {
//     const x = e.touches[0].pageX - container.offsetLeft;
//     const walk = (x - startX) * 2;

//     container.scrollLeft = scrollLeft - walk;
//   });
// }

const track = document.querySelector(".testimonial-track");

if (track) {
  let position = 0;
  let speed = 0.9; // auto scroll speed
  let isDragging = false;
  let startX;
  let currentTranslate = 0;

  function autoScroll() {
    if (!isDragging) {
      position -= speed;
      track.style.transform = `translateX(${position}px)`;
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();

  // DRAG START
  track.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    currentTranslate = position;
    track.style.cursor = "grabbing";
  });

  // DRAG MOVE
  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const move = e.pageX - startX;
    position = currentTranslate + move;
    track.style.transform = `translateX(${position}px)`;
  });

  // DRAG END
  window.addEventListener("mouseup", () => {
    isDragging = false;
    track.style.cursor = "grab";
  });

  // TOUCH SUPPORT
  track.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
    currentTranslate = position;
  });

  track.addEventListener("touchmove", (e) => {
    if (!isDragging) return;

    const move = e.touches[0].pageX - startX;
    position = currentTranslate + move;
    track.style.transform = `translateX(${position}px)`;
  });

  track.addEventListener("touchend", () => {
    isDragging = false;
  });
}