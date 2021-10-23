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
  var t = document.createElement("footer"),
      e = function () {
    var t = document.createElement("ul"),
        e = document.createElement("li"),
        n = document.createElement("a");
    n.classList.add("attribution"), n.href = "https://www.artstation.com/artwork/aa6R8", n.textContent = "Background art by Renaud ROCHE", e.appendChild(n);
    var a = document.createElement("li"),
        c = document.createElement("a");
    return n.classList.add("attribution"), n.href = "https://www.artstation.com/artwork/nlKG6", n.textContent = "Additional art by J.Otto Szatmari", a.appendChild(c), t.appendChild(e), t.appendChild(a), t;
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
  var a = document.querySelector("body");
  [t(), e(), document.createElement("main"), n()].forEach(function (t) {
    return a.appendChild(t);
  });
}();
