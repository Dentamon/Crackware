// ==UserScript==
// @name         StateFarm Client
// @namespace    http://tampermonkey.net/
// @version      2.6.3
// @description  Best Hacked Client for shell shockers
// @author       hydroflame521
// @match        *://shellshock.io/*
// @match        *://algebra.best/*
// @match        *://algebra.vip/*
// @match        *://biologyclass.club/*
// @match        *://deadlyegg.com/*
// @match        *://deathegg.world/*
// @match        *://eggcombat.com/*
// @match        *://egg.dance/*
// @match        *://eggfacts.fun/*
// @match        *://egghead.institute/*
// @match        *://eggisthenewblack.com/*
// @match        *://eggsarecool.com/*
// @match        *://geometry.best/*
// @match        *://geometry.monster/*
// @match        *://geometry.pw/*
// @match        *://geometry.report/*
// @match        *://hardboiled.life/*
// @match        *://hardshell.life/*
// @match        *://humanorganising.org/*
// @match        *://mathactivity.xyz/*
// @match        *://mathactivity.club/*
// @match        *://mathdrills.info/*
// @match         *://mathdrills.life/*
// @match        *://mathfun.rocks/*
// @match        *://mathgames.world/*
// @match        *://math.international/*
// @match        *://mathlete.fun/*
// @match        *://mathlete.pro/*
// @match        *://overeasy.club/*
// @match        *://scrambled.best/*
// @match        *://scrambled.tech/*
// @match        *://scrambled.today/*
// @match        *://scrambled.us/*
// @match        *://scrambled.world/*
// @match        *://shellshockers.club/*
// @match        *://shellshockers.site/*
// @match        *://shellshockers.us/*
// @match        *://shellshockers.world/*
// @match        *://softboiled.club/*
// @match        *://urbanegger.com/*
// @match        *://violentegg.club/*
// @match        *://violentegg.fun/*
// @match        *://yolk.best/*
// @match        *://yolk.life/*
// @match        *://yolk.rocks/*
// @match        *://yolk.tech/*
// @match        *://zygote.cafe/*
// @icon         https://raw.githubusercontent.com/hydroflame521/StateFarmClient/main/icons/StateFarmClientLogo384px.png
// @grant        none
// @run-at       document-start
// ==/UserScript==

