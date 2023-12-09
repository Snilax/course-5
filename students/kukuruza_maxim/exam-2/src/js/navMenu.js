const header = $('.header');
let isHeaderBg = false;

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
};

const callback = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.boundingClientRect.top < -20 && !entry.isIntersecting && !isHeaderBg) {
            header.addClass('bg-header');
            isHeaderBg = true;

            return;
        }

        if (entry.boundingClientRect.top < -20 && entry.isIntersecting && isHeaderBg) {
            header.removeClass('bg-header');
            isHeaderBg = false;
        }
    })
};

const observer = new IntersectionObserver(callback, options);

const target = document.querySelector(".hero");

observer.observe(target);

export default header;
