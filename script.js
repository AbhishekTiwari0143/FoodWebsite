$(document).ready(function(){
  var $scramble = $(".scramble");
  $scramble.scramble(2800, 20, "alphabet", true);
})

var tl = gsap.timeline();
tl.to(".Loading", {
  opacity: 0,
  delay: 2,
})
.to(".loader",{
  opacity: 0,
  duration: 1,
  ease: "Expo.easeInOut",
})
.to(".loader", {
  y: "-100%",
  duration: 1,  
})

