// ==UserScript==
// @name         Disable scope (SHELL SHOCKERS)
// @version      0.1
// @description  Removes the black borders that occur whenever you scope in!
// @match        *://shellshock.io/*
// @author       A3+++
// @run-at       document-start
// @grant        unsafeWindow
// @namespace    https://greasyfork.org/users/815159
// ==/UserScript==
(function () {
    unsafeWindow.XMLHttpRequest = class extends unsafeWindow.XMLHttpRequest {
        constructor() {
            super(...arguments);
        }
        open() {
            if (arguments[1] && arguments[1].includes("src/shellshock.js")) {
                this.scriptMatch = true;
            }
 
            super.open(...arguments);
        }
        get response() {
 
            if (this.scriptMatch) {
                let responseText = super.response;
 
                let matches = [responseText.match(/.push\(([A-z])\),\w.maxZ=100/), responseText.match(/this.crosshairs.position.z=2/)];
                if (matches[0]) responseText = responseText.replace(matches[0][0], matches[0][0] + `,window.fixCamera(${matches[0][1]})`);
                if (matches[1]) responseText = responseText.replace(matches[1][0], matches[1][0] + `;return`);
 
                return responseText;
            }
            return super.response;
        }
    };
 
    unsafeWindow.fixCamera = function (camera) {
        let border = document.getElementById("scopeBorder");
        Object.defineProperties(camera.viewport, {
            width: {
                set: () => border.style.display = "none",
                get: () => 1
            },
            x: {
                get: () => 0
            }
        });
    }
}())
