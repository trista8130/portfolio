function handleClick() {
  document.getElementById("dropdown").classList.toggle("show");
}

function handleClick2() {
  if (window.innerWidth < 992) {
    document.getElementById("dropdown").classList.toggle("show");
  }
}

function handleNavScroll() {
  if (window.scrollY > 100 && window.innerWidth >= 992) {
    document.getElementById("navColor").style.backgroundColor = "#fff";
    document.getElementById("navColor").style.boxShadow =
      "0 0.5rem 1rem rgba(0, 0, 0, 0.15)";
    document.getElementById("brand").style.color = "#000";
    document.getElementById("link1").style.color = "#000";
    document.getElementById("link2").style.color = "#000";
    document.getElementById("link3").style.color = "#000";
    document.getElementById("link4").style.color = "#000";
  } else if (window.scrollY < 100 && window.innerWidth >= 992) {
    document.getElementById("navColor").style.backgroundColor = "transparent";
    document.getElementById("navColor").style.boxShadow = "none";
    document.getElementById("brand").style.color = "rgba(255, 255, 255, 0.7)";
    document.getElementById("link1").style.color = "rgba(255, 255, 255, 0.7)";
    document.getElementById("link2").style.color = "rgba(255, 255, 255, 0.7)";
    document.getElementById("link3").style.color = "rgba(255, 255, 255, 0.7)";
    document.getElementById("link4").style.color = "rgba(255, 255, 255, 0.7)";
  }
}

window.addEventListener("scroll", () => {
  const y = window.scrollY + 72;
  const abouty = document.getElementById("about").offsetTop;
  const abouth = -document.getElementById("about").offsetHeight;
  if (abouty - y < 0 && abouty - y > abouth) {
    document.getElementById("link1").style.color = "#f4623a";
  } else {
    if (window.innerWidth < 992) {
      document.getElementById("link1").style.color = "#6c757d";
    }
  }
  const servicesy = document.getElementById("services").offsetTop;
  const servicesh = -document.getElementById("services").offsetHeight;
  if (servicesy - y < 0 && servicesy - y > servicesh) {
    document.getElementById("link2").style.color = "#f4623a";
  } else {
    if (window.innerWidth < 992) {
      document.getElementById("link2").style.color = "#6c757d";
    }
  }
  const portfolioy = document.getElementById("portfolio").offsetTop;
  const portfolioh = -document.getElementById("portfolio").offsetHeight;
  if (portfolioy - y < 0 && portfolioy - y > portfolioh) {
    document.getElementById("link3").style.color = "#f4623a";
  } else {
    if (window.innerWidth < 992) {
      document.getElementById("link3").style.color = "#6c757d";
    }
  }
  if (portfolioy - y < portfolioh) {
    document.getElementById("link4").style.color = "#f4623a";
  } else {
    if (window.innerWidth < 992) {
      document.getElementById("link4").style.color = "#6c757d";
    }
  }
});

window.onload = function () {
  document.getElementById("caption1").onmouseover = function () {
    document.getElementById("caption1").style.opacity = "1";
  };
  document.getElementById("caption1").onmouseout = function () {
    document.getElementById("caption1").style.opacity = "0";
  };
  document.getElementById("caption2").onmouseover = function () {
    document.getElementById("caption2").style.opacity = "1";
  };
  document.getElementById("caption2").onmouseout = function () {
    document.getElementById("caption2").style.opacity = "0";
  };
  document.getElementById("caption3").onmouseover = function () {
    document.getElementById("caption3").style.opacity = "1";
  };
  document.getElementById("caption3").onmouseout = function () {
    document.getElementById("caption3").style.opacity = "0";
  };
  document.getElementById("caption4").onmouseover = function () {
    document.getElementById("caption4").style.opacity = "1";
  };
  document.getElementById("caption4").onmouseout = function () {
    document.getElementById("caption4").style.opacity = "0";
  };
  document.getElementById("caption5").onmouseover = function () {
    document.getElementById("caption5").style.opacity = "1";
  };
  document.getElementById("caption5").onmouseout = function () {
    document.getElementById("caption5").style.opacity = "0";
  };
  document.getElementById("caption6").onmouseover = function () {
    document.getElementById("caption6").style.opacity = "1";
  };
  document.getElementById("caption6").onmouseout = function () {
    document.getElementById("caption6").style.opacity = "0";
  };
};
