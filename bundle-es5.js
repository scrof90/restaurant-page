var t = [{
  href: "https://www.artstation.com/artwork/aa6R8",
  text: "Background art by Renaud ROCHE"
}, {
  href: "https://www.artstation.com/artwork/nlKG6",
  text: "Additional art by J.Otto Szatmari"
}];

function e(t) {
  for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    e[_key - 1] = arguments[_key];
  }

  [].concat(e).forEach(function (e) {
    return t.appendChild(e);
  });
}

function n(t, e, n) {
  var c = document.createElement("div");
  return c.classList.add("tab", e), t && c.classList.add("active"), c.textContent = n, c;
}

function c(t) {
  var e = document.createElement("li"),
      n = function (t, e) {
    var n = document.createElement("a");
    return n.classList.add("attribution"), n.href = t, n.textContent = e, n;
  }(t.href, t.text);

  return e.appendChild(n), e;
}

function o() {
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
  }(), a("h2", "Welcome to Saul Dyson's Bar!"), a("p", "With a spectacular dancing floor harboring the best DJs from all over the solar the system and a million energy credit view of a recently build <strong>Dyson sphere</strong>, enjoy a wide variety of unique meals that would satisfy even the most sophisticated digestive systems in the galaxy."), a("p", "We are always open"), a("p", "All species are welcome<y>*</y>"), a("p", "<y>*</y>the Ur-Quan will be forcefully escorted from the premises", "bottom-text"));
}

function a(t, e, n) {
  var c = document.createElement(t);
  return c.innerHTML = e, n && c.classList.add(n), c;
}

!function () {
  var o = document.querySelector("body"),
      a = function () {
    var t = document.createElement("header"),
        e = function () {
      var t = document.createElement("h1");
      return t.textContent = "Saul Dyson's Bar", t;
    }();

    return t.appendChild(e), t;
  }(),
      s = function () {
    var t = document.createElement("nav"),
        c = n(!0, "js-home", "Home"),
        o = n(!1, "js-menu", "Menu"),
        a = n(!1, "js-contacts", "Contacts");
    return e(t, c, o, a), t;
  }(),
      i = function () {
    var t = document.createElement("main"),
        e = function () {
      var t = document.createElement("div");
      return t.classList.add("content", "js-content"), t;
    }();

    return t.appendChild(e), t;
  }(),
      r = function () {
    var n = document.createElement("footer"),
        o = function () {
      var e = document.createElement("ul");
      return t.map(c).forEach(function (t) {
        return e.appendChild(t);
      }), e;
    }(),
        a = function () {
      var t = document.createElement("a");
      t.href = "https://github.com/scrof90";

      var e = function () {
        var t = document.createElement("img");
        return t.classList.add("my-github"), t.src = "https://avatars.githubusercontent.com/u/46364597?v=4", t.alt = "@scrof90", t;
      }();

      return t.appendChild(e), t;
    }();

    return e(n, o, a), n;
  }();

  e(o, a, s, i, r);
}(), o(), function () {
  var t = document.querySelector(".js-home"),
      e = document.querySelector(".js-menu"),
      n = document.querySelector(".js-contacts");
  t.addEventListener("click", function (t) {
    t.target.classList.add("active"), e.classList.remove("active"), n.classList.remove("active"), o();
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
