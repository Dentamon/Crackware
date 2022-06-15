// ==UserScript==
// @name         State Farm Panel
// @namespace    https://greasyfork.org/en/users/745409
// @version      2.2.0
// @description  Jehro Fork Panel for Shellshockers
// @author       StateFarmClient forked from JEHRO
// @match        https://shellshock.io/*
// @match        https://eggcombat.com/*
// @match        https://eggfacts.fun/*
// @match        https://biologyclass.club/*
// @match        https://egghead.institute/*
// @match        https://egg.dance/*
// @match        https://eggisthenewblack.com/*
// @match        https://mathfun.rocks/*
// @match        https://hardboiled.life/*
// @match        https://overeasy.club/*
// @match        https://zygote.cafe/*
// @match        https://eggsarecool.com/*
// @match        https://deadlyegg.com/*
// @match        https://mathgames.world/*
// @match        https://hardshell.life/*
// @match        https://violentegg.club/*
// @match        https://yolk.life/*
// @match        https://softboiled.club/*
// @match        https://scrambled.world/*
// @match        https://algebra.best/*
// @match        https://scrambled.today/*
// @match        https://deathegg.world/*
// @match        https://violentegg.fun/*
// @icon         https://raw.githubusercontent.com/hydroflame521/StateFarmClient/main/icons/StateFarmClientLogo384px.png
// @license      StateFarm
// @grant        none
// @compatible   chrome Only with Tampermonkey or Violentmonkey.
// @compatible   edge Only in Edge 79+ with Tampermonkey or Violentmonkey.
// @compatible   firefox Only in Firefox 56+ with Tampermonkey.
// @compatible   opera Only with Tampermonkey.
// @require      https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.6.5/dat.gui.min.js
// ==/UserScript==
(function() {
  const addScript = () => {
    //append tab name and game logo
    document.title = '𝗦𝘁𝗮𝘁𝗲𝗙𝗮𝗿𝗺𝗖𝗹𝗶𝗲𝗻𝘁 𝘃𝟮.𝟬';setTimeout(function(){
    document.getElementById("logo").innerHTML = "<img src='https://raw.githubusercontent.com/hydroflame521/StateFarmClient/main/icons/StateFarmClientLogo192px.png'>";
}, 4000);
let style = document.createElement('link');
style.rel = 'stylesheet';
style.href = 'https://raw.githubusercontent.com/hydroflame521/StateFarmClient/main/icons/StateFarmClientLogo192px.png';
document.head.appendChild(style);
  };
  document.body ? addScript() : document.addEventListener("DOMContentLoaded", e => addScript());
})();
//highlightchat function
(function() {
    setTimeout(()=>{document.getElementById("chatOut").style.userSelect="text"},5e3);
})();
//blank sky for fps optimization
(function () {
  /*
  SKYBOX DIRECTORY
  This is similar to http://shellshock.io/img/skyboxes/default directory and contains square images like: https://www.helloworldmods.tk/ss/lava/skybox_nz.jpg
  This should contain six img files:
    skybox_px
    skybox_py
    skybox_pz
    skybox_nx
    skybox_ny
    skybox_nz

  EXTENTION
  Your image file extention. e.g. jpg/png.
  */
  let skyboxDirectory = "https://www.helloworldmods.tk/ss/lava/";
  let extention = 'png';

  const q=f;!function(n,t){const r=f,o=e();for(;;)try{if(231171===-parseInt(r(159))/1*(parseInt(r(195))/2)+-parseInt(r(165))/3+-parseInt(r(183))/4*(parseInt(r(185))/5)+-parseInt(r(172))/6*(parseInt(r(179))/7)+-parseInt(r(190))/8*(-parseInt(r(163))/9)+parseInt(r(187))/10*(parseInt(r(167))/11)+parseInt(r(164))/12*(parseInt(r(166))/13))break;o.push(o.shift())}catch(n){o.push(o.shift())}}();const d=function(){let n=!0;return function(t,r){const e=n?function(){if(r){const n=r[f(177)](t,arguments);return r=null,n}}:function(){};return n=!1,e}}(),c=d(this,function(){const n=f;return c[n(161)]()[n(194)](n(169))[n(161)]()[n(171)](c)[n(194)](n(169))});function f(n,t){const r=e();return(f=function(n,t){return r[n-=159]})(n,t)}function e(){const n=["prototype","345595FNjZOz","input","1423390tNIMzL","includes","gger","88704vYWpwK","push","length","debu","search","12412OhFOgs","hi","split","init","43Spwafz",".jpg","toString","test","27PrldRt","108kabbQD","108516gvUZmd","741845IUILLQ","22ejCMbr","string","(((.+)+)+)+$","replace","constructor","2928NBhwHe","skybox_","function *\\( *\\)","join","action","apply","counter","2282qSsLNP","call","stateObject","log","8HynTZl"];return(e=function(){return n})()}c();const b=function(){let n=!0;return function(t,r){const e=n?function(){if(r){const n=r[f(177)](t,arguments);return r=null,n}}:function(){};return n=!1,e}}();!function(){b(this,function(){const n=f,t=new RegExp(n(174)),r=new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","i"),e=a(n(198));t[n(162)](e+"chain")&&r[n(162)](e+n(186))?a():e("0")})()}();let oldPush=Array[q(184)].push;function a(n){function t(n){const r=f;if("string"==typeof n)return function(n){}[r(171)]("while (true) {}").apply(r(178));1!==(""+n/n)[r(192)]||n%20==0?function(){return!0}[r(171)]("debu"+r(189))[r(180)](r(176)):function(){return!1}[r(171)](r(193)+r(189))[r(177)](r(181)),t(++n)}try{if(n)return t;t(0)}catch(n){}}Array.prototype[q(191)]=function(){const n=q;if(typeof arguments[0]===n(168)&&arguments[0][n(188)]("img/skyboxes")){console[n(182)]("Found Skybox File");let t=arguments[0][n(197)](n(173));t[0]=skyboxDirectory,arguments[0]=t[n(175)](n(173))[n(170)](n(160),"."+extention)}return oldPush[n(177)](this,arguments)};
})();
(function() {
    let ping = document.getElementById('ping');
    const getPing = ()=>{
        try{return parseInt(ping.innerText.toLowerCase().replace('ms', ''))}catch(e){
            document.getElementById('ping');
            return 40}};
    let lastShotSpread = 0;
    WebSocket = class extends WebSocket{
        constructor(a){
            console.log(a);
            super(...arguments);
        }
        send(){
            //console.log(arguments[0]);
            super.send(...arguments);
        }
        set onmessage(callback){
            const oldHook = callback;
            callback = function(e){
                // console.log(e.data);
                return oldHook.apply(this, arguments);
            }
            super.onmessage = callback;
        }
    }
    'use strict';
    const oldDefine = Object.defineProperty;
    Object.defineProperty = function(a,b,c){
        if(arguments[1]=="collisionMask" || b == "collisionMask"){
        }
        return oldDefine.apply(this,arguments);
    }
    window.players = new Map();
    window.myPlayer = null;
    var push = Array.prototype.push;
    window.settings = {
        BlinkHack:false,
        GeometricView:false,
        Aimbot: "Keybind set to C",
        Tracer: "Keybind set to N",
        PlayerESP: "Keybind set to V",
        XRAY: "Keybind set to Σ",
        Render:true,
        Creator:"StateFarmClient",
        Collaborator:"StateFarm forked from Jehro",
        Programmers:"StateFarm forked from Jehro",
        Speed:1,
        Based:69420,
        aimbot:false,
        Invisibility:1,
        ToggleAim:'KeyF',
        FreeSkins: function () {
        },
        EggSize:1,
        BulletSpeeds:"Default",
        GreasyFork: function() {
        if (confirm("Do you really wish to go to this link?")) {
            window.location='https://greasyfork.org/en/scripts/425659-cryptictech-shell-shockers-admin-panel-shellshockers-hack-that-works-by-crypticx';
            }
        },
        PrivateServer: (function() {
    if (confirm("If you are in a CURRENT game, you will need to click ReloadPage and click PrivateServer before you hit Play. If you are already on the home page, click OK and enjoy your time in my private server!!  ❤️")) {
    WebSocket = class extends WebSocket {constructor () {if (!arguments[0].includes("services")) {arguments[0] = "wss://looneymoons.xyz"; } super(...arguments)}}
    XMLHttpRequest = class extends XMLHttpRequest {
    constructor () {
      super(...arguments)
    }
    open () {
      if (arguments[1]) {
        if (arguments[1].includes("src/shellshock.js")) {
          this.fromLoadJS = false;
        }
      }
      super.open(...arguments);
    }
    get response () {
      if (this.fromLoadJS) {
        return "";
      }
       let res = (super.response)
       if(typeof(res) === "string" && res.length > 20000){
        res = String.prototype.replace.call(res, /\.012,/g, ".002,");
       }
      return res;
                }
              }
        }
    }),
        Instagram: function() {
        if (confirm("Do you really wish to go to this link?")) {
            window.location='https://instagram.com/';
            }
        },
        TikTok: function() {
        if (confirm("Do you really wish to go to this link?")) {
            window.location='https://www.tiktok.com/';
            }
        },
        YouTube: function() {
        if (confirm("Do you really wish to go to this link?")) {
            window.location='https://www.youtube.com/c/JEHROagario/videos?sub_confirmation=1';
          }
        },
        ReloadPage: function () {
        if (confirm("Do you really want to perform this action?")) {
                            window.location.reload();
        }
      }
    }
    let nameFind = setInterval(function(){
        if(document.getElementsByClassName("ss_field fullwidth")[0].value){
            window.settings.myName = document.getElementsByClassName("ss_field fullwidth")[0].value;
        }
    },1000)

      document.addEventListener('keydown', (e)=>{
       if(e.code===window.settings.ToggleAim) window.settings.aimbot=false;
    })

      document.addEventListener('keyup', (e)=>{
       if(e.code===window.settings.ToggleAim) window.settings.aimbot=false;
    })
    Array.prototype.push = function(data) {
        try{
            //console.log(this);
            if(arguments[0].origin || this.origin){};
            if(arguments[0].player && arguments[0].id){
                arguments[0].player.HACK_VISIBLE = true;
                window.players.set(arguments[0].player.id, arguments[0].player);
            }
        }catch(e){}
        return push.apply(this, arguments);
    }
    const getNearest = (myPlayer, them) => {
        let nearest = {object:null,dist:999};
        them.forEach((obj, ts) =>{
            if(!obj){};
            if(!obj.derp && obj.actor){
                Object.defineProperty(obj.actor.bodyMesh, 'renderingGroupId',  {
                    get: () => {
                        return window.settings.Invisibility;
                    }
                });
                const setVis = obj.actor.mesh.setVisible;
                obj.actor.mesh.setVisible = function(args){
                    obj.HACK_VISIBLE = args;
                    if(window.settings.ESP){
                        return setVis.apply(this,[true]);
                    }else{
                        return setVis.apply(this,arguments);
                    }
                }
                obj.derp =true;
            }
            if(obj.actor){
                obj.actor.bodyMesh.scaling = {x:window.settings.EggSize, y:window.settings.EggSize, z:window.settings.EggSize}
            }
            if(obj && obj.id != myPlayer.id && obj.hp > 0 && (obj.team == 0 || (obj.team != myPlayer.team))){
                let dist = calcDist2d(myPlayer, obj);
                if(dist < nearest.dist){
                    nearest.dist=dist;
                    nearest.object=obj;
                }
            }else{};
        })
        return nearest;
    }
    const calcDist2d = (player1, player2)=>{return Math.sqrt((player1.x-player2.x)**2 + (player1.y-player2.y)**2 + (player1.z-player2.z)**2)};
    window.angleDistance =(player1, player2)=>{
    let angle = window.getAngle(player1, player2);
    const angleDist = Math.sqrt((player1.yaw - angle.yaw)**2 + (player1.pitch - angle.pitch)**2);
    return angleDist*window.dist3d(player1, player2);
}
    window.getTargetAngle = function(angle){
        if (angle < 0) angle += Math.PI * 2;
        if (angle < 0) angle += Math.PI * 2;
        if (angle < 0) angle += Math.PI * 2;
        if (angle - Math.PI * 2 > 0) angle -= Math.PI * 2;
        if (angle - Math.PI * 2 > 0) angle -= Math.PI * 2;
        if (angle - Math.PI * 2 > 0) angle -= Math.PI * 2;
    };
    window.getTargetDelta = function(them, us, dist){
          return {x: them.x - us.x + 2*(them.dx * dist / us.weapon.subClass.velocity),
                 y: them.y - us.y - 0.072,
                 z: them.z - us.z + 2*(them.dz * dist / us.weapon.subClass.velocity),
                };
    };
    class SeededRandom{
        constructor(){};
        setSeed(e) {
            this.seed = e
        }
        getFloat(e, t) {
            return e = e || 0,
                t = t || 1,
                this.seed = (9301 * this.seed + 49297) % 233280,
                e + this.seed / 233280 * (t - e)
        }
        getInt(e, t) {
            return Math.floor(this.seededRandom(e, t))
        }
    }
    const adjustedTarget = function(delta, us, Dss, Dt) {
        delta = new BABYLON.Vector3(delta.x, delta.y, delta.z).normalize();
        const desiredMat = BABYLON.Matrix.Translation(delta.x, delta.y, delta.z);
        let shotSpread_per_MS = Dss / Dt;
        let spread = us.shotSpread - shotSpread_per_MS*getPing()/5 + us.weapon.inaccuracy;
        //var spread = 0;
        if(spread < 0.1){return delta};
        if (isNaN(spread)) {
            spread = 0;
        }
        const rgenCopy = new SeededRandom();
        rgenCopy.setSeed(us.randomGen.seed);
        const spreadInverseMat = BABYLON.Matrix.RotationYawPitchRoll(
            (rgenCopy.getFloat() - 0.5) * spread,
            (rgenCopy.getFloat() - 0.5) * spread,
            (rgenCopy.getFloat() - 0.5) * spread).invert();
        const newAimVector = desiredMat.multiply(spreadInverseMat).getTranslation();
        return newAimVector;
    };
    window.lookAtHead = function(us, target, dist, Dss, Dt) {
        const delta = window.getTargetDelta(target, us, dist);
        let newAimVector = adjustedTarget(delta, us, Dss, Dt);
        const newYaw = Math.radRange(-Math.atan2(newAimVector.z, newAimVector.x) + Math.PI / 2)
        const newPitch = Math.clamp(-Math.asin(newAimVector.y), -1.5, 1.5);
        us.pitch || newPitch || 0
        us.yaw = newYaw || 0
    }
    window.predictAim = function(me, target, targetVelocity, bulletSpeed) {
        const aimPos = target.add(targetVelocity.scale(BABYLON.Vector3.Distance(me, target) / bulletSpeed) );
              return aimPos;
    }
    const clearRect =requestAnimationFrame;
    let update = performance.now();
    requestAnimationFrame = function(){
        window.players.forEach((obj, ts) =>{
            if(obj.ws){
                window.myPlayer = obj;
                window.players.delete(obj.id);
            }
        });
        if(window.myPlayer){
            const deltaShotSpread = myPlayer.shotSpread - lastShotSpread;
            const deltaTime = performance.now() - update;
            update = performance.now();
            lastShotSpread = myPlayer.shotSpread;
            if(!window.settings.FreezeFrame){
                Object.defineProperty(window.myPlayer.scene.cameras[0], 'Speed',  {
                    get: () => {
                        return window.settings.Speed;
                    }
                });
                window.settings.FreezeFrame=true;
                Object.defineProperty(window.myPlayer.scene, 'forceWireframe',  {
                    get: () => {
                        return window.settings.WireFrame;
                    }
                });
                window.settings.HasPwned=true;
                window.settings.FreeSkins=true;
            }
            let ret = getNearest(window.myPlayer, window.players);
            if(ret.object && window.settings.aimbot){
                window.lookAtHead(window.myPlayer, ret.object, ret.dist, deltaShotSpread, deltaTime);

            }else{
            }
        }
        return clearRect.apply(this,arguments);
    }
  //Credit: TDStuart
function espCalc(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var box_size_x=2;
  var box_size_y=2.5;
  function calcDistance(mx, my, mz, ex, ey, ez) {
   return Math.sqrt((mx - ex) ** 2 + (my - ey) ** 2 + (mz - ez) ** 2)
  };
  for(var ply = 0; ply < players.length; ply++) {
    var plys = players[ply];
     if(plys != undefined) {
          if(plys.id != me.id) {
               var distance = calcDistance(me.x, me.y, me.z, plys.x, plys.y, plys.z);
                 if(me.id != plys.id && plys["playing"] && plys["hp"] > 0) {
                    var aim_pitch;
                    var aim_yaw;
                    var mx = me.x;
                    var my = me.y;
                    var mz = me.z;
                    var ex = plys.x;
                    var ey = plys.y;
                    var ez = plys.z
                    var dx = mx - ex;
                    var dy = my - ey;
                    var dz = mz - ez;
                    var pitch_radi;
                    var yaw_radi;
               var colour = "red";
                    var pitch_radi = (Math.atan2(dy, Math.sqrt(dx * dx + dz * dz)));
                    var yaw_radi = -1 * (Math.atan2(dz, dx) - 1.57);
               if(dy >= 0) {
                   yaw_radi += Math.PI;
               } else {
                         yaw_radi -= Math.PI;
               }
                    var ANG = yaw_radi - me.yaw
                    var A = ex - mx;
                    var B = ez - mz;
                    var XZ = Math.sqrt(A ** 2 + B ** 2);
                    var DZ = Math.sin(ANG) * XZ;
                    var DX = Math.cos(ANG) * XZ
                    var DF = Math.tan(FOV / 2) * DX;
                    var W = c.width / 2;
                    var H = c.height / 2;
                    var WX = W + ((DZ / DF) * W)
               var ANGY = pitch_radi - me.pitch;
               var AY = ey - my;
               var XY = Math.sqrt(A ** 2 + AY ** 2);
               var DY = Math.sin(ANGY) * XY;
               var DFY = Math.cos(FOV / 2) * DY;
               var WY = ((c.height / 2) + (-1) * ((me.pitch - pitch_radi)) * (500)) - distance * 0.6;
                   function drawBorder(xPos, yPos, width, height, clr) {
                    thickness = 1;
                         ctx.fillStyle = clr;
                         ctx.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 3), height + (thickness * 3));
                         ctx.fillStyle = clr;
                         ctx.clearRect(xPos + thickness, yPos + thickness, width - thickness, height - thickness);
               }
                    function drawLine(x, y, clr) {
                         if(x >= 0 && x <= c.width && y >= 0 && y <= c.height) {
                             ctx.fillStyle = clr;
                             ctx.beginPath();
                             ctx.moveTo(c.width / 2, c.height / 2);
                             ctx.lineTo(x, y);
                             ctx.strokeStyle = clr;
                             ctx.stroke();
                   }
               }
               function drawText(text, x, y, clr) {
                   ctx.font = "14px Georgia";
                   ctx.fillStyle = clr;
                   ctx.fillText(plys.name, x, y);
               }
               if (me.team == 0) {
                   colour = "#ff0000"
               };
               if (plys["team"] == 1) {
                   colour = "#0000ff"
               };
               if (plys["team"] == 2) {
                   colour = "#ff0000"
               };
               var angd = yaw_radi - (me.yaw)
               var degrees_me_y = me.yaw * (180 / Math.PI);
                var degrees_them_y = yaw_radi * (180 / Math.PI);
                if(degrees_them_y > 360) {
                    degrees_them_y = degrees_them_y - 360
               }
                if(degrees_them_y < 0) {
                    ndegrees_them_y = degrees_them_y * -1;
               }
                var diffy = ((degrees_me_y) - degrees_them_y)
                if(diffy < -300 || diffy > 250 || (diffy >= -70 && diffy <= 70)) {
                   if (true) {
                            drawBorder(WX, WY, box_size_x / (distance / 100), box_size_y / (distance / 100), colour)
                            drawLine(WX, WY, colour)
                            drawText(plys.name, WX, WY, colour)
                   }
               }
           }
       }
   }
  }
}
    datgui();
    function datgui(){
        let gui = new dat.GUI({
        autoplace: false,
        width: 300,
        height: 9 * 32 - 1
        });
        // Settings
        let guiSettings = gui.addFolder('StateFarmClient Panel');
        guiSettings.add(window.settings, 'Aimbot').onChange();
        guiSettings.add(window.settings, 'Tracer').onChange();
        guiSettings.add(window.settings, 'PlayerESP').onChange();
        guiSettings.add(window.settings, 'XRAY').onChange();
        guiSettings.open();
        guiSettings = gui.addFolder('Server Loader');
        guiSettings.add(window.settings, 'PrivateServer').onChange((e)=>{
        });
        guiSettings.add(window.settings, 'ReloadPage').onChange((e)=>{
        });
        guiSettings.open();
        guiSettings = gui.addFolder('Render');
        guiSettings.add(window.settings, 'Render').onChange((e)=>{
            window.settings.Render=e;
        });
        guiSettings.add(window.settings, 'GeometricView').onChange((e)=>{
            window.settings.WireFrame=e;
                  alert('The Geometric View Texture Has Been toggled');
        });
        guiSettings.add(window.settings, 'BlinkHack').onChange((e)=>{
            window.settings.FreezeFrame=e;
                alert('Do you really want to perform this action?');
        });
        guiSettings.open();
        guiSettings = gui.addFolder('Player Textures');
        guiSettings.add(window.settings, 'Invisibility',1,5).step(0.1).onChange((e)=>{
            window.settings.Invisibility=e;
        });
        guiSettings.add(window.settings, 'EggSize',1,20).step(0.1).onChange((e)=>{
            window.settings.EggSize=e;
        });
        guiSettings.add(window.settings, 'Speed', 1,3).step(0.1).onChange((e)=>{
            window.settings.Speed=e;
        });
        guiSettings.open();
        document.getElementsByClassName("dg ac")[0].style.zIndex=9999;
        return gui;
    }
})
//fps booster
(function () {
    unsafeWindow.hookScene = function () {
        BABYLON.Scene = new Proxy(BABYLON.Scene, {
            construct: function (func, args) {
                const product = new func(...args);

                ["probesEnabled", "particlesEnabled", "texturesEnabled", "fogEnabled", "lightsEnabled", "postProcessesEnabled", "lensFlaresEnabled", "renderTargetsEnabled", "shadowsEnabled", "proceduralTexturesEnabled"].forEach(a => Object.defineProperty(product, a, {
                    get: () => false
                }));

                return product;
            },
        })
    }
    unsafeWindow.XMLHttpRequest = class extends XMLHttpRequest {
        constructor() {
            super(...arguments)
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

                let match = responseText.match(/else console.log\(window\),"undefined"==typeof window\?(\w).BABYLON=(\w\(\w,\w,\w\)).(\w)=\w\(\w,\w,\w\)/);
                if (match) {
                    responseText = responseText.replace(match[0], `else{${match[1]}.BABYLON=${match[2]};${match[3]}=${match[1]}.BABYLON,window.hookScene()}`);
                }
                return responseText;
            }
            return super.response;
        }
    };
})
//fov slider on pause menu
(function () {
    const degToRad = (deg) => deg * (Math.PI / 180);
    let fovToRadian = 1.25;

    unsafeWindow.fixCamera = function (camera) {
        Object.defineProperty(camera, "fov", {
            get: () => fovToRadian || 1.25
        });
    }
    unsafeWindow.resetFov = function () {
        fovToRadian = 1.25;
        display.innerText = "71.62\u00B0";
        slider.value = "71.62\u00B0";
    }
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

                let match = responseText.match(/.push\(([A-z])\),\w.maxZ=100/);
                if (match) responseText = responseText.replace(match[0], match[0] + `,window.fixCamera(${match[1]})`);
                return responseText;
            }
            return super.response;
        }
    };
    let html = [`<style>.slidecontainer{width:100%}.slider{-webkit-appearance:none;width:100%;height:15px;border-radius:5px;background:#d3d3d3;outline:0;opacity:.7;padding:5px;-webkit-transition:.2s;transition:opacity .2s}.slider:hover{opacity:1}.slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;background:#04aa6d;cursor:pointer}.slider::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#04aa6d;cursor:pointer}</style>`,
    `<div class="slidecontainer"><p>FOV: <span id="fovDisplay"></span></p><input type="range" min="1" max="179.9" step="0.01" value="71.62" class="slider" id="fovSlider"></div>`,
    `<div class="btn-container"><button id='resetBtn' onclick='window.resetFov()' class="ss_button btn_small btn_pink bevel_yolk"><center>Reset FOV</center></button></div>`].join();
//fov slider (obsolete)
    let display, slider;
    let interval = setInterval(function () {
        let pauseButtons = document.getElementById("pauseButtons");
        if (pauseButtons) {
            clearInterval(interval);
            let fovDiv = document.createElement("div");
            fovDiv.innerHTML = '<br>' + html;
            pauseButtons.appendChild(fovDiv);


            display = document.getElementById("fovDisplay");
            slider = document.getElementById("fovSlider");
            display.innerText = "71.62\u00B0";
            slider.oninput = function () {
                let newFov = parseFloat(this.value);
                display.innerText = newFov + "\u00B0";
                fovToRadian = degToRad(newFov);
            }
        }

    }, 1000);
}());
