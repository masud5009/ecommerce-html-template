// aos inti
document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
});

const navbarItems = document.getElementById('navbarItems');
const offcanvasNavbarItems = document.getElementById('offcanvasNavbarItems');

function handleResize() {
  if (window.innerWidth < 992) {
    if (offcanvasNavbarItems.children.length === 0) {
      while (navbarItems.children.length > 0) {
        offcanvasNavbarItems.appendChild(navbarItems.children[0]);
      }
    }
  } else {
    if (navbarItems.children.length === 0) {
      while (offcanvasNavbarItems.children.length > 0) {
        navbarItems.appendChild(offcanvasNavbarItems.children[0]);
      }
    }
  }
}

window.addEventListener('resize', handleResize);
handleResize();


document.getElementById('account-btn').addEventListener('click', function() {
  var dropdown = document.getElementById('account-dropdown');
  if (dropdown.style.display === 'block') {
      dropdown.style.display = 'none';
  } else {
      dropdown.style.display = 'block';
  }
});


/*============= hero section slider ==========*/
document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('#hero-slider', {
    loop: true,
    speed: 500,
    autoplay:{
      delay:3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});


/*======== product slider ==================*/
new Swiper('#product-swiper', {
  loop: true,
  spaceBetween: 30,
  speed: 500,
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 4,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    },
  },
});




// Set the date we're counting down to
var countDownDate = new Date("May 31, 2024 15:00:00").getTime();

// Update the count down every 1 second
var countdownfunction = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in elements with corresponding ids
  document.getElementById("days").innerHTML = days < 10 ? '0' + days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? '0' + hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;

  // If the countdown is over, write some text
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
