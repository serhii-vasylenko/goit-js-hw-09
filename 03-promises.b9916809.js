var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("iQIUW");function u(e,t){return new Promise(((n,r)=>{Math.random()>.3&&n(`Fulfilled promise ${e} in ${t}ms`),r(`Rejected promise ${e} in ${t}ms`)}))}function l(e){o.Notify.success(e)}function i(e){o.Notify.failure(e)}({formContainer:document.querySelector(".form"),delayInput:document.querySelector('[name="delay"]'),stepInput:document.querySelector('[name="step"]'),amountInput:document.querySelector('[name="amount"]')}).formContainer.addEventListener("submit",(e=>{e.preventDefault();const{amount:t,delay:n,step:r}=e.target.elements;let o=Number(n.value),a=Number(n.value);for(let e=1;e<=t.value;e++)setTimeout((()=>{u(e,o).then((e=>l(e))).catch((e=>i(e))),o+=Number(r.value)}),a),a+=Number(r.value)}));
//# sourceMappingURL=03-promises.b9916809.js.map
