window.addEventListener("mousemove", function (dets) {
  var rec = document.querySelector("#rectangle");

  var lola = gsap.utils.mapRange(
    0,
    window.innerHeight,
    200 + rec.getBoundingClientRect().height / 2,
    window.innerHeight - (200 + rec.getBoundingClientRect().height/ 2),
    dets.clientY
  );

  gsap.to(rec, {
    top: lola,
    ease: "power3", // Corrected ease value
  });

  var loli = gsap.utils.mapRange(
    0,
    window.innerWidth,
    200 + rec.getBoundingClientRect().width / 2,
    window.innerWidth - (200 + rec.getBoundingClientRect().width / 2),
    dets.clientX
  );

  gsap.to(rec, {
    left: loli,
    ease: "power3", // Corrected ease value
  });
});
