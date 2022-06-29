window.onload = (event) => {
    function dosome() {
        document.getElementById("str-butt").style.display = "none";
        document.getElementById("greet").style.display = "none";
        document.getElementById("stp-2").style.display = "block";
        document.getElementById("det-res").style.display = "block";
    }

    function detQuit() {
        document.getElementById("stp-2").style.display = "none";
        document.getElementById("det-res").style.display = "none";
        document.getElementById("res").style.display = "flex";
        document.getElementById("bye").style.display = "block";
    }

    let text = document.getElementById("pro-tit");
    let inTxt = text.innerText;
    let spltText = inTxt.split("");
    text.innerText = "";

    for (var i = 0; i < spltText.length; i++) {
        text.innerHTML += "<span>" + spltText[i] + "</span>";
    }
    
    let char = 0;
    let timer = setInterval(onTick, 75);
    function onTick() {
        const span = text.querySelectorAll("span")[char];
        span.classList.add("fade");
        char++;
        if (char === spltText.length) {
            complete();
            return;
        }
    }
    function complete() {
        clearInterval(timer);
        timer = null;
    }
};