import { Application } from 'https://cdn.jsdelivr.net/npm/@splinetool/runtime@latest';

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('spline');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/23EPQ1vjxWLy0OVs/scene.splinecode');

    const buyButton = document.getElementById('buy-button');
    const buyContent = buyButton.innerHTML;
    const buyHover = `<img src="assets/small-black.svg" alt="Plugs Logo" onclick="window.location='https:/\/www.example.com'">`;

    buyButton.addEventListener("mouseover", () => {
        buyButton.innerHTML = buyHover;
    });

    buyButton.addEventListener("mouseleave", () => {
        buyButton.innerHTML = buyContent;
    });

    const topHeading = document.getElementById('top-text')
    const topContent = topHeading.textContent
    
    let newContent = ''
    let startIndex = 0
    let stopIndex  = 0

    const fullLength = topContent.length

    function washHighlight() {
        if (stopIndex < fullLength) {
            stopIndex++
        } else if (startIndex < fullLength) {
            startIndex++
        } else {
            startIndex = 0
            stopIndex = 0
        }

        newContent = topContent.slice(0,startIndex) + '<span id="highlight">' + topContent.slice(startIndex,stopIndex) + '</span>' + topContent.slice(stopIndex, fullLength)

        topHeading.innerHTML = newContent
    }
    
    setInterval(washHighlight, 25)
});