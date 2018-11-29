// Seconds
var waitTime = 120;
var waitInterval = null;
var textToImgElements = document.querySelectorAll("img[text]");

if (textToImgElements && textToImgElements.length) {
    for (var i = 0; i < textToImgElements.length; i++) {
        textToImgElements[i].src = generateImage(textToImgElements[i].getAttribute("text"), 'white');
    }
}

// Funcionamiento de tabs
var tabsLinks = document.querySelectorAll("[js-tab-trigger]");
for (var i = 0; i < tabsLinks.length; i++) {
    tabsLinks[i].addEventListener('click', function (event) {
        toggleTab(this)
    });
}

// Funcionamiento de botones play
var playButtons = document.querySelectorAll("[to-play]");
for (var i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', function (event) {
        playYT(this)
    });
}

function toggleTab(triggerElement) {
    var tabToShow = Number(triggerElement.getAttribute("js-tab-trigger")) - 1;
    var iframeUrl = document.querySelector(".player-wrap .active iframe").src;

    if(waitInterval) {
        
        var playBtn = document.querySelectorAll(".player-wrap div .play-btn:not([force-hide])")[tabToShow];
        document.getElementById("timeout-msg").classList.add('hidden');
        document.getElementById("timeout-seconds").innerHTML = 120;

        if (playBtn) {
            playBtn.style.display = 'block'
        }

        clearInterval(waitInterval);
    }

    document.querySelector("[js-tab-trigger].act").classList.remove("act");

    if (iframeUrl.indexOf(location.host) == -1) {
        document.querySelector(".player-wrap .active iframe").src = iframeUrl.replace("autoplay=1", "autoplay=0");
    }

    document.querySelector(".player-wrap .active").classList.remove("active");

    triggerElement.classList.add("act");
    document.querySelectorAll(".player-wrap div")[tabToShow].classList.add("active");
}

function playYT(triggerElement) {
    var videoKey = triggerElement.getAttribute("to-play");
    var waitAux = waitTime;

    document.getElementById("timeout-msg").classList.remove('hidden');
    waitInterval = setIntervalImmediately(function () {

        if (waitAux == 1) {
            triggerElement.nextSibling.nextSibling.src = "https://www.youtube.com/embed/" + videoKey + '?autoplay=1';
            document.getElementById("timeout-msg").classList.add('hidden');
            document.getElementById("timeout-seconds").innerHTML = 120;
            triggerElement.setAttribute('force-hide', true);
            return clearInterval(waitInterval);
        }

        waitAux--;
        document.getElementById("timeout-seconds").src = generateImage(String(waitAux) + 's', 'white');

    }, 1000);

    triggerElement.style.display = "none";
}


function generateImage(text, color) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var x = 0;
    var y = 15;
    var lineheight = 25;
    var lines = text.split('\n');
    var lineLengthOrder = lines.slice(0).sort(function (a, b) {
        return b.length - a.length;
    });
    color = color || '#000000';

    ctx.font = "14px Arial";
    ctx.textBaseline = "middle";
    ctx.canvas.width = ctx.measureText(lineLengthOrder[0]).width + 0;
    ctx.canvas.height = (lines.length * lineheight);
    ctx.fillStyle = color;
    ctx.font = "14px Arial";

    for (var i = 0; i < lines.length; i++) {
        ctx.fillText(lines[i], x, y + (i * lineheight));
    }

    return ctx.canvas.toDataURL();
}

function setIntervalImmediately(func, interval) {
    func();
    return setInterval(func, interval);
}