!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=o);var i=o("h6c0i");function r(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i&&t({position:e,delay:n}),o({position:e,delay:n})}),n)}))}function a(e){var n=e.position,t=e.delay;i.Notify.success("Fulfilled promise ".concat(n," in ").concat(t,"ms"))}function u(e){var n=e.position,t=e.delay;i.Notify.failure("Rejected promise ".concat(n," in ").concat(t,"ms"))}({formContainer:document.querySelector(".form"),delayInput:document.querySelector('[name="delay"]'),stepInput:document.querySelector('[name="step"]'),amountInput:document.querySelector('[name="amount"]')}).formContainer.addEventListener("submit",(function(e){e.preventDefault();for(var n=e.target.elements,t=n.amount,o=n.delay,i=n.step,l=Number(o.value),c=1;c<=t.value;c++)r(c,l).then((function(e){return a({position:e.position,delay:e.delay})})).catch((function(e){return u({position:e.position,delay:e.delay})})),l+=Number(i.value)}))}();
//# sourceMappingURL=03-promises.fae2e789.js.map
