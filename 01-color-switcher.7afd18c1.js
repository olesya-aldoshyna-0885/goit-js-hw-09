!function(){var t={body:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")},e=null;t.btnStart.addEventListener("click",(function(){t.btnStart.setAttribute("disabled",!0),e=setInterval((function(){return t.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.btnStop.addEventListener("click",(function(){clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.7afd18c1.js.map
