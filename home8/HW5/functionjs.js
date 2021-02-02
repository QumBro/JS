const textA = document.querySelectorAll('a');

textA.forEach(element => {
    let TextHref = `  (${element.getAttribute("href")})`;
    let text = element.textContent;
    element.addEventListener('mouseenter', () => element.innerText = text + TextHref);
});
