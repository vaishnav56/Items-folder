const titles = gsap.utils.toArray('p');
const tl = gsap.timeline();

titles.forEach((title, i) => {
    const splitTitle = new splitTextJs(title);
    tl.
    from(splitTitle.chars, {
        opacity: 0,
    }, "<");
    to(splitTitle.chars, {
        opacity: 0,
    }, "<1");


})