var e = {
  createElement: function createElement(e, t) {
    var c = document.createElement(e);

    for (var _len = arguments.length, n = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      n[_key - 2] = arguments[_key];
    }

    return t && (c.innerHTML = t), 0 !== n.length && [].concat(n).forEach(function (e) {
      return c.classList.add(e);
    }), c;
  },
  appendChildren: function appendChildren(e) {
    for (var _len2 = arguments.length, t = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      t[_key2 - 1] = arguments[_key2];
    }

    [].concat(t).forEach(function (t) {
      return e.appendChild(t);
    });
  }
},
    t = [{
  href: "https://www.artstation.com/artwork/aa6R8",
  text: "Background art by Renaud ROCHE"
}, {
  href: "https://www.artstation.com/artwork/nlKG6",
  text: "Additional art by J.Otto Szatmari"
}];

function n(e, t, n) {
  var c = document.createElement("div");
  return c.classList.add("tab", t), e && c.classList.add("active"), c.textContent = n, c;
}

function c(e) {
  var t = document.createElement("li"),
      n = function (e, t) {
    var n = document.createElement("a");
    return n.classList.add("attribution"), n.href = e, n.textContent = t, n;
  }(e.href, e.text);

  return t.appendChild(n), t;
}

function a() {
  var t = document.querySelector(".js-content");
  t.innerHTML = "";

  var n = function () {
    var e = document.createElement("img");
    return e.classList.add("img-home"), e.src = "img/j-otto-szatmari-daygonebar-spacestation-jottoszatmari2016.jpg", e.alt = "Bar - Space Station by J.Otto Szatmari", e;
  }(),
      c = o("h2", "Welcome to Saul Dyson's Bar!"),
      a = o("p", "With a spectacular dancing floor harboring the best DJs from all over the solar the system and a million energy credit view of a recently build <strong>Dyson sphere</strong>, enjoy a wide variety of unique meals that would satisfy even the most sophisticated digestive systems in the galaxy."),
      r = o("p", "We are always open"),
      s = o("p", "All species are welcome<y>*</y>"),
      i = o("p", "<y>*</y>the Ur-Quan will be forcefully escorted from the premises", "bottom-text");

  e.appendChildren(t, n, c, a, r, s, i);
}

function o(e, t, n) {
  var c = document.createElement(e);
  return c.innerHTML = t, n && c.classList.add(n), c;
}

var r = [{
  name: "Improbable Burger",
  imgSrc: "img/menu-items/improbable-burger.jpg",
  desc: "Made by careful manipulation of probability waves we made the most perfect burger in Sol, conjured straight from the vacuum of space."
}];

function s() {
  var t = document.querySelector(".js-content");
  t.innerHTML = "", r.forEach(function (n) {
    var c = function (t, n, c) {
      var a = e.createElement("div", null, "menu-item", "blue-border"),
          o = e.createElement("h2", t),
          r = e.createElement("img", null, "img-home");
      r.src = n;
      var s = e.createElement("p", c);
      return e.appendChildren(a, o, r, s), a;
    }(n.name, n.imgSrc, n.desc);

    t.appendChild(c);
  });
}

!function () {
  var a = document.querySelector("body"),
      o = function () {
    var e = document.createElement("header"),
        t = function () {
      var e = document.createElement("h1");
      return e.textContent = "Saul Dyson's Bar", e;
    }();

    return e.appendChild(t), e;
  }(),
      r = function () {
    var t = document.createElement("nav"),
        c = n(!0, "js-home", "Home"),
        a = n(!1, "js-menu", "Menu"),
        o = n(!1, "js-contacts", "Contacts");
    return e.appendChildren(t, c, a, o), t;
  }(),
      s = function () {
    var e = document.createElement("main"),
        t = function () {
      var e = document.createElement("div");
      return e.classList.add("content", "blue-border", "js-content"), e;
    }();

    return e.appendChild(t), e;
  }(),
      i = function () {
    var n = document.createElement("footer"),
        a = function () {
      var e = document.createElement("ul");
      return t.map(c).forEach(function (t) {
        return e.appendChild(t);
      }), e;
    }(),
        o = function () {
      var e = document.createElement("a");
      e.href = "https://github.com/scrof90";

      var t = function () {
        var e = document.createElement("img");
        return e.classList.add("my-github"), e.src = "https://avatars.githubusercontent.com/u/46364597?v=4", e.alt = "@scrof90", e;
      }();

      return e.appendChild(t), e;
    }();

    return e.appendChildren(n, a, o), n;
  }();

  e.appendChildren(a, o, r, s, i);
}(), a(), function () {
  var e = document.querySelector(".js-home"),
      t = document.querySelector(".js-menu"),
      n = document.querySelector(".js-contacts");
  e.addEventListener("click", function (e) {
    e.target.classList.add("active"), t.classList.remove("active"), n.classList.remove("active"), a();
  }), t.addEventListener("click", function (t) {
    t.target.classList.add("active"), e.classList.remove("active"), n.classList.remove("active"), s();
  }), n.addEventListener("click", function (n) {
    n.target.classList.add("active"), e.classList.remove("active"), t.classList.remove("active"), function () {
      var e = document.querySelector(".js-content");
      e.innerHTML = "", e.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat vel cum temporibus nesciunt.Veniam qui numquam nulla iure consequuntur corporis iusto.Deleniti alias ad ipsum quibusdam illo ipsam a cupiditate.";
    }();
  });
}();
