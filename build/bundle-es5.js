function t(t) {
  for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    e[_key - 1] = arguments[_key];
  }

  [].concat(e).forEach(function (e) {
    return t.appendChild(e);
  });
}

function e(t, e, n) {
  var c = document.createElement("div");
  return c.classList.add("tab", e), t && c.classList.add("active"), c.textContent = n, c;
}

function n(t, e) {
  var n = document.createElement("a");
  return n.classList.add("attribution"), n.href = t, n.textContent = e, n;
}

function c() {
  var t = document.querySelector(".js-content");
  t.innerHTML = "";
  !function (t) {
    for (var _len2 = arguments.length, e = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      e[_key2 - 1] = arguments[_key2];
    }

    [].concat(e).forEach(function (e) {
      return t.appendChild(e);
    });
  }(t, function () {
    var t = document.createElement("img");
    return t.classList.add("img-home"), t.src = "img/j-otto-szatmari-daygonebar-spacestation-jottoszatmari2016.jpg", t.alt = "Bar - Space Station by J.Otto Szatmari", t;
  }(), o("h2", "Welcome to Saul Dyson's Bar!"), o("p", "With a spectacular dancing floor harboring the best DJs from all over the solar the system and a million energy credit view of a recently build <strong>Dyson sphere</strong>, enjoy a wide variety of unique meals that would satisfy even the most sophisticated digestive systems in the galaxy."), o("p", "We are always open"), o("p", "All species are welcome<y>*</y>"), o("p", "<y>*</y>the Ur-Quan will be forcefully escorted from the premises", "bottom-text"));
}

function o(t, e, n) {
  var c = document.createElement(t);
  return c.innerHTML = e, n && c.classList.add(n), c;
}

!function () {
  var c = document.querySelector("body"),
      o = function () {
    var t = document.createElement("header"),
        e = function () {
      var t = document.createElement("h1");
      return t.textContent = "Saul Dyson's Bar", t;
    }();

    return t.appendChild(e), t;
  }(),
      a = function () {
    var n = document.createElement("nav"),
        c = e(!0, "js-home", "Home"),
        o = e(!1, "js-menu", "Menu"),
        a = e(!1, "js-contacts", "Contacts");
    return t(n, c, o, a), n;
  }(),
      s = function () {
    var t = document.createElement("main"),
        e = function () {
      var t = document.createElement("div");
      return t.classList.add("content", "js-content"), t;
    }();

    return t.appendChild(e), t;
  }(),
      i = function () {
    var e = document.createElement("footer"),
        c = function () {
      var e = document.createElement("ul"),
          c = document.createElement("li"),
          o = n("https://www.artstation.com/artwork/aa6R8", "Background art by Renaud ROCHE");
      c.appendChild(o);
      var a = document.createElement("li"),
          s = n("https://www.artstation.com/artwork/nlKG6", "Additional art by J.Otto Szatmari");
      return a.appendChild(s), t(e, c, a), e;
    }(),
        o = function () {
      var t = document.createElement("a");
      t.href = "https://github.com/scrof90";

      var e = function () {
        var t = document.createElement("img");
        return t.classList.add("my-github"), t.src = "https://avatars.githubusercontent.com/u/46364597?v=4", t.alt = "@scrof90", t;
      }();

      return t.appendChild(e), t;
    }();

    return t(c, o), e;
  }();

  t(c, o, a, s, i);
}(), c(), function () {
  var t = document.querySelector(".js-home"),
      e = document.querySelector(".js-menu"),
      n = document.querySelector(".js-contacts");
  t.addEventListener("click", function (t) {
    t.target.classList.add("active"), e.classList.remove("active"), n.classList.remove("active"), c();
  }), e.addEventListener("click", function (e) {
    e.target.classList.add("active"), t.classList.remove("active"), n.classList.remove("active"), function () {
      var t = document.querySelector(".js-content");
      t.innerHTML = "", t.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat vel cum temporibus nesciunt.Veniam qui numquam nulla iure consequuntur corporis iusto.Deleniti alias ad ipsum quibusdam illo ipsam a cupiditate.";
    }();
  }), n.addEventListener("click", function (n) {
    n.target.classList.add("active"), t.classList.remove("active"), e.classList.remove("active"), function () {
      var t = document.querySelector(".js-content");
      t.innerHTML = "", t.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat vel cum temporibus nesciunt.Veniam qui numquam nulla iure consequuntur corporis iusto.Deleniti alias ad ipsum quibusdam illo ipsam a cupiditate.";
    }();
  });
}();
