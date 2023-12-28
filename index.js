
const panel = document.querySelector('.panel');
const circle = document.querySelector('.circle');
const byimaan = document.querySelectorAll('.animate-h1 span');
var byimaanIsAnimating = false;

const animateByimaan = () => {

    if (!byimaanIsAnimating){
        byimaanIsAnimating = true;
        var t1 = gsap.timeline();

        t1.to(byimaan,{
            top: 0,
            duration: 1.1,
            stagger: .14,
            ease: 'power2.inOut'
        }).to(byimaan,{
            top: '-5vmax',
            duration: 1.2,
            delay: 1,
            stagger: .14,
            ease: 'power2.inOut',
        });
        byimaanIsAnimating = false;

    };

};

animateByimaan();

const handleClick = (event) => {

    const destinationVal = event.target.dataset.id;

    if (destinationVal){

        gsap.to(circle,{
            rotate: destinationVal,
            onComplete: animateByimaan
        });


        Array.from(panel.children).forEach( (child) => {
            if (child === event.target){
                child.style.opacity = 1;
            } else {
                child.style.opacity = .4;
            }
        });
    }
}

panel.addEventListener('click', handleClick)