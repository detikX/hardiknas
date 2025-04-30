gsap.registerPlugin(ScrollTrigger, Observer);

const horizontalScroll = document.querySelector('.gsap-horizon');
// const carWheels = document.querySelectorAll('.wheel');
const carWheels = $('.sepeda')
const roda = $('.roda')
const [leftWheel, rightWheel] = roda

let hasMoving = false;
let isMobile = false;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    isMobile = true;
} else {
    isMobile = false
}


// let a = -6;
let counter = 0;
c = counter++

// if (horizontalScroll) {
Observer.create({
    target: horizontalScroll,
    type: 'wheel,touch,pointer',
    onChangeY: (self) => {
        // horizontalScroll.scrollLeft += isMobile ? self.deltaY * -2 : self.deltaY / 2;
        // carWheels[0].style.transform = 'rotate(-6deg)'

        console.log('leftWheel', self.target);
        // console.log('right', rightWheel);

        // console.log(roda[0].style);
        leftWheel.style.transform = 'rotate(' + counter++ * 3 + 'deg)'
        // roda[0].style.transform =
        //     'rotate(' + horizontalScroll.scrollLeft / 3 + 'deg)';
        rightWheel.style.transform =
            'rotate(' + counter++ * 3 + 'deg)';
        // console.log('dedi');
        // carWheels.style.transform = 'rotate(-3deg)'
        // console.log("delta:", self.deltaY * -2);
        // console.log(carWheels.style.transform = 'rotate(' + horizontalScroll.scrollLeft / 3 + 'deg)')
    },
});
// }
