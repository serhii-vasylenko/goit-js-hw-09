var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var i=n("iQIUW");function r(e,t){return new Promise(((o,n)=>{const i=Math.random()>.3;setTimeout((()=>{i&&o({position:e,delay:t}),n({position:e,delay:t})}),t)}))}function l({position:e,delay:t}){i.Notify.success(`Fulfilled promise ${e} in ${t}ms`)}function a({position:e,delay:t}){i.Notify.failure(`Rejected promise ${e} in ${t}ms`)}({formContainer:document.querySelector(".form"),delayInput:document.querySelector('[name="delay"]'),stepInput:document.querySelector('[name="step"]'),amountInput:document.querySelector('[name="amount"]')}).formContainer.addEventListener("submit",(e=>{e.preventDefault();const{amount:t,delay:o,step:n}=e.target.elements;let i=Number(o.value);for(let e=1;e<=t.value;e++)r(e,i).then((({position:e,delay:t})=>l({position:e,delay:t}))).catch((({position:e,delay:t})=>a({position:e,delay:t}))),i+=Number(n.value)}));
//# sourceMappingURL=03-promises.1ea85c76.js.map
