var e = {
  createElement: function createElement(e, t) {
    var a = document.createElement(e);

    for (var _len = arguments.length, n = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      n[_key - 2] = arguments[_key];
    }

    return t && (a.innerHTML = t), 0 !== n.length && [].concat(n).forEach(function (e) {
      return a.classList.add(e);
    }), a;
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
    t = function () {
  var t = [{
    href: "https://www.artstation.com/artwork/aa6R8",
    text: "Background art by Renaud ROCHE"
  }, {
    href: "https://www.artstation.com/artwork/nlKG6",
    text: "Additional art by J.Otto Szatmari"
  }],
      n = function n() {
    var e = document.createElement("ul");
    return t.map(a).forEach(function (t) {
      return e.appendChild(t);
    }), e;
  },
      a = function a(e) {
    var t = document.createElement("li"),
        n = r(e.href, e.text);
    return t.appendChild(n), t;
  },
      r = function r(t, n) {
    var a = e.createElement("a", n, "attribution");
    return a.href = t, a;
  },
      o = function o() {
    var e = document.createElement("a");
    e.href = "https://github.com/scrof90";
    var t = c();
    return e.appendChild(t), e;
  },
      c = function c() {
    var t = e.createElement("img", null, "my-github");
    return t.src = "https://avatars.githubusercontent.com/u/46364597?v=4", t.alt = "@scrof90", t;
  };

  return {
    load: function load() {
      var t = document.querySelector("body"),
          a = function () {
        var t = document.createElement("header"),
            n = e.createElement("h1", "Saul Dyson's Bar");
        return t.appendChild(n), t;
      }(),
          r = function () {
        var t = document.createElement("nav"),
            n = e.createElement("div", "Home", "tab", "active", "js-home"),
            a = e.createElement("div", "Menu", "tab", "js-menu"),
            r = e.createElement("div", "Contacts", "tab", "js-contacts");
        return e.appendChildren(t, n, a, r), t;
      }(),
          c = function () {
        var t = document.createElement("main"),
            n = e.createElement("div", null, "content", "blue-border", "js-content");
        return t.appendChild(n), t;
      }(),
          s = function () {
        var t = document.createElement("footer"),
            a = n(),
            r = o();
        return e.appendChildren(t, a, r), t;
      }();

      e.appendChildren(t, a, r, c, s);
    }
  };
}(),
    n = {
  load: function load() {
    var t = document.querySelector(".js-content");
    t.innerHTML = "";

    var n = function () {
      var t = e.createElement("img", null, "img-home");
      return t.src = "img/j-otto-szatmari-daygonebar-spacestation-jottoszatmari2016.jpg", t.alt = "Bar - Space Station by J.Otto Szatmari", t;
    }(),
        a = e.createElement("h2", "Welcome to Saul Dyson's Bar!"),
        r = e.createElement("p", "With a spectacular dancing floor harboring the best DJs from all over the solar the system and a million energy credit view of a recently build <strong>Dyson sphere</strong>, enjoy a wide variety of unique meals that would satisfy even the most sophisticated digestive systems in the galaxy."),
        o = e.createElement("p", "We are always open"),
        c = e.createElement("p", "All species are welcome<y>*</y>"),
        s = e.createElement("p", "<y>*</y>the Ur-Quan will be forcefully escorted from the premises", "bottom-text");

    e.appendChildren(t, n, a, r, o, c, s);
  }
},
    a = function () {
  var t = [{
    name: "Improbable Burger",
    imgSrc: "img/menu-items/improbable-burger.jpg",
    desc: "Made by careful manipulation of probability waves we made the most perfect burger in Sol, conjured straight from the vacuum of space."
  }],
      n = function n(t) {
    var n = e.createElement("img", null, "img-home");
    return n.src = t, n.alt = "Improbable Burger", n;
  };

  return {
    load: function load() {
      var a = document.querySelector(".js-content");
      a.innerHTML = "", t.forEach(function (t) {
        var r = function (t) {
          var a = e.createElement("div", null, "menu-item", "blue-border"),
              r = e.createElement("h2", t.name),
              o = n(t.imgSrc),
              c = e.createElement("p", t.desc);
          return e.appendChildren(a, r, o, c), a;
        }(t);

        a.appendChild(r);
      });
    }
  };
}(),
    r = {
  load: function load() {
    var e = document.querySelector(".js-content");
    e.innerHTML = "", e.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat vel cum temporibus nesciunt.Veniam qui numquam nulla iure consequuntur corporis iusto.Deleniti alias ad ipsum quibusdam illo ipsam a cupiditate.";
  }
};

t.load(), n.load(), function () {
  var e = document.querySelector(".js-home"),
      t = document.querySelector(".js-menu"),
      o = document.querySelector(".js-contacts");
  e.addEventListener("click", function (e) {
    e.target.classList.add("active"), t.classList.remove("active"), o.classList.remove("active"), n.load();
  }), t.addEventListener("click", function (t) {
    t.target.classList.add("active"), e.classList.remove("active"), o.classList.remove("active"), a.load();
  }), o.addEventListener("click", function (n) {
    n.target.classList.add("active"), e.classList.remove("active"), t.classList.remove("active"), r.load();
  });
}();
