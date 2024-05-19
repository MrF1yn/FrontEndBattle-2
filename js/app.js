

// smoothScroll("#content");

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}





function pageTransition() {
  var tle = gsap.timeline();

  tle.to(".loading-screen", {
    duration: 0.5,
    top: "0vh",
    ease: "expo.inOut",
    // markers: true,
  });


  tle.to(".loading-screen", {
    duration: 1,
    // height: "100vh",
    top: "-100vh",
    ease: "expo.inOut",
    delay: 0.1,
  });


  // tl.to(".loading-screen", {
  //   duration: 1,
  //   height: "100%",
  //   bottom: "100%",
  //   ease: "Expo.easeInOut",
  //   // delay: 0.3,
  // });
  tle.set(".loading-screen", {
    top: "100vh",
  });

}

function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".animate-this", {duration: 0.5, y: 30, opacity: 0, stagger: 0.4, delay: 0.2});
}


  barba.init({
    sync: true,

    transitions: [
      {
        async beforeLeave(data) {
          const done = this.async();
          pageTransition();
          await delay(1000);
          done();
        },

        async enter(data) {
          await delay(200);
          location.reload();
          // gsap.timeline().set(".active", {
          //   display: "block",
          // })
          // pageTransition();
          // contentAnimation();
        },

        async once(data) {
          // contentAnimation();
        },
      },
    ],
  });






// barba.hooks.beforeEnter((data) => {
//   // JS functions here
//
//   function getCss(path){
//     return `<link rel="stylesheet" href="${path}">`;
//   }
//
//   function getJs(path) {
//     return `<script src="${path}"></script>`;
//   }
//
//   let namespace = data.next.namespace;
//   let head = document.head;
//   let body = document.body;
//   console.log(href);
//   switch (namespace) {
//     case "home":
//       head.insertAdjacentHTML("beforeend", getCss('./css/style.css'));
//       head.insertAdjacentHTML("beforeend", getCss('./css/btn-31.css'));
//       body.insertAdjacentHTML("beforeend", getJs('./js/app.js'));
//       break;
//     case "docs":
//       head.insertAdjacentHTML("beforeend", getCss('../css/style.css'));
//       head.insertAdjacentHTML("beforeend", getCss('../css/btn-31.css'));
//       head.insertAdjacentHTML("beforeend", getCss('../css/all-documents.css'));
//       body.insertAdjacentHTML("beforeend", getJs('../js/app.js'));
//       break;
//     case "news":
//       head.insertAdjacentHTML("beforeend", getCss('../css/style.css'));
//       head.insertAdjacentHTML("beforeend", getCss('../css/btn-31.css'));
//       head.insertAdjacentHTML("beforeend", getCss('../css/all-documents.css'));
//       body.insertAdjacentHTML("beforeend", getJs('../js/app.js'));
//       body.insertAdjacentHTML("beforeend", getJs('../js/news.js'));
//       break;
//     case "subs":
//     case "reports":
//       head.insertAdjacentHTML("beforeend", getCss('../css/style.css'));
//       head.insertAdjacentHTML("beforeend", getCss('../css/btn-31.css'));
//       head.insertAdjacentHTML("beforeend", getCss('../css/all-documents.css'));
//       head.insertAdjacentHTML("beforeend", getCss('../css/reports.css'));
//       body.insertAdjacentHTML("beforeend", getJs('../js/app.js'));
//       break;
//   }
//
//   killEvents();
// });

let tl = gsap.timeline({repeat: -1});
tl.to('.img2', {
  duration: 5,
  left: "-20vw",
  ease: "slow(0.7,0.7,false)",
}, "-=2.5");
tl.to('.img3', {
  duration: 5,
  left: "-20vw",
  ease: "slow(0.7,0.7,false)",
}, "-=2.5");
tl.to('.img4', {
  duration: 5,
  left: "-20vw",
  ease: "slow(0.7,0.7,false)",
}, "-=2.5");
tl.to('.img6', {
  duration: 5,
  left: "0vw",
  ease: "slow(0.7,0.7,false)",
}, "-=2.5");
tl.set('.img4 .img3 .img1', {
  left: "100vw",
});