window.XMLHttpRequest = class extends window.XMLHttpRequest {

	open( method, url ) {

		if ( url.indexOf( 'shellshock.js' ) > - 1 ) {

			this.isScript = true;

		}

		return super.open( ...arguments );

	}

	get response() {

		if ( this.isScript ) {

			const code = super.response;

			let babylonVarName,
				playersVarName,
				myPlayerVarName,
				sceneVarName,
				cullFuncName;

			try {

				babylonVarName = /new ([a-zA-Z]+)\.Vector3/.exec( code )[ 1 ];
				playersVarName = /([^,]+)=\[\],{}/.exec( code )[ 1 ];
				myPlayerVarName = /"fire":document.pointerLockElement&&([^&]+)&&/.exec( code )[ 1 ];
				sceneVarName = /createMapCells\(([^,]+),/.exec( code )[ 1 ];
				cullFuncName = /=([a-zA-Z_$]+)\(this\.mesh,\.[0-9]+\)/.exec( code )[ 1 ];

			} catch ( error ) {

				alert( 'Script failed to inject. Report the issue to the script developer.\n' + JSON.stringify( getVars(), undefined, 2 ) );

				return code;

			}

			function getVars() {

				return {
					babylonVarName,
					playersVarName,
					myPlayerVarName,
					playersVarName,
					sceneVarName,
					cullFuncName
				};

			}

			console.log( '%cInjecting code...', 'color: red; background: black; font-size: 2em;', getVars() );

			return code.replace( sceneVarName + '.render()', `
					window[ '${onUpdateFuncName}' ](
						${babylonVarName},
						${playersVarName},
						${myPlayerVarName}
					);
				${sceneVarName}.render()` )
				.replace( `function ${cullFuncName}`, `
					function ${cullFuncName}() {
						return true;
					}
				function someFunctionWhichWillNeverBeUsedNow` );

		}

		return super.response;

	}

};

let espEnabled = true;
let aimbotEnabled = true;
let showLines = true;
let aimbotOnRightMouse = false;
let packetFlyEnabled = false;
let meshTP = false;
let myCoords = false;

let aimbotBind = 'KeyC';
let espBind = 'KeyV';
let tracerBind = 'KeyN';
let helpBind = 'KeyH';
let rmhBind = 'KeyL';
let pflyBind = 'KeyG';
let meshtpBind = 'KeyM';
let myCoord = 'KeyJ';

var aimbotVar = aimbotBind;

const value = parseInt( new URLSearchParams( window.location.search ).get( 'shouldShowAd' ), 1 );
let shouldShowAd = false;

const temp = document.createElement( 'div' );

temp.innerHTML = `
<style>
.msg {
	position: absolute;
	left: 10px;
	bottom: 10px;
	color: #0E7697;
	font-weight: bolder;
	padding: 15px;
	animation: msg 0.5s forwards, msg 0.5s reverse forwards 3s;
	z-index: 999999;
	pointer-events: none;
}
@keyframes msg {
	from {
		transform: translate(-120%, 0);
	}
	to {
		transform: none;
	}
}
</style>
<div class="popup_window popup_lg roundme_lg msg" style="display: none;"></div>
` + '<div class="popup_window popup_lg centered roundme_lg info" style="z-index: 9999999;">' +
	( shouldShowAd ? `<h1 class="roundme_sm">Loading ad...</h1>` : `<button class="popup_close clickme roundme_sm" onclick="this.parentNode.style.display='none';"></button>
	<h1 class="roundme_sm">StateFarm Client</h1>
	<h4 style="text-align:center;">
		Keys:
		<br>
		[C] to toggle aimbot
		<br>
		[V] to toggle ESP
		<br>
		[N] to toggle ESP lines
		<br>
		[L] to toggle aimbot on <br>right mouse hold
		<br>
		[H] to show/hide help
		<br>
                [G] to toggle packet fly
		<br>
		[J] to toggle Coordinates (ACS)
		<br>
        <br>
		By StateFarmTeam
	</h4>
	<div id="btn-horizontal" class="f-center">
		<button class="ss_button btn_red bevel_red btn_sm" onclick="window.open('https://discord.gg/UTqWuQ7nq8', '_blank')">Discord</button>
	</div>
	<div id="btn-horizontal" class="f-center">
		<button class="ss_button btn_green bevel_green btn_sm" onclick="window.open('https://github.com/hydroflame521/StateFarmClient', '_blank')">Github</button>
	</div>` ) +
'</div>';

const msgEl = temp.querySelector( '.msg' );
const infoEl = temp.querySelector( '.info' );

window.addEventListener( 'DOMContentLoaded', async function () {

	while ( temp.children.length > 0 ) {

		document.body.appendChild( temp.children[ 0 ] );

	}

	if ( shouldShowAd ) {

		const url = new URL( window.location.href );

		url.searchParams.set( 'showAd', Date.now().toString( 16 ) );
		url.searchParams.set( 'scriptVersion', GM.info.script.version );

		window.location.href = 'https://zertalious.xyz?ref=' + new TextEncoder().encode( url.href ).toString();

	}

} );

let rightMouseDown = false;

function handleMouse( event ) {

	if ( event.button === 2 ) {

		rightMouseDown = event.type === 'pointerdown' ? true : false;

	}

}
    const shellMod = {
        interval: null,
        gui: null,
        storedData: {
            scene: null,
            camera: null,
            reticle: null,
            rainbowCrosshairEnabled: false,
            colorDelta: 0.89,
            colorIdx: 0,
            colors: [[], [], []],
            skyColor: "#FFFFFF",
            skyBoxAlpha: 1,
            useModules: false,
            fogDensity: 0.01,
            aimbotEnabledqq: true,

            aimbotVar: "KeyC",
            espVar: "KeyV",
            esplinesVar: "KeyN",
            aimbotrmhVar: "KeyL",
            helpVar: "KeyH",
            packetflyVar: "KeyG",
            coordsVar: "KeyJ",

            fogColor: "#FFFFFF",
        },
        replacements: {
            unlockSkins: {
                regex: /inventory\[[A-z]\].id===[A-z].id\)return!0;return!1/,
                replace: "rep = `${match[0]}||true`"
            },
            camera: {
                regex: /.push\(([A-z])\),\w.maxZ=100/,
                replace: "rep = `${match[0]},window.modHelper.camera=${match[1]}`"
            },
            scene: {
                regex: /([A-z][A-z])\.fogDensity=.01\);/,
                replace: "rep = `${match[0]}window.modHelper.scene=${match[1]};`"
            },
            crosshairs: {
                regex: /document.getElementById\("dotReticle"\)/,
                replace: "rep = `${match[0]};window.modHelper.reticle=this;${atob('ZG9jdW1lbnQudGl0bGU=')}=atob('U2hlbGwgU2hvY2tlcnMgfCBNb2RkZWQgYnkgQTMgfCBieSBCbHVlIFdpemFyZCBEaWdpdGFs');`"
            }
        },
        updateSky: function () {
            if (!this.storedData.scene) return;
            let skyMesh = this.storedData.scene.getMeshByID("skyBox");
            if (skyMesh) {
                if (!skyMesh.oldTexture) skyMesh.oldTexture = skyMesh.material.reflectionTexture;

                if (this.storedData.useSkyColor) {
                    skyMesh.material.emissiveColor.set(...this.hexToRgb(this.storedData.skyColor));
                    skyMesh.material.reflectionTexture = null;
                    skyMesh.material.alpha = this.storedData.skyBoxAlpha;

                } else {
                    skyMesh.material.emissiveColor.set(...this.hexToRgb("#000000"));
                    skyMesh.material.reflectionTexture = skyMesh.oldTexture;
                    skyMesh.material.alpha = 1;

                }
            }
        },
        updateFog: function () {
            if (!this.storedData.scene) return;

            this.storedData.scene.fogColor.set(...this.hexToRgb(this.storedData.fogColor));
            this.storedData.scene.fogDensity = this.storedData.fogDensity;
        },
        updateAimbotVar: function () {
           var aimbotVar = 'KeyC';
        },
        updateEspVar: function () {
          let espVar = this.storedData;
        },
        updateEsplinesVar: function () {
          let esplinesVar = this.storedData;
        },
        updateAimbotrmhVar: function () {
          let aimbotrmhVar = this.storedData;
        },
        updateHelpVar: function () {
          let helpVar = this.storedData;
        },
        updatePacketflyVar: function () {
          let packetflyVar = this.storedData;
        },
	updateCoordsVar: function () {
          let coordsVar = this.storedData;
        },
        updateAimbotEnabled: function () {
          if ( aimbotEnabled = true ) {
            let aimbotEnabled = false;
          }
          else if ( aimbotEnabled = false ) {
            let aimbotEnabled = true;
          }
        },
        hexToRgb: function (hex) {
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255] : [];
        },
        doHooks: function () {
            window.XMLHttpRequest = class extends window.XMLHttpRequest {
                constructor() {
                    super(...arguments);
                }
                open() {
                    if (arguments[1] && arguments[1].includes("shellshock.js")) this.scriptMatch = true;

                    super.open(...arguments);
                }
                get response() {

                    if (this.scriptMatch) {
                        let responseText = super.response;


                        let rep;
                        for (let key of Object.keys(shellMod.replacements)) {

                            let replacement = shellMod.replacements[key];
                            let match = responseText.match(replacement.regex);
                            if (match) responseText = responseText.replace(match[0], eval(replacement.replace));
                        }

                        return responseText;
                    }
                    return super.response;
                }
            };

        },
        createGUI: function () {
            this.gui = new guify({
                title: "<b>State Farm Client v2.6.3</b>",
                theme: "dark",
                align: "right",
                width: 300,
                barMode: "none",
                panelMode: "none",
                opacity: 0.90,
                root: window.container,
                open: true
            });

            this.gui.Register([{
                type: "folder",
                label: "Keybinds",
                open: true
            }/*, {
                type: "folder",
                label: "Modules",
                open: true
            }*/]);

            this.gui.Register([{
                type: "text",
                label: "Aimbot",
                object: this.storedData,
                property: "aimbotVar",
                onChange: () => this.updateAimbotVar()
            },{
                type: "text",
                label: "ESP",
                object: this.storedData,
                property: "espVar",
                onChange: () => this.updateEspVar()
            },{
                type: "text",
                label: "Tracers",
                object: this.storedData,
                property: "esplinesVar",
                onChange: () => this.updateEsplinesVar()
            },{
                type: "text",
                label: "RMH",
                object: this.storedData,
                property: "aimbotrmhVar",
                onChange: () => this.updateAimbotrmhVar()
            },{
                type: "text",
                label: "Help",
                object: this.storedData,
                property: "helpVar",
                onChange: () => this.updateHelpVar()
            },{
                type: "text",
                label: "PacketFly",
                object: this.storedData,
                property: "packetflyVar",
                onChange: () => this.updatePacketflyVar()
            },{
                type: "text",
                label: "ACS",
                object: this.storedData,
                property: "coordsVar",
                onChange: () => this.updateCoordsVar()
            }], {
                folder: "Keybinds"
            })
            this.gui.Register([{
                type: "checkbox",
                label: "Aimbot",
                object: this.storedData,
                property: "aimbotEnabledqq",
                onChange: () => this.updateAimbotEnabled()
            }], {
                folder: "Modules"
            });

            this.gui.panel.menuButton.style.opacity = 0.3;
        },
        loadMod: function () {
            const addScript = function () {
                let script = document.createElement('script');
                script.onload = function () { shellMod.createGUI() };
                script.src = "https://unpkg.com/guify@0.12.0/lib/guify.min.js";
                document.body.appendChild(script);
            }
            document.body ? addScript() : document.addEventListener("DOMContentLoaded", addScript);

            this.doHooks();

            function HSVtoRGB(h, s, v) {
                var r, g, b, i, f, p, q, t;
                i = Math.floor(h * 6);
                f = h * 6 - i;
                p = v * (1 - s);
                q = v * (1 - f * s);
                t = v * (1 - (1 - f) * s);
                switch (i % 6) {
                    case 0: r = v, g = t, b = p; break;
                    case 1: r = q, g = v, b = p; break;
                    case 2: r = p, g = v, b = t; break;
                    case 3: r = p, g = q, b = v; break;
                    case 4: r = t, g = p, b = v; break;
                    case 5: r = v, g = p, b = q; break;
                }
                return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
            }

            for (let wl = 0; wl < 100; wl++) {
                const { r, g, b } = HSVtoRGB(wl / 100.0 * 0.85, 1.0, 1.0);

                this.storedData.colors[0].push(r);
                this.storedData.colors[1].push(g);
                this.storedData.colors[2].push(b);
            }

            if (!this.interval) {
                this.interval = setInterval(function () {
                    if (shellMod.storedData.rainbowCrosshairEnabled && typeof extern !== "undefined" && extern.inGame) {
                        for (let i = 0; i < 4; i++) {

                            let ch = shellMod.storedData.reticle.crosshairs[i];
                            const idx = Math.mod(Math.floor(shellMod.storedData.colorIdx + 30 * i), 100);

                            const rgbString = `rgb(${shellMod.storedData.colors[0][idx]}, ${shellMod.storedData.colors[1][idx]}, ${shellMod.storedData.colors[2][idx]})`;
                            ch.style.backgroundColor = rgbString;
                            ch.style.color = rgbString;

                        }

                        shellMod.storedData.colorIdx += shellMod.storedData.colorDelta;
                        if (shellMod.storedData.colorIdx >= 100) shellMod.storedData.colorIdx = 0;
                    }
                    if (typeof extern !== "undefined" && typeof vueApp !== "undefined") {
                        if (!vueApp.isUpgraded || !extern.account.isSubscriber) { vueApp.setAccountUpgraded(true, ""); extern.account.isSubscriber = true; }
                    }
                }, 33);
            }

            function varEditor() {
                var aimbotVar = 'KeyC';
            }
        }

    }

    window.modHelper = {
        set scene(c) { shellMod.storedData.scene = c },
        set camera(c) { shellMod.storedData.camera = c },
        set reticle(c) { shellMod.storedData.reticle = c }
    }

    shellMod.loadMod();

