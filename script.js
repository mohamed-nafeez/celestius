document.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.container1');
  elements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
});
document.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.container-f');
  elements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
});
document.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.containerp');
  elements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
});
document.addEventListener('scroll', function () {
  const elements = document.querySelectorAll('.slide');
  elements.forEach(element => {
    if (element.getBoundingClientRect().top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
});

