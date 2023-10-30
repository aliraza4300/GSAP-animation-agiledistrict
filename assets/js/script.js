gsap.registerPlugin(ScrollTrigger);

// gsap.from(".left-section", {
//   x: -50,
//   y: 80,
//   duration: 4,
//   opacity: 0,
//   delay: 0.1,
//   scrollTrigger: {
//     trigger: ".left-section",
//     markers: {},
//     start: "200px 75%",
//     end: "200px 40%",

//     toggleActions: "play reverse none none",
//     scrub: 1,
//   },
// });

gsap.from(".about_heading", {
  // opacity: 0,
  x: 900,
  duration: 4,
  delay: 0.1,
  scrollTrigger: {
    trigger: ".about_heading",
    markers: true,
    start: "top center",
    end: "top 30%",
    toggleActions: "play reverse none none",
    scrub: 1,
  },
});

gsap.from(".about_paragrgaph", {
  x: 900,
  // opacity: 0,
  duration: 4,
  delay: 0.1,
  scrollTrigger: {
    trigger: ".about_paragrgaph",
    markers: true,
    start: "top center",
    end: "top 30%",
    scrub: 1,
    toggleActions: "play reverse none none",
  },
});

gsap.from(".aboutParagrgaph2", {
  // x: 100,
  y: -300,
  rotate: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".aboutParagrgaph2",
    markers: true,
    start: "600px 40%",
    end: "600px top",
    toggleClass: "paragraphMagic",
    toggleActions: "play reverse restart reverse",
  },
});

ScrollTrigger.create({
  // x: 300,
  trigger: ".aboutParagrgaph2",
  markers: true,
  start: "100px 80%",
  end: "100px top",
  // rotate: 360,
  // toggleActions: "play none none none",
  // scrub: 1,
  toggleClass: "paragraphMagic",
});

// sImg  fImg   mImg  vImg

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sImg",
    markers: true,
    start: "top 50%",
    end: "top 30%",
    toggleActions: "play none reset none",
    scrub: 4,
  },
});
tl.from(".sImg", {
  x: 250,
  y: -300,
  opacity: 0,
  duration: 2,
  rotate: 360,
  ease: "bounce.out",
});
tl.from(".fImg", {
  x: 250,
  y: -300,
  opacity: 0,
  duration: 2,
  rotate: 360,
  ease: "bounce.out",
});
tl.from(".mImg", {
  x: 250,
  y: -300,
  opacity: 0,
  duration: 2,
  rotate: 360,
  ease: "bounce.out",
});
tl.from(".vImg", {
  x: 250,
  y: -300,
  opacity: 0,
  duration: 2,
  rotate: 360,
  ease: "bounce.out",
});

//  transImg   greenImg   nashImg  orangImg   grayImg

const timel = gsap.timeline({
  scrollTrigger: {
    trigger: ".grayImg",
    markers: true,
    start: "top 60%",
    end: "top top",
    toggleActions: "play reverse restart reverse",
  },
});
timel.from(".transImg", {
  x: -300,
  duration: 0.7,
  opacity: 0,
  ease: "bounce.out",
});
timel.from(".greenImg", {
  y: -300,
  duration: 0.5,
  opacity: 0,
  ease: "bounce.out",
});
timel.from(".nashImg", {
  y: 300,
  duration: 0.5,
  opacity: 0,
  ease: "bounce.out",
});
timel.from(".orangImg", {
  x: -300,
  duration: 0.4,
  opacity: 0,
  ease: "bounce.out",
});
timel.from(".grayImg", {
  x: -300,
  duration: 0.4,
  opacity: 0,
  ease: "bounce.out",
});

gsap.from(".circuleImg", {
  x: 400,
  y: -400,
  duration: 0.9,
  opacity: 0,
  rotate: 360,
  ease: "bounce.out",
  repeat: 1,
  scrollTrigger: {
    trigger: ".circuleImg",
    markers: true,
    start: "top 50%",
    end: "top 20%",
    toggleActions: "play reverse restart reverse",
  },
});
