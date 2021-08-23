
gsap.registerPlugin(CustomEase, CustomBounce, MorphSVGPlugin);

document.addEventListener("DOMContentLoaded", function() {
  
    window.onload = function() {
      
      window.requestAnimationFrame(function () {
        let duration = 1.6;
        gsap.defaults({
          ease: "power2.in", 
          duration: duration,
          yoyo: true,
          repeat: -1
        });

        const tl = gsap.timeline();

          tl.set(".ball", {
            transformOrigin: "50% 50%",
            x: 71,
            y: -5
          });

          tl.set(".ball_shape", {
            transformOrigin: "50% 50%"
          });
        
        // let bouncePath = MorphSVGPlugin.pathDataToBezier("#animationPath");

        // CustomBounce.create("footballBounce", { strength: 0.75, squash: 4});
        // tl.to("#football", {y: 350, ease: "footballBounce" }, 'bounce')
        //   .to("#football", {scaleY: 0.5, scaleX: 1.3, ease: "footballBounce-squash", transformOrigin: "bottom" }, 'bounce')
        //   .to("#football", {x: 600 }, 'bounce')
        //   .to(".ball_shape", {
        //     x: 580,
        //   force3D: true,
        //   rotation: "+=360",
        //   repeat: 1.00125,
        //   ease: Power0.easeNone
        //   }, "bounce")
        
        GSDevTools.create();

  

       /* ball bounce up */
        tl
        .to("#football", 0.5, {
        transformOrigin: "50% 50%",
        y: -5,
        ease: Circ.easeOut
      }, "bounce")

      /* ball bounce down */
      .to("#football", 0.4, {
        transformOrigin: "50% 50%",
        y: 330,
        ease: Circ.easeIn
      }, "bounce2")

      /* ball squash */
      .to("#football", 0.15, {
        transformOrigin: "50% 100%",
        scaleX: 1.3,
        scaleY: 0.5,
        ease: Power1.easeInOut
      }, "bounce3-=0.04")
      .to(".ball_shape", {
            x: 580,
          force3D: true,
          rotation: "+=360",
        repeat: 1.00125,
          yoyo: false,
          ease: Power0.easeNone
          }, "bounce")

     
        
      return tl
        
       });  
    };
});