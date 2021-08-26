
 
window.onload = function () {
  let duration = 1.5;
  const tl = gsap.timeline();


  CustomBounce.create("footballBounce", { strength: 0.77, squash: 5 });
  
  tl
    .set('#football', { top: -15,  left: 45})
    .from('.content', { duration: 0.5, autoAlpha: 0 }) 
    .to("#football", { duration: duration, y: 340, ease: "footballBounce" }, 'bounce')
    .to("#football", { duration: duration, scaleY: 0.5, scaleX: 1.3, ease: "footballBounce-squash", transformOrigin: "bottom" }, 'bounce')
    .to("#football", { duration: duration, x: 600 }, 'bounce')    

  GSDevTools.create();
  return tl;  
}
