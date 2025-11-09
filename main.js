var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Youtuber", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".progress");
    const radius = 50;
    const circumference = 2 * Math.PI * radius;

    circles.forEach(circle => {
        const percent = circle.getAttribute("data-percentage");
        const offset = circumference - (percent / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    });
});

window.addEventListener('scroll', function () {
  const stickyElement = document.getElementById('header');
  const stopStickyAt = 1000; // px from top where sticky ends

  if (window.scrollY > stopStickyAt) {
    stickyElement.style.position = 'static'; // remove sticky
  } else {
    stickyElement.style.position = 'sticky'; // stay sticky
  }
});
