// main.js

export const ssStickyHeader = function() {
    const hdr = document.querySelector('.nav-container');
    if (!hdr) return;

    const triggerHeight = 0;

    window.addEventListener('scroll', function () {
        let loc = window.scrollY;

        if (loc > triggerHeight) {
            hdr.classList.add('sticky');
        } else {
            hdr.classList.remove('sticky');
        }
    });
};
