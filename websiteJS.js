function scrollToTarget() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToTarget2() {
    var target = document.getElementById("scrollToMe");
    target.scrollIntoView({ behavior: 'smooth' });
}
function scrollToTarget3() {
    var target = document.getElementById("projects");
    target.scrollIntoView({ behavior: 'smooth' });
}
function scrollToTarget4() {
    var target = document.getElementById("sec4");
    target.scrollIntoView({ behavior: 'smooth' });
}
const elementToToggle = document.querySelector('.scroller');
const body = document.querySelector('body');

function updateElementVisibility() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const rect = document.getElementById('name').getBoundingClientRect();
    const hideAt = rect.top + window.scrollY - 40;
    const rect2 = document.getElementById('scrollToMe').getBoundingClientRect();
    const showAt = rect2.top + window.scrollY - 55;
    const backgroundAt = rect2.top + window.scrollY - 55; 

    if (scrollTop > hideAt && scrollTop < showAt) {
        elementToToggle.classList.add('fade-out');
    } else {
        elementToToggle.classList.remove('fade-out');
    }

    if (scrollTop > backgroundAt) {
        elementToToggle.style.backgroundColor = '#1f1f1f'; // Background color when scrolled past 800px
    } else {
        elementToToggle.style.backgroundColor = ''; // Reset background color to default
    }
}

window.addEventListener('scroll', updateElementVisibility);
