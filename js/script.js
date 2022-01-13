window.addEventListener('DOMContentLoaded', (event) => {

  gsap.registerPlugin(MotionPathPlugin)

  const localMap = {x: 0, y: 0}
  const trainJs = document.querySelector('.train_js')

  const mapPathOne = document.querySelector('.map-path-1')
  const mapPathTwo = document.querySelector('.map-path-2')

  gsap.to('.train_js', {
    motionPath: {
      path: document.querySelector('.map-path-1'),
      align: '.map-path-1',
      // center
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      // start from
      start: 0,
      end: 1
    },
    duration: 2,
    ease: "power1.inOut"
  })

  let p = MotionPathPlugin.convertCoordinates(mapPathOne, mapPathTwo, localMap);

  // gsap.to(trainJs, {
  //   x: p.x,
  //   y: p.y
  // })
});