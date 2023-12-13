function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.querySelector("navbar").style.top = "0";
    } else {
      document.querySelector("navbar").style.top = "-50px";
    }
  }

  document.querySelector('.down-arrow').addEventListener('click', function (event) {
    event.preventDefault();
    const targetElement = document.querySelector('.scroll-anchor');
    window.scrollTo({
      bottom: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });