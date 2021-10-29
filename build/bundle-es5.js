var e = {
  createElement: function createElement(e, t) {
    var r = document.createElement(e);

    for (var _len = arguments.length, n = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      n[_key - 2] = arguments[_key];
    }

    return t && (r.innerHTML = t), 0 !== n.length && [].concat(n).forEach(function (e) {
      return r.classList.add(e);
    }), r;
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

function n(t, n, r) {
  var a = e.createElement("div", r, "tab", n);
  return t && a.classList.add("active"), a;
}

function r(t) {
  var n = document.createElement("li"),
      r = function (t, n) {
    var r = e.createElement("a", n, "attribution");
    return r.href = t, r;
  }(t.href, t.text);

  return n.appendChild(r), n;
}

function a() {
  var t = document.querySelector(".js-content");
  t.innerHTML = "";

  var n = function () {
    var t = e.createElement("img", null, "img-home");
    return t.src = "img/j-otto-szatmari-daygonebar-spacestation-jottoszatmari2016.jpg", t.alt = "Bar - Space Station by J.Otto Szatmari", t;
  }(),
      r = e.createElement("h2", "Welcome to Saul Dyson's Bar!"),
      a = e.createElement("p", "With a spectacular dancing floor harboring the best DJs from all over the solar the system and a million energy credit view of a recently build <strong>Dyson sphere</strong>, enjoy a wide variety of unique meals that would satisfy even the most sophisticated digestive systems in the galaxy."),
      c = e.createElement("p", "We are always open"),
      o = e.createElement("p", "All species are welcome<y>*</y>"),
      i = e.createElement("p", "<y>*</y>the Ur-Quan will be forcefully escorted from the premises", "bottom-text");

  e.appendChildren(t, n, r, a, c, o, i);
}

var c = [{
  name: "Improbable Burger",
  imgSrc: "img/menu-items/improbable-burger.jpg",
  desc: "Made by careful manipulation of probability waves we made the most perfect burger in Sol, conjured straight from the vacuum of space."
}];

function o() {
  var t = document.querySelector(".js-content");
  t.innerHTML = "", c.forEach(function (n) {
    var r = function (t) {
      var n = e.createElement("div", null, "menu-item", "blue-border"),
          r = e.createElement("h2", t.name),
          a = function (t) {
        var n = e.createElement("img", null, "img-home");
        return n.src = t, n;
      }(t.imgSrc),
          c = e.createElement("p", t.desc);

      return e.appendChildren(n, r, a, c), n;
    }(n);

    t.appendChild(r);
  });
}

!function () {
  var a = document.querySelector("body"),
      c = function () {
    var t = document.createElement("header"),
        n = e.createElement("h1", "Saul Dyson's Bar");
    return t.appendChild(n), t;
  }(),
      o = function () {
    var t = document.createElement("nav"),
        r = n(!0, "js-home", "Home"),
        a = n(!1, "js-menu", "Menu"),
        c = n(!1, "js-contacts", "Contacts");
    return e.appendChildren(t, r, a, c), t;
  }(),
      i = function () {
    var t = document.createElement("main"),
        n = e.createElement("div", null, "content", "blue-border", "js-content");
    return t.appendChild(n), t;
  }(),
      s = function () {
    var n = document.createElement("footer"),
        a = function () {
      var e = document.createElement("ul");
      return t.map(r).forEach(function (t) {
        return e.appendChild(t);
      }), e;
    }(),
        c = function () {
      var t = document.createElement("a");
      t.href = "https://github.com/scrof90";

      var n = function () {
        var t = e.createElement("img", null, "my-github");
        return t.src = "https://avatars.githubusercontent.com/u/46364597?v=4", t.alt = "@scrof90", t;
      }();

      return t.appendChild(n), t;
    }();

    return e.appendChildren(n, a, c), n;
  }();

  e.appendChildren(a, c, o, i, s);
}(), a(), function () {
  var e = document.querySelector(".js-home"),
      t = document.querySelector(".js-menu"),
      n = document.querySelector(".js-contacts");
  e.addEventListener("click", function (e) {
    e.target.classList.add("active"), t.classList.remove("active"), n.classList.remove("active"), a();
  }), t.addEventListener("click", function (t) {
    t.target.classList.add("active"), e.classList.remove("active"), n.classList.remove("active"), o();
  }), n.addEventListener("click", function (n) {
    n.target.classList.add("active"), e.classList.remove("active"), t.classList.remove("active"), function () {
      var e = document.querySelector(".js-content");
      e.innerHTML = "", e.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat vel cum temporibus nesciunt.Veniam qui numquam nulla iure consequuntur corporis iusto.Deleniti alias ad ipsum quibusdam illo ipsam a cupiditate.";
    }();
  });
}();