window.addEventListener( 'pointerdown', handleMouse );
window.addEventListener( 'pointerup', handleMouse );

window.addEventListener( 'keyup', function ( event ) {

	if ( document.activeElement && document.activeElement.tagName === 'INPUT' ) {

		return;

	}
	switch ( event.code ) {

		case aimbotVar :

			aimbotEnabled = ! aimbotEnabled;

			showMsg( 'Aimbot', aimbotEnabled );

			break;

		case espBind :

			espEnabled = ! espEnabled;

			showMsg( 'ESP', espEnabled );

			break;

		case tracerBind :

			showLines = ! showLines;

			showMsg( 'ESP Lines', showLines );

			break;

		case helpBind :

			infoEl.style.display = infoEl.style.display === '' ? 'none' : '';

			break;

		case rmhBind :

			aimbotOnRightMouse = ! aimbotOnRightMouse;

			showMsg( 'RMH', aimbotOnRightMouse );

			break;
        case pflyBind :

            packetFlyEnabled = ! packetFlyEnabled;

            showMsg( 'Packet Fly', packetFlyEnabled );

            break;

	case myCoord :

            myCoords = ! myCoords;

            break;
	}

} );

function showMsg( name, bool ) {

	msgEl.innerText = name + ': ' + ( bool ? 'ON' : 'OFF' );

	msgEl.style.display = 'none';

	void msgEl.offsetWidth;

	msgEl.style.display = '';

}

