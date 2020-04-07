const wrapper = document.querySelector(".wrapper");

function drawTile() {
    const tileDiv = document.createElement("div");
    tileDiv.classList.add("tile");

    for (let i = 0; i < 36; i++) {
        wrapper.appendChild(tileDiv.cloneNode(false));
    }
}

let tileCount;

function drawSVG() {
    let SVG;
    if (matchMedia("screen and (max-width: 768px), (max-height: 768px)").matches) {
        SVG = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.8402 1C22.2111 15.8733 21.798 32.1267 17.0468 47C15.8073 37.9107 7.81694 31.0938 1 30.8872C14.8405 25.5163 33.3661 25.9294 47 30.8872C38.3239 31.5069 31.5069 39.7699 30.6806 47C25.3097 30.2675 25.9294 15.2536 30.8872 1C31.1913 9.37526 39.9029 16.4995 47 16.8402C33.1595 22.2111 13.601 21.798 1 16.8402C7.61037 16.8402 16.427 9.88268 16.8402 1Z" stroke="#FF1E56" stroke-width="2.5"/></svg>`;
    } else if (matchMedia("screen and (max-width: 1024px), (max-height: 968px)").matches) {
        SVG = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.0385 1C30.5111 22.34 29.9363 45.66 23.3259 67C21.6015 53.9589 10.4844 44.1781 1 43.8817C20.2563 36.1756 46.0311 36.7683 65 43.8817C52.9289 44.7708 43.4444 56.6264 42.2948 67C34.8222 42.9925 35.6844 21.4508 42.5822 1C43.0053 13.0167 55.1258 23.2384 65 23.7272C45.7437 31.4333 18.5319 30.8406 1 23.7272C10.197 23.7272 22.4637 13.7447 23.0385 1Z" stroke="#FF1E56" stroke-width="3"/></svg>`;
    } else {
        SVG = `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.0578 1C45.2667 32.04 44.4044 65.96 34.4889 97C31.9022 78.0311 15.2267 63.8044 1 63.3733C29.8844 52.1644 68.5467 53.0267 97 63.3733C78.8933 64.6667 64.6667 81.9111 62.9422 97C51.7333 62.08 53.0267 30.7467 63.3733 1C64.0079 18.4788 82.1886 33.3468 97 34.0578C68.1156 45.2667 27.2978 44.4044 1 34.0578C14.7956 34.0578 33.1956 19.5378 34.0578 1Z" stroke="#FF1E56" stroke-width="4"/></svg>`;
    }

    for (let i = 0; i < 36; i++) {
        tileCount = wrapper.childNodes[i];
        tileCount.innerHTML = SVG;
    }
}

window.addEventListener("resize", function () {
    for (let i = 0; i < 36; i++) {
        tileCount = wrapper.childNodes[i];
        let SVGSelector = tileCount.childNodes[0];
        tileCount.removeChild(SVGSelector);
    }
    drawSVG();
});

drawTile();
drawSVG();