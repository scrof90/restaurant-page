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
    return t.map(r).forEach(function (t) {
      return e.appendChild(t);
    }), e;
  },
      r = function r(e) {
    var t = document.createElement("li"),
        n = a(e.href, e.text);
    return t.appendChild(n), t;
  },
      a = function a(t, n) {
    var r = e.createElement("a", n, "attribution");
    return r.href = t, r;
  },
      i = function i() {
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
          r = function () {
        var t = document.createElement("header"),
            n = e.createElement("h1", "Bob Dyson's Bar");
        return t.appendChild(n), t;
      }(),
          a = function () {
        var t = document.createElement("nav"),
            n = e.createElement("div", "Home", "tab", "active", "js-home"),
            r = e.createElement("div", "Menu", "tab", "js-menu"),
            a = e.createElement("div", "Contacts", "tab", "js-contacts");
        return e.appendChildren(t, n, r, a), t;
      }(),
          c = function () {
        var t = document.createElement("main"),
            n = e.createElement("div", null, "content", "blue-border", "js-content");
        return t.appendChild(n), t;
      }(),
          o = function () {
        var t = document.createElement("footer"),
            r = n(),
            a = i();
        return e.appendChildren(t, r, a), t;
      }();

      e.appendChildren(t, r, a, c, o);
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
        r = e.createElement("h2", "Welcome to Bob Dyson's Bar!"),
        a = e.createElement("p", "With a spectacular dancing floor harboring the best DJs from all over the solar the system and a million energy credit view of the recently built <strong>Dyson sphere</strong>, enjoy a wide variety of unique meals that would satisfy even the most sophisticated digestive system in the galaxy."),
        i = e.createElement("p", "We are always open"),
        c = e.createElement("p", "And all species are welcome<y>*</y>"),
        o = e.createElement("p", "<y>*</y>the Ur-Quan will be denied entry", "bottom-text");

    e.appendChildren(t, n, r, a, i, c, o);
  }
},
    r = function () {
  var t = [{
    name: "Improbable Burger",
    imgSrc: "img/menu-items/improbable-burger.jpg",
    desc: "Conjured straight from the vacuum of space, Improbable Burger truly is the pinnacle of probability engineering."
  }, {
    name: "Lorem ipsum",
    imgSrc: "img/menu-items/improbable-burger.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil quidem ipsa."
  }, {
    name: "Lorem ipsum",
    imgSrc: "img/menu-items/improbable-burger.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil quidem ipsa."
  }],
      n = function n(t, _n) {
    var r = e.createElement("img", null, "img-home");
    return r.alt = t, r.src = _n, r;
  };

  return {
    load: function load() {
      var r = document.querySelector(".js-content");
      r.innerHTML = "", t.forEach(function (t) {
        var a = function (t) {
          var r = e.createElement("div", null, "menu-item", "blue-border"),
              a = e.createElement("h2", t.name),
              i = n(t.name, t.imgSrc),
              c = e.createElement("p", t.desc);
          return e.appendChildren(r, a, i, c), r;
        }(t);

        r.appendChild(a);
      });
    }
  };
}(),
    a = function () {
  var t = [{
    name: "Bob Dyson",
    imgSrc: "img/menu-items/improbable-burger.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil quidem ipsa."
  }, {
    name: "Lorem ipsum",
    imgSrc: "img/menu-items/improbable-burger.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil quidem ipsa."
  }, {
    name: "Lorem ipsum",
    imgSrc: "img/menu-items/improbable-burger.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nihil quidem ipsa."
  }],
      n = function n(t, _n2) {
    var r = e.createElement("img", null, "img-home");
    return r.alt = t, r.src = _n2, r;
  };

  return {
    load: function load() {
      var r = document.querySelector(".js-content");
      r.innerHTML = "", t.forEach(function (t) {
        var a = function (t) {
          var r = e.createElement("div", null, "contact-item", "blue-border"),
              a = e.createElement("h2", t.name),
              i = n(t.name, t.imgSrc),
              c = e.createElement("p", t.desc);
          return e.appendChildren(r, a, c, i), r;
        }(t);

        r.appendChild(a);
      });
    }
  };
}();

t.load(), n.load(), function () {
  var e = document.querySelector(".js-home"),
      t = document.querySelector(".js-menu"),
      i = document.querySelector(".js-contacts");
  e.addEventListener("click", function (e) {
    e.target.classList.add("active"), t.classList.remove("active"), i.classList.remove("active"), n.load();
  }), t.addEventListener("click", function (t) {
    t.target.classList.add("active"), e.classList.remove("active"), i.classList.remove("active"), r.load();
  }), i.addEventListener("click", function (n) {
    n.target.classList.add("active"), e.classList.remove("active"), t.classList.remove("active"), a.load();
  });
}();
