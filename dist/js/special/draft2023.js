!function(){"use strict";var t={9:function(t,e){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=e,this.button=this.root.querySelector(".js-disclosure__button"),this.content=this.root.querySelector(".js-disclosure__content"),this.controlledElment=!1;var o=this.button.getAttribute("aria-controls");this.openLabel=this.button.getAttribute("data-label-open"),this.closeLabel=this.button.getAttribute("data-label-close"),o&&(this.controlledElment=this.root.querySelector("#".concat(o)))}var e,o;return e=t,(o=[{key:"init",value:function(){this.button.setAttribute("aria-expanded","false"),this.hideContent(),this.button.addEventListener("click",this.onClick.bind(this))}},{key:"showContent",value:function(){this.controlledElment&&this.controlledElment.classList.add("is-show")}},{key:"hideContent",value:function(){this.controlledElment&&this.controlledElment.classList.remove("is-show")}},{key:"toggleExpand",value:function(){"true"===this.button.getAttribute("aria-expanded")?(this.button.setAttribute("aria-expanded","false"),this.button.innerHTML="<span>".concat(this.openLabel,"</span>"),this.hideContent()):(this.button.setAttribute("aria-expanded","true"),this.button.innerHTML="<span>".concat(this.closeLabel,"</span>"),this.showContent())}},{key:"onClick",value:function(){this.toggleExpand()}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},774:function(t,e){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=e,this.spacer=this.root.querySelector(".js-floating-image__spacer"),this.image=this.root.querySelector(".js-floating-image__image")}var e,o;return e=t,(o=[{key:"init",value:function(){this.calc()}},{key:"calc",value:function(){this.elementHeight=this.root.offsetHeight,this.imageHeight=this.image.clientHeight;var t=this.elementHeight-this.imageHeight;this.spacer.style.height="".concat(t,"px")}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},226:function(t,e){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==o(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===o(r)?r:String(r)),i)}var r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.default=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.root=e,this.links=this.root.querySelectorAll("a"),this.currentUrlPath=window.location.pathname}var e,o;return e=t,(o=[{key:"init",value:function(){var t=this;this.links.forEach((function(e){var o=e.getAttribute("href");o===t.currentUrlPath||o===t.currentUrlPath+"/"?e.classList.add("is-current"):e.classList.remove("is-current")}))}}])&&n(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),t}()},650:function(t,e,o){function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}o.r(e);var r,a,l,s,c,u=(r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],a=function(){function t(e){var o=e.targetModal,i=e.triggers,r=void 0===i?[]:i,a=e.onShow,l=void 0===a?function(){}:a,s=e.onClose,c=void 0===s?function(){}:s,u=e.openTrigger,d=void 0===u?"data-micromodal-trigger":u,f=e.closeTrigger,h=void 0===f?"data-micromodal-close":f,v=e.openClass,m=void 0===v?"is-open":v,b=e.disableScroll,y=void 0!==b&&b,g=e.disableFocus,p=void 0!==g&&g,w=e.awaitCloseAnimation,E=void 0!==w&&w,S=e.awaitOpenAnimation,k=void 0!==S&&S,A=e.debugMode,j=void 0!==A&&A;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.modal=document.getElementById(o),this.config={debugMode:j,disableScroll:y,openTrigger:d,closeTrigger:h,openClass:m,onShow:l,onClose:c,awaitCloseAnimation:E,awaitOpenAnimation:k,disableFocus:p},r.length>0&&this.registerTriggers.apply(this,n(r)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var e;return(e=[{key:"registerTriggers",value:function(){for(var t=this,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(e){e.addEventListener("click",(function(e){return t.showModal(e)}))}))}},{key:"showModal",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation?this.modal.addEventListener("animationend",(function e(){t.modal.removeEventListener("animationend",e,!1),t.setFocusToFirstNode()}),!1):this.setFocusToFirstNode(),this.config.onShow(this.modal,this.activeElement,e)}},{key:"closeModal",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,t),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function t(){e.classList.remove(o),e.removeEventListener("animationend",t,!1)}),!1)}else e.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(t){this.modal=document.getElementById(t),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(t){if(this.config.disableScroll){var e=document.querySelector("body");switch(t){case"enable":Object.assign(e.style,{overflow:""});break;case"disable":Object.assign(e.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(t){(t.target.hasAttribute(this.config.closeTrigger)||t.target.parentNode.hasAttribute(this.config.closeTrigger))&&(t.preventDefault(),t.stopPropagation(),this.closeModal(t))}},{key:"onKeydown",value:function(t){27===t.keyCode&&this.closeModal(t),9===t.keyCode&&this.retainFocus(t)}},{key:"getFocusableNodes",value:function(){var t=this.modal.querySelectorAll(r);return Array.apply(void 0,n(t))}},{key:"setFocusToFirstNode",value:function(){var t=this;if(!this.config.disableFocus){var e=this.getFocusableNodes();if(0!==e.length){var o=e.filter((function(e){return!e.hasAttribute(t.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&e[0].focus()}}}},{key:"retainFocus",value:function(t){var e=this.getFocusableNodes();if(0!==e.length)if(e=e.filter((function(t){return null!==t.offsetParent})),this.modal.contains(document.activeElement)){var o=e.indexOf(document.activeElement);t.shiftKey&&0===o&&(e[e.length-1].focus(),t.preventDefault()),!t.shiftKey&&e.length>0&&o===e.length-1&&(e[0].focus(),t.preventDefault())}else e[0].focus()}}])&&function(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(t.prototype,e),t}(),l=null,s=function(t){if(!document.getElementById(t))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(t,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(t,'"></div>')),!1},c=function(t,e){if(function(t){t.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(t),!e)return!0;for(var o in e)s(o);return!0},{init:function(t){var e=Object.assign({},{openTrigger:"data-micromodal-trigger"},t),o=n(document.querySelectorAll("[".concat(e.openTrigger,"]"))),i=function(t,e){var o=[];return t.forEach((function(t){var n=t.attributes[e].value;void 0===o[n]&&(o[n]=[]),o[n].push(t)})),o}(o,e.openTrigger);if(!0!==e.debugMode||!1!==c(o,i))for(var r in i){var s=i[r];e.targetModal=r,e.triggers=n(s),l=new a(e)}},show:function(t,e){var o=e||{};o.targetModal=t,!0===o.debugMode&&!1===s(t)||(l&&l.removeEventListeners(),(l=new a(o)).showModal())},close:function(t){t?l.closeModalById(t):l.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=u),e.default=u}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},function(){var t=r(o(9)),e=r(o(226)),n=r(o(774)),i=r(o(650));function r(t){return t&&t.__esModule?t:{default:t}}document.addEventListener("DOMContentLoaded",(function(){i.default.init({disableScroll:!0}),document.querySelectorAll(".js-disclosure").forEach((function(e){new t.default(e).init()})),document.querySelectorAll(".js-navigation-current").forEach((function(t){new e.default(t).init()}))})),window.addEventListener("load",(function(){document.querySelectorAll(".js-floating-image").forEach((function(t){new n.default(t).init()}))}))}()}();