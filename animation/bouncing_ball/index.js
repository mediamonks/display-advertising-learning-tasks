
gsap.registerPlugin(CustomEase, CustomBounce);

document.addEventListener("DOMContentLoaded", function() {
  
    window.onload = function() {
      
      window.requestAnimationFrame(function () {
        let duration = 1.5;
        const tl = gsap.timeline();

        CustomBounce.create("footballBounce", {strength: 0.7, squash: 3});
        tl.to("#football",  {duration, y: 335, ease:"footballBounce"})
          .to("#football", { duration, scaleY: 0.5, scaleX: 1.3, ease: "footballBounce-squash", transformOrigin: "bottom" }, 0)
          .to("#football", { duration, x: 600 }, '<')
        
        return tl;      
       });  
    };
});