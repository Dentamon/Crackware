// ==UserScript==
// @name         **FREE SKINS** **WORKING OCTOBER 2021** (Shell Shockers.io)
// @version      0.3
// @description  Access to every skin in shell shockers? Here you go!
// @match        *://shellshock.io/*
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
 
                let match = responseText.match(/inventory\[[A-z]\].id===[A-z].id\)return!0;return!1/);
                if (match) responseText = responseText.replace(match[0], match[0] + `||true`);
                return responseText;
            }
            return super.response;
        }
    };
}())
