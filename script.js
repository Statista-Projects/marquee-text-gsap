$(".marquee").each(function (index) {
  let track = $(this).find(".marquee_track");
  let items = $(this).find(".marquee_item");

  let tl = gsap.timeline({
    repeat: -1,
    defaults: { duration: 1, delay: 1, ease: "expo.inOut" }
  });

  items.each(function (index) {
    let distance = (index + 1) * -100;
    tl.to(".marquee_track", { yPercent: distance });
  });
  items.first().clone().appendTo(track);
});

//Based on https://www.youtube.com/watch?v=h3a8913zr8A
