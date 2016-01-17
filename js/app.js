(function() {
  window.onload = function() {
    animateLogo();
    animateRobot();
    updateSliderControl();
  }

  window.onscroll = function() {
    addSmoothScrolling();
    updateSliderControl();
  }

  function animateLogo() {
    TweenMax.fromTo(".react-logo", 2, {
      // from
      css: {
        y: "-20px", // GPU 加速
        // top: "-20px",
      }
    }, {
      // to
      css: {
        y: "20px", //GPU 加速
        // top: "20px",
      },

      // 永久重复动画的选项
      repeat: -1,

      // 反转、重新运行动画的选项
      yoyo: true,

      // 改变 easing 类型
      ease: Sine.easeInOut,
    });
  }

  function animateRobot() {
    var t = new TimelineMax({
      yoyo: true,
      repeat: -1
    });

    t.to("#android-robot", 1, {
      rotation: "-=10deg"
    });
  }

  function updateSliderControl() {
    var links = document.querySelectorAll("#slider-control a");

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var anchor = link.getAttribute('href');
      var section = document.querySelector(anchor);

      var height = (section.offsetHeight) / 2;
      var sectionTop = section.offsetTop;
      var sectionBottom = sectionTop + height;

      if (window.scrollY >= (sectionTop - height) && window.scrollY <= sectionBottom) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  }

  function scrollToElement(element) {
    var topOfElement = element.offsetTop;

    TweenMax.to(window, 1, {
      scrollTo: {
        y: topOfElement,
      },

      ease: Power2.easeInOut,
    });
  }

  function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a");

    for (var i = 0; i < links.length; i++) {
      // http://stackoverflow.com/a/8909792/1240067
      // http://stackoverflow.com/a/20587755/1240067

      (function(inx) {
        var link = links[inx];
        link.addEventListener('click', function(e) {
          e.preventDefault();
          var href = link.getAttribute('href');
          var element = document.querySelector(href);
          scrollToElement(element);
        })
      })(i);
    }
  }

})();
