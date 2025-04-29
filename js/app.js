



// (function ($) {
//     $(function () {


//         $(window).on('scroll', function () {
//             fnOnScroll();
//         });

//         $(window).on('resize', function () {
//             fnOnResize();
//         });


//         var agTimeline = $('.js-timeline'),
//             agTimelineLine = $('.js-timeline_line'),
//             agTimelineLineProgress = $('.js-timeline_line-progress'),
//             agTimelinePoint = $('.js-timeline-card_point-box'),
//             agTimelineItem = $('.js-timeline_item'),
//             agOuterHeight = $(window).outerHeight(),
//             agHeight = $(window).height(),
//             f = -1,
//             agFlag = false;

//         function fnOnScroll() {
//             agPosY = $(window).scrollTop();

//             fnUpdateFrame();
//         }

//         function fnOnResize() {
//             agPosY = $(window).scrollTop();
//             agHeight = $(window).height();

//             fnUpdateFrame();
//         }

//         function fnUpdateWindow() {
//             agFlag = false;

//             agTimelineLine.css({
//                 top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
//                 bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
//             });

//             f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
//         }

//         function fnUpdateProgress() {
//             var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;

//             i = agTop + agPosY - $(window).scrollTop();
//             a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
//             n = agPosY - a + agOuterHeight / 2;
//             i <= agPosY + agOuterHeight / 2 && (n = i - a);
//             agTimelineLineProgress.css({ height: n + "px" });

//             agTimelineItem.each(function () {
//                 var agTop = $(this).find(agTimelinePoint).offset().top;

//                 (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
//             })
//         }

//         function fnUpdateFrame() {
//             agFlag || requestAnimationFrame(fnUpdateWindow);
//             agFlag = true;
//         }


//     });
// })(jQuery);



//nama menteri

gsap.set("li > span", { transformOrigin: "0 50%" })
gsap.set("li:not(:first-of-type) span", { opacity: 0.2, scale: 0.8 })

const tl = gsap.timeline()
    .to("li:not(:first-of-type) span",
        { opacity: 1, scale: 1, stagger: 0.5 }
    )
    .to("li:not(:last-of-type) span",
        { opacity: 0.2, scale: 0.8, stagger: 0.5 }, 0)


ScrollTrigger.create({
    trigger: "h1",
    start: "center center",
    endTrigger: "li:last-of-type",
    end: "center center",
    pin: true,
    markers: false,
    animation: tl,
    scrub: true
})

/* learn to master all aspects of GSAP

unlock over 250 premium video tutorials to take you from beginner to pro

https://www.creativecodingclub.com/bundles/creative-coding-club
*/




gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panelx");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".containerx",
        pin: true,
        scrub: 1,

        end: () => "+=" + document.querySelector(".containerx").offsetWidth
    }
});



$("#play").click(function () {
    responsiveVoice.speak($(".contentx h4, .contentx p").text(), "Indonesian Male");
    // setTimeout(() => {
    //     $('html, body').animate({
    //         scrollTop: $(".bungkus").offset().top - 72
    //     }, 1000);

    // }, 12000);


})
$("#stop").click(function () {
    responsiveVoice.cancel();

});



//clock

// Function to update the clock hands
function updateClock() {
    const now = new Date();
    const hour = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    // Calculate degrees for each hand
    const hourDeg = (hour * 30) + (minute * 0.5); // 30 degrees per hour + 0.5 degrees per minute
    const minuteDeg = (minute * 6) + (second * 0.1); // 6 degrees per minute + 0.1 degrees per second
    const secondDeg = second * 6; // 6 degrees per second

    // Apply rotation to hands
    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock


function scrollIndicator() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // var height = $(".ref").height();
    var scrolled = (winScroll / height) * 100;
    console.log(scrolled);

    if (Math.round(scrolled) > 52 && Math.round(scrolled) < 60) {
        $(".sepeda").addClass('standing');

    } else {
        $(".sepeda").removeClass('standing');
    }
}



window.onscroll = function () { scrollIndicator(); };
