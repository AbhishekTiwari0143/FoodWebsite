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
},
"up"
)
.to(
  ".svg", {
    opacity: 1,
    delay: -1.7,
    ease: "Expo.easeInOut",
  },
  "donut"
)
.to(
  "#dotted", {
    opacity: 1,
    delay: -1.8,
    ease: "Expo.easeInOut",
  },
  "donut"  
)
.to(
  "#donut", {
    opacity: 1,
    scale: 1,
    delay: -1.4,
    ease: "Expo.easeInOut",
    rotaionY: "+=15",
    rotaionX: "+=15",
    rotaionZ: "+=15",
    duration: 3,
  },
  "up"
)
.from(
  "#letter-1, #letter-2, #letter-3, #letter-4, #letter-5, #letter-6",{
    opacity: 1,
    duration: 1, 
    scale: 0,
    top: "40%",
    left: "47%",
  },
  "up"
);


