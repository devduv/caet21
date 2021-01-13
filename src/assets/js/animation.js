const animate = document.getElementsByClassName('animate');
const animateStatic = document.getElementsByClassName('animate__static');

function showScroll() {
    console.log('showScroll', animate);
    const scrollTop = document.documentElement.scrollTop;
    let i = 0;
    while (i < animate.length) {
        console.log('showScroll', animate[i].offsetTop);
        let heightAnimate = animate[i].offsetTop;
        if (heightAnimate - 550 < scrollTop) {
            showContent(animate[i]);
        }
        i++;
    }
}

function showContent(animate) {
    animate.style.opacity = 1;
    animate.classList.add('showUp');
}

function showStatic() {
    let i = 0;
    while (i < animateStatic.length) {
        showContent(animateStatic[i]);
        i++;
    }
}

window.addEventListener('scroll', showScroll);