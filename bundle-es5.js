function t() {
  var t = document.createElement("header"),
      e = document.createElement("h1");
  return e.textContent = "Saul Dyson's Bar", t.appendChild(e), t;
}

function e() {
  var t = document.createElement("nav"),
      e = document.createElement("div");
  e.classList.add("tab", "active", "js-home"), e.textContent = "Home";
  var n = document.createElement("div");
  n.classList.add("tab", "js-menu"), n.textContent = "Menu";
  var a = document.createElement("div");
  a.classList.add("tab", "js-contacts"), a.textContent = "Contacts";
  return [e, n, a].forEach(function (e) {
    return t.appendChild(e);
  }), t;
}

function n() {
  var t = document.createElement("main"),
      e = document.createElement("div");
  return e.classList.add("content", "js-content"), t.appendChild(e), t;
}

function a() {
  var t = document.createElement("footer"),
      e = function () {
    var t = document.createElement("ul"),
        e = document.createElement("li"),
        n = document.createElement("a");
    n.classList.add("attribution"), n.href = "https://www.artstation.com/artwork/aa6R8", n.textContent = "Background art by Renaud ROCHE", e.appendChild(n);
    var a = document.createElement("li"),
        o = document.createElement("a");
    return o.classList.add("attribution"), o.href = "https://www.artstation.com/artwork/nlKG6", o.textContent = "Additional art by J.Otto Szatmari", a.appendChild(o), t.appendChild(e), t.appendChild(a), t;
  }(),
      n = function () {
    var t = document.createElement("a");
    t.href = "https://github.com/scrof90";
    var e = document.createElement("img");
    return e.classList.add("my-github"), e.src = "https://avatars.githubusercontent.com/u/46364597?v=4", e.alt = "@scrof90", t.appendChild(e), t;
  }();

  return t.appendChild(e), t.appendChild(n), t;
}

!function () {
  var o = document.querySelector("body");
  [t(), e(), n(), a()].forEach(function (t) {
    return o.appendChild(t);
  });
}(), function () {
  var t = document.querySelector(".js-content");
  t.innerHTML = "";

  var e = function () {
    var t = document.createElement("img");
    return t.classList.add("img-home"), t.src = "img/j-otto-szatmari-daygonebar-spacestation-jottoszatmari2016.jpg", t.alt = "Bar - Space Station by J.Otto Szatmari", t;
  }(),
      n = document.createElement("h2");

  n.textContent = "Welcome to Saul Dyson's Bar!";
  var a = document.createElement("p");
  a.innerHTML = "With a spectacular dancing floor harboring the best DJs from all over the solar the system and a million energy credit view of a recently build < strong > Dyson sphere</ >, enjoy a wide variety of unique meals that would satisfy even the most sophisticated digestive systems in the galaxy.";
  var o = document.createElement("p");
  o.textContent = "We are always open";
  var c = document.createElement("p");
  c.innerHTML = "All species are welcome<y>*</y>";
  var r = document.createElement("p");
  r.classList.add("bottom-text"), r.innerHTML = "<y>*</y>the Ur-Quan will be forcefully escorted from the premises", [e, n, a, o, c, r].forEach(function (e) {
    return t.appendChild(e);
  });
}();
