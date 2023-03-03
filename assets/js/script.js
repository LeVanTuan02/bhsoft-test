const btnScrollTop = document.querySelector("#btn-back-top");

document.addEventListener("scroll", () => {
  const scrollHeight = document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollHeight >= 1000) {
    btnScrollTop.classList.add("active");
  } else {
    btnScrollTop.classList.remove("active");
  }
});

btnScrollTop.addEventListener("click", () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
});
