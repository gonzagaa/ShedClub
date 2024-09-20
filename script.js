const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener('mousemove', function (e) {

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left = `${posX}px`
  cursorDot.style.top = `${posY}px`

  cursorOutline.style.left = `${posX}px`
  cursorOutline.style.top = `${posY}px`

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration: 500, fill: "forwards"});
})


window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        document.querySelector("#navigation").classList.add("scroll")
    } else {
        document.querySelector("#navigation").classList.remove("scroll")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

const header = document.querySelector('header.header')

window.addEventListener('scroll', () => {
  const alturaScrollY = window.scrollY
  const larguraDaTela = window.innerWidth

  if (larguraDaTela < 768) {
    if (alturaScrollY < 100) {
      header.classList.remove('on')
    } else {
      header.classList.add('on')
    }
  } else {
    if (alturaScrollY < 150) {
      header.classList.remove('on')
    } else {
      header.classList.add('on')
    }
  }
});

  AOS.init({
    duration: 1200,
  });

  const larguraDaTela = window.innerWidth

  if (larguraDaTela < 800) {
      var swiper3 = new Swiper(".mySwiper3", {
          slidesPerView: 1,
          spaceBetween: 10,
          loop: true,
          grabCursor: true,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
  } else {
      var swiper3 = new Swiper(".mySwiper3", {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: true,
          grabCursor: true,
          freeMode: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        });
  }