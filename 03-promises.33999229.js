var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");const l={formEl:document.querySelector(".form"),delayInputEl:document.querySelector('[name="delay"]'),stepInputEl:document.querySelector('[name="step"]'),amountInputEl:document.querySelector('[name="amount"]')};function u({position:e,delay:t}){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n(`✅ Fulfilled promise ${e} in ${t}ms`):o(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}l.formEl.addEventListener("submit",(function(e){e.preventDefault();let t=Number(l.delayInputEl.value),n=Number(l.stepInputEl.value),o=Number(l.amountInputEl.value);for(let e=1;e<=o;e+=1)u({position:e,delay:t}).then((e=>r.Notify.success(e))).catch((e=>r.Notify.failure(e))),t+=n;setTimeout((()=>{l.formEl.reset()}),t)}));
//# sourceMappingURL=03-promises.33999229.js.map