let lineOrigin, lines;

const onUpdateFuncName = btoa( Math.random().toString( 32 ) );

window[ onUpdateFuncName ] = function ( BABYLON, players, myPlayer ) {

	if ( shouldShowAd !== false ) {

		return;

	}

	if ( ! myPlayer ) {

		return;

	}

	if ( ! lineOrigin ) {

		lineOrigin = new BABYLON.Vector3();
		linesArray = [];

	}

	lineOrigin.copyFrom( myPlayer.actor.mesh.position );

	const yaw = myPlayer.actor.mesh.rotation.y;

	lineOrigin.x += Math.sin( yaw );
	lineOrigin.z += Math.cos( yaw );
	lineOrigin.y += Math.sin( - myPlayer.pitch );

	for ( let i = 0; i < linesArray.length; i ++ ) {

		linesArray[ i ].playerExists = false;

	}

	for ( let i = 0; i < players.length; i ++ ) {

		const player = players[ i ];

		if ( ! player || player === myPlayer ) {

			continue;

		}

		if ( player.sphere === undefined ) {

			console.log( 'Adding sphere...' );

			const material = new BABYLON.StandardMaterial( 'myMaterial', player.actor.scene );
			material.emissiveColor = material.diffuseColor = new BABYLON.Color3( 1, 0, 0 );
			material.wireframe = true;

			const sphere = BABYLON.MeshBuilder.CreateBox( 'mySphere', { width: 0.5, height: 0.75, depth: 0.5 }, player.actor.scene );
			sphere.material = material;
			sphere.position.y = 0.3;

			sphere.parent = player.actor.mesh;

			player.sphere = sphere;

		}

		if ( player.lines === undefined ) {

			const options = {
				points: [ lineOrigin, player.actor.mesh.position ],
				updatable: true
			};

			const lines = options.instance = BABYLON.MeshBuilder.CreateLines( 'lines', options, player.actor.scene );
			lines.color = new BABYLON.Color3( 1, 0, 0 );
			lines.alwaysSelectAsActiveMesh = true;
			lines.renderingGroupId = 1;

			player.lines = lines;
			player.lineOptions = options;

			linesArray.push( lines );

			console.log( '%cAdding line...', 'color: green; background: black; font-size: 2em;' );

		}

		player.lines.playerExists = true;
		player.lines = BABYLON.MeshBuilder.CreateLines( 'lines', player.lineOptions );

		player.sphere.renderingGroupId = espEnabled ? 1 : 0;
		player.sphere.visibility = ( aimbotEnabled || espEnabled ) && myPlayer !== player && ( myPlayer.team === 0 || myPlayer.team !== player.team );

		player.lines.visibility = player.playing && player.sphere.visibility && showLines;

	}

	for ( let i = 0; i < linesArray.length; i ++ ) {

		if ( ! linesArray[ i ].playerExists ) {

			console.log( '%cRemoving line...', 'color: red; background: black; font-size: 2em;' );

			linesArray[ i ].dispose();
			linesArray.splice( i, 1 );

		}

	}

    if ( packetFlyEnabled ) {

            const xm = myPlayer.actor.mesh.position.x;
            const ym = myPlayer.actor.mesh.position.y;
            const zm = myPlayer.actor.mesh.position.z;

            myPlayer.actor.mesh.position.y = myPlayer.actor.mesh.position.y + 1;

        }

    if ( myCoords ) {

	    const konx = myPlayer.actor.mesh.position.x;
            const kony = myPlayer.actor.mesh.position.y;
            const konz = myPlayer.actor.mesh.position.z;

            const fonx = Number((konx * 100).toFixed(0));
            const fony = Number((kony).toFixed(0));
            const fonz = Number((konz * 100).toFixed(0));

            const personalCoordinate = `${fonx}, ${fony}, ${fonz}`;

           var button = document.createElement("Button");
              button.innerHTML = `${personalCoordinate}`;
              button.style = "top:1%;left:46%;position:absolute;z-index:99999;padding:20px;background-color:#5EBAD9;border:2px;border-radius:12px;font-weight:bolder;position:absolute;";
             document.body.appendChild(button);
             setTimeout(() => { document.body.removeChild(button); }, 2);

        }

	if ( aimbotEnabled && ( aimbotOnRightMouse ? rightMouseDown : true ) && myPlayer.playing ) {

		let minDistance = Infinity;
		let targetPlayer;

		for ( let i = 0; i < players.length; i ++ ) {

			const player = players[ i ];

			if ( player && player !== myPlayer && player.playing && ( myPlayer.team === 0 || player.team !== myPlayer.team ) ) {

				const distance = Math.hypot( player.x - myPlayer.x, player.y - myPlayer.y, player.z - myPlayer.z );

				if ( distance < minDistance ) {

					minDistance = distance;

					targetPlayer = player;

				}

			}

		}

		if ( targetPlayer ) {

			const x = targetPlayer.actor.mesh.position.x - myPlayer.actor.mesh.position.x;
			const y = targetPlayer.actor.mesh.position.y - myPlayer.actor.mesh.position.y;
			const z = targetPlayer.actor.mesh.position.z - myPlayer.actor.mesh.position.z;

			myPlayer.yaw = Math.radAdd( Math.atan2( x, z ), 0 );
			myPlayer.pitch = - Math.atan2( y, Math.hypot( x, z ) ) % 1.5;

		}

	}

}

delete localStorage[ 'lastVersionPlayed' ];
