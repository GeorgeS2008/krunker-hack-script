// ==UserScript==
// @name Krunker hacks by Bōken Party, lazyProgramma
// @description   The most advanced krunker cheat
// @version       1
// @author        Bōken Party, lazyProgramma
// @icon          https://media.giphy.com/media/7FrOU9tPbgAZtxV5mb/giphy.gif
// @include       /^https?\:\/\/krunker\..*\/.*$/
// @include       /^https?\:\/\/.*.browserfps\..*\/.*$/
// @exclude       *://krunker.io/editor*
// @exclude       *://krunker.io/social*
// @run-at        document-start
// @grant         none
// @noframes
// ==/UserScript==

//Basically the start of the script, using the variable names
//Krunker hacks, made by lazyProgramma
document.title = "Boken party lazyProgramma hacks";
(function(lazyProgramma, bokenParty) {
    //Creates the function called log, also used in the code later on to make the hacks
    function Log() {
        this.clash = (str, args = []) => this.log('info', str, args);
        this.royale = (str, args = []) => this.log('warn', str, args);
        this.boken = (str, args = []) => this.log('error', str, args);
        this.log = (level, str, args) => {
                        /*Incase if you don't know what these are, these are krunker hacks and use them at your own risk as you can get banned.
            If you have already gotten banned then reset your router.
            To reset your router, you must turn it off, wait 5 minutes then turn it back on as krunker ip bans you according to your ip.
            When you turn your router back on, your ip would have changed so you can play again just like normal!
            Another thing that you could try and do is to manually change your static ip on your computer.
            You can do this by going on Control panel>
            Network and sharing centre>
            Click on the hyperlink that says either ethernet or internet>
            Properties>Double click on the thing that says "Internet protocol version 4 (TCP /IPV4)>
            Change "obtain the IP address automatically" to "Use the following IP address">
            Open command prompt and type in ipconfig and if youre using ethernet, go to where it says ethernet in ethernet and find all the information into the static ip changing.
            Remember to tick the box that says "validate settings upon exit" once you finish".
            If it says that microsoft is checking for problems after then close it and if you can't connect then change the ip back to "obtain the IP address automatically"
            */
            documemt.title("Krunker, but it's hacked by lazyProgramma (boken party)")
            let colours = [];
            switch(level) {
                case 'info':colours=["#07a1d5", "#6e07d5"];break;
                case 'error':colours=["#d50707", "#d53a07"];break;
                case 'warn':colours=["#d56e07", "#d5d507"];break;
            }
            //Displays text in the console
            console.log('%c '.concat('[ ', level.toUpperCase(), ' ] '), [
                `background: linear-gradient(${colours[0]}, ${colours[1]})`
                , 'border: 1px solid #3E0E02'
                , 'color: white'
                , 'display: block'
                , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
                , 'box-shadow: 0 1px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
                , 'line-height: 12px'
                , 'text-align: center'
                , 'font-weight: bold'
            ].join(';'))
            if (args.length) console.log(str, args);
            else console.log(str);
        }
        //Assigns the variable log to a new log. The log function is defined above.
    } var logs = new Log();

    //Creates a class called "Boken" with settings defined and bokenParty assigned as this to add some spirit to the script I guess!
    class Boken {
        constructor() {
            bokenParty = this;
            console.dir(this + " directory");
            this.settings = Object.assign({}, {
                aimbot: 1,
                superSilent: true,
                aimbot2: true,
                check1: false,
                zoom_of_weapon: 1.0,
                wallbangs: true,
                alwaysAim: false,
                hack_of_pitch: 0,
                automatic_reload: false,
                auto_bunnyhop: false,
                check_of_range: false,
                bullet_trail: false,
                aimFrameSpin: 10,
                animatedBillboards: false,
                ESP: 1,
                espFontSize: 10,
                tracers: false,
                gui_button: true,
                v_Aim: false,
                inv_Aim: false,
                force_loud: false,
                bhop: 0,
                spinny_Shooty: false,
                target_Mark: true,
                yay_skinnies: false,
                offset_of_aim: 0,
                /*
                The above 2 lines of comment are optional and would do the same things as if they were there or not there
                Donations: false,
                Donations2: false,
                */
                noiseofaim: 0,
                ingamehotkeys: true,
                antikick: true,
                fovbox: false,
                FOVBOXD: true,
                fovBoxSize: 1,
                encrypted: false,
                HA: false,
                HS: false,
                HM: false,
                HNC: false,
                HCB: false,
                chams: false,
                CC: 1,
                wireframe: false,
                copiedCSS: true,
                customCSS: "",
                TC: false,
                AN: false,
                chamsInterval: 500,
                PMT: false,
                FNO: false,
                AR: 0,
            });

            //Assigns this (user defined variable).state to the following integers, bool values and a new Set
            this.state = Object.assign({}, {
                BAO: true,

                QCCS: true,

                SF: 0,
                pK: new Set(),

                sC: 0,

                aT: 0,
                //Nametags set to false
                nT: false,
                //Frames set do 0
                frame: 0
            });
            //Assigns this.rainbow to 0 (starting from 0, to change colour)
            this.rainbow = 0;
            this.colors = {
                White: "#FFFFFF",
                Black: "#000000",
                Purple: "#9400D3",
                Pink: "#FF1493",
                Blue: "#1E90FF",
                dark_blue: "#0000FF",
                Aqua: "#00FFFF",
                Green: "#008000",
                Lime: "#7FFF00",
                Orange: "#FF8C00",
                Yellow: "#FFFF00",
                Red: "#FF0000",
            }
            this.rajariya = Symbol("rajariya");
            //sets this.GUI to an empty list ready for variables and other things to be stored into it
            this.GUI = {};
            try {
                this.load();
            } catch (e) {
                console.error(e);
                console.trace(e.stack);
            }
        }

        load() {

            this.defines();
            localStorage.kro_setngss_json ? Object.assign(this.settings, JSON.parse(localStorage.kro_setngss_json)) :
            localStorage.kro_setngss_json = JSON.stringify(this.settings);
            this.createListeners();
            this.hooking();
        }

        isType(item, type) {
            return typeof item === type;
        }

        isDefined(item) {
            return !this.isType(item, "undefined") && item !== null;
        }

        objectHas(obj, arr) {
            return arr.some(prop => obj.hasOwnProperty(prop));
        }
        createElement(type, html, id) {
            let newElement = document.createElement(type)
            if (id) newElement.id = id
            newElement.innerHTML = html
            return newElement
        }

        getVersion() {
            return this.version
        }

        Bōken() {
            if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
                return true;
            }
            if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
                return true;
            }

            if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Bōken') >= 0) {
                return true;
            }

            return false;
        }

        //sets the function saveAs to the following predefined functions and inside the saveAs, el.download is set to the variable known as name
        saveAs(name, data) {
            let blob = new Blob([data], {
                type: 'text/plain'
            });
            let el = window.document.createElement("a");
            el.href = window.URL.createObjectURL(blob);
            el.download = name;
            window.document.body.appendChild(el);
            el.click();
            window.document.body.removeChild(el);
        }

        saveScript() {
            this.fetchScript().then(script => {
                this.saveAs("game_" + this.getVersion() + ".js", script)
            })
        }



        async fetchScript() {
            const data = await this.request("https://krunker.io/social.html", "text");
            const buffer = await this.request("https://krunker.io/pkg/krunker." + /\w.exports="(\w+)"/.exec(data)[1] + ".vries", "arrayBuffer");
            const array = Array.from(new Uint8Array(buffer));
            const xor = array[0] ^ '!'.charCodeAt(0);
            return array.map((code) => String.fromCharCode(code ^ xor)).join('');
        }
        async request(url, type, opt = {}) {
            return fetch(url, opt).then(response => {
                if (!response.ok) {
                    throw new Error("Network response from " + url + " was not ok, made by Bōken Party")
                }
                return response[type]()
            })
        }

        async waitFor(test, timeout_ms = 2e4, doWhile = null) {
            let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
            return new Promise(async (resolve, reject) => {
                if (typeof timeout_ms != "number") reject("Timeout argument not a number in waitFor(selector, timeout_ms)");
                let result, freq = 100;
                while (result === undefined || result === false || result === null || result.length === 0) {
                    if (doWhile && doWhile instanceof Function) doWhile();;
                    if (timeout_ms % 10000 < freq) console.log("waiting for: ", test);
                    if ((timeout_ms -= freq) < 0) {
                        console.log("Timeout : ", test);
                        resolve(false);
                        return;
                    }
                    await sleep(freq);
                    result = typeof test === "string" ? Function(test)() : test();
                }
                console.log("Passed : ", test);
                resolve(result);
            });
        };

        async hooking() {
            await this.waitFor(_ => this.isDefined(this.socket))
            if (!this.isDefined(this.socket)) location.assign(location.origin);
            this.socket.send = new Proxy(this.socket.send, {
                apply(target, that, args) {
                    if (args[0] === "en") {
                        that.skinCache = {
                            main: args[1][2][0],
                            secondary: args[1][2][1],
                            hat: args[1][3],
                            body: args[1][4],
                            knife: args[1][9],
                            dye: args[1][14],
                            waist: args[1][17],
                        }
                    }
                    return Reflect.apply(...arguments);
                }
            })
            this.socket._dispatchEvent = new Proxy(this.socket._dispatchEvent, {
                apply(target, that, args) {
                    if (bokenParty.settings.yay_skinnies && that.skinCache && args[0] === "0") {
                        let pInfo = args[1][0];
                        let pSize = 38;
                        while (pInfo.length % pSize !== 0) pSize++;
                        for (let i = 0; i < pInfo.length; i += pSize) {
                            if (pInfo[i] === that.socketId || 0) {
                                pInfo[i + 12] = [that.skinCache.main, that.skinCache.secondary];
                                pInfo[i + 13] = that.skinCache.hat;
                                pInfo[i + 14] = that.skinCache.body;
                                pInfo[i + 19] = that.skinCache.knife;
                                pInfo[i + 24] = that.skinCache.dye;
                                pInfo[i + 33] = that.skinCache.waist;
                            }
                        }
                    }

                    return target.apply(that, args);
                }
            })

            await this.waitFor(_ => this.isDefined(this.overlay))
            this.ctx = this.overlay.canvas.getContext('2d');
            this.overlay.render = new Proxy(this.overlay.render, {
                apply(target, that, args) {
                    ["scale", "game", "controls", "renderer", "me"].forEach((item, index) => {
                        bokenParty[item] = args[index]
                    });
                    Reflect.apply(...arguments);
                    if (bokenParty.me && bokenParty.ctx) {
                        bokenParty.ctx.save();
                        bokenParty.ctx.scale(bokenParty.scale, bokenParty.scale);
                        bokenParty.render();
                        bokenParty.ctx.restore();

                        if (!bokenParty.me.procInputs[bokenParty.rajariya]) {
                            bokenParty.me.procInputs = new Proxy(bokenParty.me.procInputs, {
                                apply: function(target, that, [input, game, recon, lock]) {
                                    if (that) bokenParty.inputs(input);
                                    return target.apply(that, [input, game, recon, lock]);
                                },
                                get: function(target, key) {
                                    return key === bokenParty.rajariya ? true : Reflect.get(target, key);
                                },
                            })
                        }
                        //Wallbangs hack
                        bokenParty.game.map.manager.objects.filter(x => {
                            return x.penetrable
                        }).map((obj, index, array) => {
                            obj.transparent=bokenParty.settings.wallbangs;
                        });
                    }
                }
            })

            this.cleanGUI();
            this.customCSS();
            await this.waitFor(_ => this.isDefined(window.windows));
            this.initGUI();
        }

        defines() {
            const $origSkins = Symbol("origSkins"),
                  $localSkins = Symbol("localSkins");

            Object.defineProperties(Object.prototype, {
                canvas: {
                    set(val) {
                        this._value = val;
                    },
                    get() {
                        let object = this;
                        if (bokenParty.objectHas(object, ["health", "health2", "dmgColor"])) {
                            bokenParty.overlay = this;
                        }
                        return this._value;
                    }
                },
                RENDER: {
                    set(val) {
                        this._value = val;
                        bokenParty.renderer = this._value;
                        bokenParty.renderer.adsFovMlt.fill(bokenParty.settings.zoom_of_weapon)
                        bokenParty.fxComposer = this;
                    },
                    get() {
                        return this._value;
                    }
                },
                OBJLoader: {
                    set(val) {
                        bokenParty.three = this;
                        this._value = val;
                    },
                    get() {
                        return this._value;
                    }
                },
                skins: {
                    set(fn) {
                        this[$origSkins] = fn;
                        if (void 0 == this.localSkins || !this.localSkins.length) {
                            this[$localSkins] = Array.apply(null, Array(5e3)).map((x, i) => {
                                return {
                                    ind: i,
                                    cnt: 0x1,
                                }
                            })
                        }
                        return fn;
                    },
                    get() {
                        return bokenParty.settings.yay_skinnies && this.stats ? this[$localSkins] : this[$origSkins];
                    }
                },
                useLooseClient: {
                    enumerable: false,
                    get() {
                        return this._ulc
                    },
                    set(v) {
                        bokenParty.config = this
                        Object.defineProperty(this, "nameVisRate", {
                            value: 0,
                            writable: false,
                            configurable: true,
                        })
                        this._ulc = v
                    }
                },
                trail: {
                    enumerable: false,
                    get() {
                        return bokenParty.settings.bullet_trail || this._trail
                    },
                    set(v) {
                        this._trail = v
                    }
                },
                showTracers: {
                    enumerable: false,
                    get() {
                        return bokenParty.settings.bullet_trail || this._showTracers
                    },
                    set(v) {
                        this._showTracers = v
                    }
                },
                shaderId: {
                    enumerable: false,
                    get() {
                        if (this.src && this.src.startsWith("pubs/")) return bokenParty.settings.animatedBillboards ? 1 : this.rshaderId;
                        else return this.rshaderId
                    },
                    set(v) {
                        this.rshaderId = v
                    }
                },

                idleTimer: {
                    enumerable: false,
                    get() {
                        return bokenParty.settings.antikick ? 0 : this._idleTimer
                    },
                    set(v) {
                        this._idleTimer = v
                    }
                },
                kickTimer: {
                    enumerable: false,
                    get() {
                        return bokenParty.settings.antikick ? Infinity : this._kickTimer
                    },
                    set(v) {
                        this._kickTimer = v
                    }
                },
                cnBSeen: {
                    set (val) {
                        this.inView = val;
                    },
                    get() {
                        let isEnemy =!bokenParty.isDefined(bokenParty.me)|| !bokenParty.me.team||bokenParty.me.team !=this.team;
                        return this.inView||isEnemy&&bokenParty.state.nT;
                    }
                },
                events: {
                    set (val) {
                        if (this.ahNum ===0) {
                            bokenParty.wsSend = this.send.bind(this);
                            bokenParty.wsEvent = this._dispatchEvent.bind(this);
                            bokenParty.socket = this;
                        }
                        this._events = val;
                    },
                    get() {
                        return this._events;
                    }
                },
            });


            Object.keys(AudioParam.prototype).forEach(name => {
                if (Object.getOwnPropertyDescriptor(AudioParam.prototype, name).get) return
                const old = AudioParam.prototype[name]
                AudioParam.prototype[name] = function() {
                    try {
                        return old.apply(this, arguments)
                    } catch (e) {
                        console.log("AudioParam error:\n" + e)
                        return false
                    }
                }
            })
        }

        iframe() {
            const iframe = document.createElement('iframe');
            iframe.setAttribute('style', 'display:none');
            iframe.setAttribute("id", Boken);
            iframe.src = location.origin;
            document.documentElement.appendChild(iframe);

            const ifrWin = iframe.contentWindow;
            const ifrDoc = iframe.contentDocument?iframe.contentDocument:iframe.contentWindow.document;

            let lazy = 0;

            ifrWin.TextDecoder.prototype.decode = new Proxy(window.TextDecoder.prototype.decode, {
                apply: function(target, that, args) {
                    let string = Reflect.apply(...arguments);
                    if (string.length > 5e4) {
                        logs.warn("lazy = " + lazy);
                        if (lazy == 0) {
                            bokenParty.gameJS = string;
                        } else {
                            bokenParty.gameJS += string;
                        } lazy ++;

                    }
                    if (string.includes("generate-token")) bokenParty.generated = true;
                    else if (string.length == 40||bokenParty.generated) {
                        bokenParty.token = string;
                        console.log("Token ", string);
                        document.documentElement.removeChild(iframe);
                    }
                    return string;
                },
            });
        }

        createObservers() {

            let observer = new MutationObserver(mutations => {
                for (let mutation of mutations) {
                    for (let node of mutation.addedNodes) {
                        if (node.tagName === 'SCRIPT') {
                            if (node.type === "text/javascript" && node.innerHTML.startsWith("*!", 1)) {
                                node.innerHTML = "";
                                observer.disconnect();
                            } else if (node.src) {

                            }
                        }
                    }
                }
            });
            observer.observe(document, {
                childList: true,
                subtree: true
            });
        }

        createListeners() {

            window.addEventListener("mouseup", (e) => {
                if (e.which === 2 && bokenParty.settings.encrypted) {
                    e.preventDefault()

                }
            })
            window.addEventListener("keyup", event => {
                if (this.state.pK.has(event.code)) this.state.pK.delete(event.code)
                if (!(document.activeElement.tagName === "INPUT" || !window.endUI && window.endUI.style.display) && bokenParty.settings.ingamehotkeys) {
                    switch (event.code) {
                        case "KeyZ":
                            this.state.BAO = !this.state.BAO
                            this.wsEvent("ch", [null, ("Aimbot " + (this.state.BAO ? "on" : "off")), 1])
                            break
                        case "KeyP":
                            this.settings.ESP = (this.settings.ESP + 1) % 4
                            this.wsEvent("ch", [null, "ESP: " + ["disabled, by Bōken Party", "nametags, by Bōken Party", "box, by Bōken Party", "full, by Bōken Party"][this.settings.esp], "Changed"])
                            break
                    }
                }
            })
            window.addEventListener("keydown", event => {
                if (event.code == "F1") {
                    event.preventDefault();
                }
                if ('INPUT' == document.activeElement.tagName || !window.endUI && window.endUI.style.display) return;
                switch (event.code) {
                    case 'NumpadSubtract':
                        document.exitPointerLock();

                        console.dirxml(this)
                        break;
                    default:
                        if (!this.state.pK.has(event.code)) this.state.pK.add(event.code);
                        break;
                }
            })
        }

        inputs(input) {
            const key = {
                frame: 0,
                delta: 1,
                xdir: 2,
                ydir: 3,
                moveDir: 4,
                shoot: 5,
                scope: 6,
                jump: 7,
                reload: 8,
                crouch: 9,
                weaponScroll: 10,
                weaponSwap: 11,
                moveLock: 12
            }

            const moveDir = {
                leftStrafe: 0,
                forward: 1,
                rightStrafe: 2,
                right: 3,
                backwardRightStrafe: 4,
                backward: 5,
                backwardLeftStrafe: 6,
                left: 7
            }

            this.state.frame = input[key.frame];
            this.state.nT = [1, 2].some(n => n == this.settings.ESP) || this.settings.FNO;

            if (this.me) {


                if (this.settings.AN && Object.keys(this.me.streaks).length) {
                    this.wsSend("k", 0)
                }


                if (this.settings.bhop) {
                    if (this.state.pK.has("Space") || this.settings.bhop % 2) {
                        this.controls.keys[this.controls.binds.jump.val] ^= 1;
                        if (this.controls.keys[this.controls.binds.jump.val]) {
                            this.controls.didPressed[this.controls.binds.jump.val] = 1;
                        }
                        if (this.state.pK.has("Space") || this.settings.bhop == 3) {
                            if (this.me.yVel < -0.03 && this.me.canSlide) {
                                setTimeout(() => {
                                    this.controls.keys[this.controls.binds.crouch.val] = 0;
                                }, this.me.slideTimer || 325);
                                this.controls.keys[this.controls.binds.crouch.val] = 1;
                                this.controls.didPressed[this.controls.binds.crouch.val] = 1;
                            }
                        }
                    }
                }


                if (this.settings.FNO) {
                    try {
                        Object.defineProperty(this.game.config, "nT", {
                            get() {
                                return bokenParty.settings.FNO ? false : this.game._nT
                            },
                            set(v) {
                                this.game._nT = v
                            }
                        })
                    } catch (e) {}
                }


                if (this.settings.spinny_Shooty) {
                    const rate = 1
                    input[key.moveDir] !== -1 && (input[key.moveDir] = (input[key.moveDir] + this.state.sC - Math.round(7 * (input[key.ydir] / (Math.PI * 2000)))) % 7)
                    input[key.ydir] = this.state.sC / 7 * (Math.PI * 2000)
                    input[key.frame] % rate === 0 && (this.state.sC = (this.state.sC + 1) % 7)
                }


                if (this.settings.automatic_reload && this.me.ammos[this.me.weaponIndex] === 0) {
                    input[key.reload] = 1
                }


                if (this.settings.hack_of_pitch) {
                    switch (this.settings.hack_of_pitch) {
                        case 1:
                            input[key.xdir] = -Math.PI * 500
                            break
                        case 2:
                            input[key.xdir] = Math.PI * 500
                            break
                        case 3:
                            input[key.xdir] = Math.sin(Date.now() / 50) * Math.PI * 500
                            break
                        case 4:
                            input[key.xdir] = Math.sin(Date.now() / 250) * Math.PI * 500
                            break
                        case 5:
                            input[key.xdir] = input[key.frame] % 2 ? Math.PI * 500 : -Math.PI * 500
                            break
                        case 6:
                            input[key.xdir] = (Math.random() * Math.PI - Math.PI / 2) * 1000
                            break
                    }
                }


                const getNoise = () => (Math.random() * 2 - 1) * this.settings.noiseofaim
                this.game.players.list.forEach(v => {
                    v.pos = {
                        x: v.x,
                        y: v.y,
                        z: v.z
                    };
                    v.npos = {
                        x: v.x + getNoise(),
                        y: v.y + getNoise(),
                        z: v.z + getNoise()
                    };
                    v.isTarget = false
                })
                if (this.game.AI.ais) {
                    this.game.AI.ais.forEach(v => v.npos = v.pos = {
                        x: v.x,
                        y: v.y,
                        z: v.z
                    })
                }


                if (this.renderer && this.renderer.frustum && this.me.active) {
                    this.controls.target = null


                    let targets = this.game.players.list.filter(enemy => !enemy.isYTMP && enemy.hasOwnProperty('npos') && (!this.settings.check1 || this.containsPoint(enemy.npos)) && ((this.me.team === null || enemy.team !== this.me.team) && enemy.health > 0 && enemy.inView)).sort((e, e2) => this.getDistance(this.me.x, this.me.z, e.npos.x, e.npos.z) - this.getDistance(this.me.x, this.me.z, e2.npos.x, e2.npos.z));
                    let target = targets[0];


                    if (this.settings.fovbox) {
                        const scale = this.scale || parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1])
                        const width = innerWidth / scale,
                              height = innerHeight / scale

                        let foundTarget = false
                        for (let i = 0; i < targets.length; i++) {
                            const t = targets[i]
                            const sp = this.world2Screen(new this.three.Vector3(t.x, t.y, t.z), width, height, t.height / 2)
                            let fovBox = [width / 3, height / 4, width * (1 / 3), height / 2]
                            switch (this.settings.fovBoxSize) {

                                case 2:
                                    fovBox = [width * 0.4, height / 3, width * 0.2, height / 3]
                                    break

                                case 3:
                                    fovBox = [width * 0.45, height * 0.4, width * 0.1, height * 0.2]
                                    break
                            }
                            if (sp.x >= fovBox[0] && sp.x <= (fovBox[0] + fovBox[2]) && sp.y >= fovBox[1] && sp.y < (fovBox[1] + fovBox[3])) {
                                target = targets[i]
                                foundTarget = true
                                break
                            }
                        }
                        if (!foundTarget) {
                            target = void "kpal"
                        }
                    }

                    let isAiTarget = false
                    if (this.game.AI.ais && this.settings.aimbot2) {
                        let aiTarget = this.game.AI.ais.filter(ent => ent.mesh && ent.mesh.visible && ent.health && ent.pos && ent.canBSeen).sort((p1, p2) => this.getDistance(this.me.x, this.me.z, p1.pos.x, p1.pos.z) - this.getDistance(this.me.x, this.me.z, p2.pos.x, p2.pos.z)).shift()
                        if (!target || (aiTarget && this.getDistance(this.me.x, this.me.z, aiTarget.pos.x, aiTarget.pos.z) > this.getDistance(this.me.x, this.me.z, target.pos.x, target.pos.z))) {
                            target = aiTarget
                            isAiTarget = true
                        }
                    }

                    const isShooting = input[key.shoot]
                    if (target && this.settings.aimbot &&
                        this.state.BAO &&
                        (!this.settings.AR || this.getDistance3D(this.me.x, this.me.y, this.me.z, target.x, target.y, target.z) < this.settings.AR) &&
                        (!this.settings.check_of_range || this.getDistance3D(this.me.x, this.me.y, this.me.z, target.x, target.y, target.z) <= this.me.weapon.range) &&
                        !this.me.reloadTimer) {

                        if (this.settings.v_Aim) {
                            input[key.scope] = 1
                        }
                        target.isTarget = this.settings.target_Mark

                        const yDire = (this.getDir(this.me.z, this.me.x, target.npos.z, target.npos.x) || 0) * 1000
                        const xDire = isAiTarget ?
                              ((this.getXDir(this.me.x, this.me.y, this.me.z, target.npos.x, target.npos.y - target.dat.mSize / 2, target.npos.z) || 0) - (0.3 * this.me.recoilAnimY)) * 1000 :
                        ((this.getXDir(this.me.x, this.me.y, this.me.z, target.npos.x, target.npos.y - target.crouchVal * 3 + this.me.crouchVal * 3 + this.settings.offset_of_aim, target.npos.z) || 0) - (0.3 * this.me.recoilAnimY)) * 1000


                        if (this.settings.force_loud) {
                            this.controls.target = {
                                xD: xDire / 1000,
                                yD: yDire / 1000
                            }
                            this.controls.update(400)
                        }


                        switch (this.settings.aimbot) {

                            case 1:
                            case 2:
                            case 5:
                            case 6:
                            case 9:
                            case 10: {
                                let onAim = [5, 6, 9].some(n => n == this.settings.aimbot)
                                if ((this.settings.aimbot === 5 && input[key.scope]) || this.settings.aimbot === 10) {
                                    this.controls.target = {
                                        xD: xDire / 1000,
                                        yD: yDire / 1000
                                    }
                                    this.controls.update(400)
                                }
                                if ([2, 10].some(n => n == this.settings.aimbot) || (this.settings.aimbot === 1 && this.me.weapon.id)) {
                                    !this.me.weapon.melee && (input[key.scope] = 1)
                                }
                                if (this.me.didShoot) {
                                    input[key.shoot] = 0
                                    this.state.QCCS = false
                                    setTimeout(() => {
                                        this.state.QCCS = true
                                    }, this.me.weapon.rate * .85)
                                } else if (this.state.QCCS && (!onAim || input[key.scope])) {
                                    if (!this.me.weapon.melee) {
                                        input[key.scope] = 1
                                    }
                                    if (!this.settings.superSilent && this.settings.aimbot !== 9) {
                                        input[key.ydir] = yDire
                                        input[key.xdir] = xDire
                                    }
                                    if ((this.settings.aimbot !== 9 && (!this.me.aimVal || this.me.weapon.noAim || this.me.weapon.melee)) ||
                                        (this.settings.aimbot === 9 && isShooting)) {
                                        input[key.ydir] = yDire
                                        input[key.xdir] = xDire
                                        input[key.shoot] = 1
                                    }
                                }
                            }
                                break

                            case 4:
                            case 7:
                            case 8:
                            case 11:
                                if (input[key.scope] || this.settings.aimbot === 11) {
                                    this.controls.target = {
                                        xD: xDire / 1000,
                                        yD: yDire / 1000
                                    }
                                    this.controls.update(({
                                        4: 400,
                                        7: 110,
                                        8: 70,
                                        11: 400
                                    })[this.settings.aimbot])
                                    if ([4, 11].some(n => n == this.settings.aimbot)) {
                                        input[key.xdir] = xDire
                                        input[key.ydir] = yDire
                                    }
                                    if (this.me.didShoot) {
                                        input[key.shoot] = 0
                                        this.state.QCCS = false
                                        setTimeout(() => {
                                            this.state.QCCS = true
                                        }, this.me.weapon.rate * 0.85)
                                    } else if (this.state.QCCS) {
                                        input[this.me.weapon.melee ? key.shoot : key.scope] = 1
                                    }
                                } else {
                                    this.controls.target = null
                                }
                                break

                            case 12: {
                                if (!this.three ||
                                    !this.renderer ||
                                    !this.renderer.camera ||
                                    !this.game ||
                                    !this.game.players ||
                                    !this.game.players.list.length ||
                                    !input[key.scope] ||
                                    this.me.aimVal) {
                                    break
                                }

                                if (!this.state.raycaster) {
                                    this.state.raycaster = new this.three.Raycaster()
                                    this.state.mid = new this.three.Vector2(0, 0)
                                }
                                const playerMaps = []
                                for (let i = 0; i < this.game.players.list.length; i++) {
                                    let p = this.game.players.list[i]
                                    if (!p || !p.objInstances || p.isYTMP || !(this.me.team === null || p.team !== this.me.team) || !p.inView) {
                                        continue
                                    }
                                    playerMaps.push(p.objInstances)
                                }
                                const raycaster = this.state.raycaster
                                raycaster.setFromCamera(this.state.mid, this.renderer.camera)
                                if (raycaster.intersectObjects(playerMaps, true).length) {
                                    input[key.shoot] = this.me.didShoot ? 0 : 1
                                }
                            }
                                break
                        }
                    } else {
                        if (this.settings.inv_Aim) {
                            input[key.scope] = 0
                        }
                        this.state.SF = 0
                    }
                }

                if (this.settings.alwaysAim) {
                    input[key.scope] = 1
                }
                if (this.settings.PMT && this.me.weapon.melee) {
                    input[key.scope] = 0
                }
            }
            return input;
        }

        render() {

            var scale = this.scale || parseFloat(document.getElementById("uiBase").style.transform.match(/\((.+)\)/)[1]);
            let width = innerWidth / scale,
                height = innerHeight / scale

            let world2Screen = (pos, yOffset = 0) => {
                pos.y += yOffset
                pos.project(this.renderer.camera)
                pos.x = (pos.x + 1) / 2
                pos.y = (-pos.y + 1) / 2
                pos.x *= width
                pos.y *= height
                return pos
            }
            let line = (x1, y1, x2, y2, lW, sS) => {
                this.ctx.save()
                this.ctx.lineWidth = lW + 2
                this.ctx.beginPath()
                this.ctx.moveTo(x1, y1)
                this.ctx.lineTo(x2, y2)
                this.ctx.strokeStyle = "rgba(0, 0, 0, 0.25)"
                this.ctx.stroke()
                this.ctx.lineWidth = lW
                this.ctx.strokeStyle = sS
                this.ctx.stroke()
                this.ctx.restore()
            }
            let rect = (x, y, ox, oy, w, h, color, fill) => {
                this.ctx.save()
                this.ctx.translate(~~x, ~~y)
                this.ctx.beginPath()
                fill ? this.ctx.fillStyle = color : this.ctx.strokeStyle = color
                this.ctx.rect(ox, oy, w, h)
                fill ? this.ctx.fill() : this.ctx.stroke()
                this.ctx.closePath()
                this.ctx.restore()
            }
            let getTextMeasurements = (arr) => {
                for (let i = 0; i < arr.length; i++) {
                    arr[i] = ~~this.ctx.measureText(arr[i]).width
                }
                return arr
            }
            let gradient = (x, y, w, h, colors) => {
                const grad = this.ctx.createLinearGradient(x, y, w, h)
                for (let i = 0; i < colors.length; i++) {
                    grad.addColorStop(i, colors[i])
                }
                return grad
            }
            let text = (txt, font, color, x, y) => {
                this.ctx.save()
                this.ctx.translate(~~x, ~~y)
                this.ctx.fillStyle = color
                this.ctx.strokeStyle = "rgba(0, 0, 0, 0.5)"
                this.ctx.font = font
                this.ctx.lineWidth = 1
                this.ctx.strokeText(txt, 0, 0)
                this.ctx.fillText(txt, 0, 0)
                this.ctx.restore()
            }

            const padding = 2

            for (const player of this.game.players.list.filter(v => (!v.isYTMP && v.active && (v.pos = {
                x: v.x,
                y: v.y,
                z: v.z
            })))) {
                const pos = new this.three.Vector3(player.pos.x, player.pos.y, player.pos.z)
                const screenR = world2Screen(pos.clone())
                const screenH = world2Screen(pos.clone(), player.height)
                const hDiff = ~~(screenR.y - screenH.y)
                const bWidth = ~~(hDiff * 0.6)
                const font = this.settings.espFontSize + "px GameFont"
                const enemy = this.me.team === null || player.team !== this.me.team;

                if (!this.containsPoint(player.pos)) {
                    continue
                }

                if (this.settings.tracers) {
                    line(width / 2, (bokenParty.settings.tracers === 2 ? height / 2 : height - 1), screenR.x, screenR.y, 2, player.team === null ? "#FF4444" : player.team === this.me.team ? "#44AAFF" : "#FF4444")
                }


                const obj = player.objInstances;
                if (this.isDefined(obj)) {
                    if (!obj.visible) {
                        Object.defineProperty(player.objInstances, 'visible', {
                            value: true,
                            writable: false
                        });
                    } else {
                        let chamsEnabled = this.settings.chams;
                        if (bokenParty.rainbow >= 360) bokenParty.rainbow = 0; else bokenParty.rainbow++;
                        obj.traverse(child => {
                            if (child && child.type == "Mesh" && this.isDefined(child.material)) {
                                if (!child.hasOwnProperty(lazyProgramma)) {
                                    child[lazyProgramma] = child.material;
                                } else if (child.hasOwnProperty(lazyProgramma)) {
                                    Object.defineProperty(child, 'material', {
                                        get(){
                                            return !chamsEnabled||(!enemy && !bokenParty.settings.TC) ? this[lazyProgramma] : new bokenParty.three.MeshBasicMaterial({
                                                color: new bokenParty.three.Color(bokenParty.settings.CC == 12 ? `hsl(${bokenParty.rainbow},100%, 50%)` : Object.values(bokenParty.colors)[bokenParty.settings.CC]),
                                                depthTest: false,
                                                transparent: true,
                                                fog: false,
                                                wireframe: bokenParty.settings.wireframe
                                            })
                                        }
                                    });
                                }
                            }
                        })
                    }
                }

                if (this.settings.ESP > 1) {
                    if (player.isTarget) {
                        this.ctx.save()
                        const meas = getTextMeasurements(["TARGET"])
                        text("TARGET", font, "#FFFFFF", screenH.x - meas[0] / 2, screenH.y - this.settings.espFontSize * 1.5)

                        this.ctx.beginPath()

                        this.ctx.translate(screenH.x, screenH.y + Math.abs(hDiff / 2))
                        this.ctx.arc(0, 0, Math.abs(hDiff / 2) + 10, 0, Math.PI * 2)

                        this.ctx.strokeStyle = "#FFFFFF"
                        this.ctx.stroke()
                        this.ctx.closePath()
                        this.ctx.restore()
                    }

                    if (this.settings.ESP === 2) {
                        this.ctx.save()
                        this.ctx.strokeStyle = (this.me.team === null || player.team !== this.me.team) ? "#FF4444" : "#44AAFF"
                        this.ctx.strokeRect(screenH.x - bWidth / 2, screenH.y, bWidth, hDiff)
                        this.ctx.restore()
                        continue
                    }

                    rect((screenH.x - bWidth / 2) - 7, ~~screenH.y - 1, 0, 0, 4, hDiff + 2, "#000000", false)
                    rect((screenH.x - bWidth / 2) - 7, ~~screenH.y - 1, 0, 0, 4, hDiff + 2, "#44FF44", true)
                    rect((screenH.x - bWidth / 2) - 7, ~~screenH.y - 1, 0, 0, 4, ~~((player.maxHealth - player.health) / player.maxHealth * (hDiff + 2)), "#000000", true)
                    this.ctx.save()
                    this.ctx.lineWidth = 4
                    this.ctx.translate(~~(screenH.x - bWidth / 2), ~~screenH.y)
                    this.ctx.beginPath()
                    this.ctx.rect(0, 0, bWidth, hDiff)
                    this.ctx.strokeStyle = "rgba(0, 0, 0, 0.25)"
                    this.ctx.stroke()
                    this.ctx.lineWidth = 2
                    this.ctx.strokeStyle = player.team === null ? '#FF4444' : this.me.team === player.team ? '#44AAFF' : '#FF4444'
                    this.ctx.stroke()
                    this.ctx.closePath()
                    this.ctx.restore()

                    const playerDist = ~~(this.getDistance3D(this.me.x, this.me.y, this.me.z, player.pos.x, player.pos.y, player.pos.z) / 10)
                    this.ctx.save()
                    this.ctx.font = font
                    const meas = getTextMeasurements(["[", playerDist, "m]", player.level, "©", player.name])
                    this.ctx.restore()
                    const grad2 = gradient(0, 0, meas[4] * 5, 0, ["rgba(0, 0, 0, 0.25)", "rgba(0, 0, 0, 0)"])
                    if (player.level) {
                        const grad = gradient(0, 0, (meas[4] * 2) + meas[3] + (padding * 3), 0, ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.25)"])
                        rect(~~(screenH.x - bWidth / 2) - 12 - (meas[4] * 2) - meas[3] - (padding * 3), ~~screenH.y - padding, 0, 0, (meas[4] * 2) + meas[3] + (padding * 3), meas[4] + (padding * 2), grad, true)
                        text("" + player.level, font, '#FFFFFF', ~~(screenH.x - bWidth / 2) - 16 - meas[3], ~~screenH.y + meas[4] * 1)
                    }
                    rect(~~(screenH.x + bWidth / 2) + padding, ~~screenH.y - padding, 0, 0, (meas[4] * 5), (meas[4] * 4) + (padding * 2), grad2, true)
                    text(player.name, font, player.team === null ? '#FFCDB4' : this.me.team === player.team ? '#B4E6FF' : '#FFCDB4', (screenH.x + bWidth / 2) + 4, screenH.y + meas[4] * 1)
                    if (player.clan) text("[" + player.clan + "]", font, "#AAAAAA", (screenH.x + bWidth / 2) + 8 + meas[5], screenH.y + meas[4] * 1)
                    text(player.health + " HP", font, "#33FF33", (screenH.x + bWidth / 2) + 4, screenH.y + meas[4] * 2)
                    text(player.weapon.name, font, "#DDDDDD", (screenH.x + bWidth / 2) + 4, screenH.y + meas[4] * 3)
                    text("[", font, "#AAAAAA", (screenH.x + bWidth / 2) + 4, screenH.y + meas[4] * 4)
                    text("" + playerDist, font, "#DDDDDD", (screenH.x + bWidth / 2) + 4 + meas[0], screenH.y + meas[4] * 4)
                    text("m]", font, "#AAAAAA", (screenH.x + bWidth / 2) + 4 + meas[0] + meas[1], screenH.y + meas[4] * 4)
                }

            }

            if (this.settings.fovbox && this.settings.FOVBOXD) {
                let fovBox = [width / 3, height / 4, width * (1 / 3), height / 2]
                switch (this.settings.fovBoxSize) {

                    case 2:
                        fovBox = [width * 0.4, height / 3, width * 0.2, height / 3]
                        break

                    case 3:
                        fovBox = [width * 0.45, height * 0.4, width * 0.1, height * 0.2]
                        break
                }
                this.ctx.save()
                this.ctx.strokeStyle = "red"
                this.ctx.strokeRect(...fovBox)
                this.ctx.restore()
            }
        }

        cleanGUI() {
            let head = document.head || document.getElementsByTagName('head')[0] || 0,
                css = this.createElement("style", "#aMerger, #endAMerger { display: none !important }");
            head.appendChild(css);
            window['onetrust-consent-sdk'].style.display = "none";
            window.streamContainer.style.display = "none";
            window.merchHolder.style.display = "none";
            window.newsHolder.style.display = "none";
        }

        customCSS() {
            if (!this.isDefined(this.CSSres) && this.settings.copiedCSS) {
                let head = document.head || document.getElementsByTagName('head')[0] || 0
                this.CSSres = document.createElement("link");
                this.CSSres.rel = "stylesheet";
                this.CSSres.disabled = false;
                head.appendChild(this.CSSres);
            }
            if (this.settings.customCSS.startsWith("http") && this.settings.customCSS.endsWith(".css")) {

                this.CSSres.href = this.settings.customCSS;

            } else this.CSSres = undefined;
        }

        initGUI() {
            function createButton(name, iconURL, fn) {
                const menu = document.querySelector("#menuItemContainer"),
                      menuItem = document.createElement("div"),
                      menuItemIcon = document.createElement("div"),
                      menuItemTitle = document.createElement("div")

                menuItem.className = "menuItem"
                menuItemIcon.className = "menuItemIcon"
                menuItemTitle.className = "menuItemTitle"

                menuItemTitle.innerHTML = name
                menuItemIcon.style.backgroundImage = `url("https://media.giphy.com/media/7FrOU9tPbgAZtxV5mb/giphy.gif")`

                menuItem.append(menuItemIcon, menuItemTitle)
                menu.append(menuItem)

                menuItem.addEventListener("click", fn)
            }

            bokenParty.GUI.setSetting = function(setting, value) {
                switch (setting) {
                    case "customCSS":
                        bokenParty.settings.customCSS = value
                        bokenParty.customCSS();
                        break

                    default:
                        console.log("SET ", setting, " ", value);
                        bokenParty.settings[setting] = value
                }
                localStorage.kro_setngss_json = JSON.stringify(bokenParty.settings);
            }
            bokenParty.GUI.windowIndex = windows.length + 1
            bokenParty.GUI.settings = {
                aimbot: {
                    val: this.settings.aimbot
                }
            }
            bokenParty.GUI.windowObj = {
                header: "Bōken Party hacks",
                html: "",
                gen() {
                    return bokenParty.getGuiHtml()
                }
            }

            Object.defineProperty(window.windows, windows.length, {
                value: bokenParty.GUI.windowObj
            })
            Object.defineProperty(window.windows, windows.length, {
                value: bokenParty.GUI.windowObj2
            })
            if (this.settings.gui_button) {
                createButton("Bōken Party hacks", null, () => {
                    window.showWindow(bokenParty.GUI.windowIndex)
                })
            }
        }

        showGUI() {
            if (document.pointerLockElement || document.mozPointerLockElement) {
                document.exitPointerLock()
            }
            window.showWindow(this.GUI.windowIndex)
        }

        getGuiHtml() {
            const builder = {
                checkbox: (name, settingName, description = "", needsRestart = false) => `<div class="settName" title="${description}">${name} ${needsRestart ? "<span style=\"color: #eb5656\">*</span>" : ""}<label class="switch" style="margin-left:10px"><input type="checkbox" onclick='${lazyProgramma}.GUI.setSetting("${settingName}", this.checked)' ${bokenParty.settings[settingName]?"checked":""}><span class="slider"></span></label></div>`,
                client_setting: (name, settingName, description = "", needsRestart = true) => `<div class="settName" title="${description}">${name} ${needsRestart ? "<span style=\"color: #eb5656\">*</span>" : ""}<label class="switch" style="margin-left:10px"><input type="checkbox", this.checked?"1":"0")' ${bokenParty.settings[settingName]?"checked":""}><span class="slider"></span></label></div>`,
    select: (name, settingName, options, description = "", needsRestart = false) => {
        let built = `<div class="settName" title="${description}">${name} ${needsRestart ? "<span style=\"color: #eb5656\">*</span>" : ""}<select onchange='${lazyProgramma}.GUI.setSetting("${settingName}", parseInt(this.value))' class="inputGrey2">`
        for (const option in options) {
            if (options.hasOwnProperty(option))
                built += `<option value="${options[option]}" ${bokenParty.settings[settingName] == options[option]?"selected":""}>${option}</option>,`
        }
        return built + "</select></div>"
    },
        slider: (name, settingName, min, max, step, description = "") => `<div class="settName" title="${description}">${name} <input type="number" class="sliderVal" id="slid_input_${settingName}" min="${min}" max="${max}" value="${bokenParty.settings[settingName]}" onkeypress="${lazyProgramma}.GUI.setSetting('${settingName}', parseFloat(this.value.replace(',', '.')));document.querySelector('#slid_input_${settingName}').value=this.value" style="margin-right:0;border-width:0"><div class="slidecontainer" style=""><input type="range" id="slid_${settingName}" min="${min}" max="${max}" step="${step}" value="${bokenParty.settings[settingName]}" class="sliderM" oninput="${lazyProgramma}.GUI.setSetting('${settingName}', parseFloat(this.value));document.querySelector('#slid_input_${settingName}').value=this.value"></div></div>`,
            input: (name, settingName, type, description, extra) => `<div class="settName" title="${description}">${name} <input type="${type}" name="${type}" id="slid_utilities_${settingName}"\n${'color' == type ? 'style="float:right;margin-top:5px"' : `class="inputGrey2" placeholder="${extra}"`}\nvalue="${bokenParty.settings[settingName]}" oninput="${lazyProgramma
            }.GUI.setSetting(\x27${settingName}\x27, this.value)"/></div>`,
                label: (name, description) => "<br><span style='color: black; font-size: 20px; margin: 20px 0'>" + name + "</span> <span style='color: dimgrey; font-size: 15px'>" + (description || "") + "</span><br>",
                    nobrlabel: (name, description) => "<span style='color: black; font-size: 20px; margin: 20px 0'>" + name + "</span> <span style='color: dimgrey; font-size: 15px'>" + (description || "") + "</span><br>",
                        br: () => "<br>",
                            style: content => `<style>${content}</style>`,
};
    let built = `<div id="settHolder">
<img src="https://uploads-ssl.webflow.com/60150fb2a91c8946f9676aab/608d4b6b1c408061f5de40c0_dylan1.png" width="90%">
<div class="bokenparty logo" onmouseenter="playTick()" onclick="openURL('boken.party')"><span style='display:inline'></span></div>`


    Object.keys(builder).forEach(name => {
        const o = builder[name]
        builder[name] = function() {
            return built += o.apply(this, arguments)
        }
    })

    // Tabs stuff
    const tabNames = ["Gun", "ESP/Wallhack", "Skin hacks/visual", "Tweaks (unnecessary)", "Movement", "CSS"]
    builder.style(`.cheatTabButton { color: black; background: #ddd; padding: 2px 7px; font-size: 15px; cursor: pointer; text-align: center; } .cheatTabActive { background: #bbb;}`)
    this.GUI.changeTab = function(tabbtn) {
        const tn = tabbtn.innerText
        document.getElementById("cheat-tabbtn-" + tabNames[bokenParty.state.aT]).classList.remove("cheatTabActive")
        document.getElementById("cheat-tab-" + tabNames[bokenParty.state.aT]).style.display = "none"
        tabbtn.classList.add("cheatTabActive")
        document.getElementById("cheat-tab-" + tn).style.display = "block"
        bokenParty.state.aT = tabNames.indexOf(tn)
    }
    built += `<table style="width: 100%; margin-bottom: 30px"><tr>`
    for (let i = 0; i < tabNames.length; i++) {
        const tab = tabNames[i]
        built += `<td id="cheat-tabbtn-${tab}" onclick="${lazyProgramma}.GUI.changeTab(this)" class="cheatTabButton ${tabNames[bokenParty.state.aT] === tab ? 'cheatTabActive' : ''}">`
        built += tab
        built += `</td>`
    }
    built += `</table></tr>`

    function tab(i, cb) {
        built += `<div style="display: ${bokenParty.state.aT === i ? 'block' : 'none'}" class="cheat-tab" id="cheat-tab-${tabNames[i]}">`
        cb()
        built += `</div>`
    }

    //creates the gui aka the options for aimbot
    tab(0, () => {
        builder.select("Aimbot by Bōken party", "aimbot", {
            "No aimbot": 0,
            "Instantaneous": 1,
            "Silent aimbot": 2,
            "Aim assist": 4,
            "Easy aim assist": 11,
            "Trigger bot": 12,
            "Silent when aiming": 6,
            "Smooth": 7,
            "Unsilent": 10,
            "Unsilent on aim": 5,
            "Aim correction": 9,
        })
        builder.select("I know you can see this James lol", "easterEgg", {
            "Sussy": 0,
            "Baka": 1,
            "Sussy baka": 2,
            "Red is insanely sus": 3,
            "I'm telling": 4,
        })
        builder.select("Donations to developer: lazyProgramma", "Donations", {
            "Coming soon!": 0,
            "": 1,
        })
        builder.select("Support these guys too!", "Donations2", {
            "Coming soon!": 0,
            "": 1,
        })
        builder.select("Spin aimbot speed", "aimFrameSpin", {
            "1": 30,
            "2": 20,
            "3": 15,
            "4": 10,
            "5": 5,
        })
        builder.slider("Aim range", "AR", 0, 1000, 10, "Sets the aimbot range")
        builder.slider("Aim offset", "offset_of_aim", -4, 1, 0.1, "How far the aim will be from you")
        builder.slider("Aim noise", "noiseofaim", 0, 2, 0.005, "The noise of the aim")
        builder.checkbox("Supersilent aim", "superSilent", "Only works with quickscope and silent aim")
        builder.checkbox("Aim at AIs", "aimbot2", "lol")
        builder.checkbox("FOV check", "check1", "Makes you only shoot at enemies that are in your field of view. I would recommend this so then you don't get banned by shooting at people that you aren't facing lol")
        builder.checkbox("FOV box", "fovbox", "This is probably self explanatory..")
        builder.select("FOV box size", "fovBoxSize", {
            "Large": 1,
            "Medium": 2,
            "Small": 3,
        })
        builder.checkbox("Wallbangs", "wallbangs", "Makes the aimbot shoot enemies behind shoot-through walls")
        builder.checkbox("Aimbot range check", "check_of_range", "Checks if the enemy is in range of your weapon before shooting it. Recommended so then you can actually shoot them or not depending on their range.")
        builder.checkbox("Auto reload", "automatic_reload", "Automatically reloads your weapon when it's out of ammo")
    })

    tab(1, () => {
        builder.select("ESP (h keyboard), by Bōken Party", "ESP", {
            "No ESP": 0,
            "Nametags": 1,
            "Box ESP": 2,
            "Full ESP": 3,
        })
        builder.select("ESP Text size", "espFontSize", {
            "Sus lol": 100,
            "40px": 40,
            "30px": 30,
            "25px": 25,
            "20px": 20,
            "15px": 15,
            "10px": 10,
            "5px": 5,
        })
        builder.select("Tracers, by GS, also Bōken Party", "tracers", {
            "None": 0,
            "Bottom": 1,
            "Middle": 2,
        }, "Draws lines to players")
        builder.checkbox("Mark aimbot target", "target_Mark", "Shows who the aimbot is targetting at the time, useful for aim assist/aim correction")
        builder.checkbox("Draw FOV box", "FOVBOXD", "Draws the FOV box from aimbot settings")
        builder.checkbox("Chams", "chams")
        builder.select("colour of the chams", "CC", {
            White: 0,
            Black: 1,
            Purple: 2,
            Pink: 3,
            Blue: 4,
            dark_blue: 5,
            Aqua: 6,
            Green: 7,
            Lime: 8,
            Orange: 9,
            Yellow: 10,
            Red: 11,
            Rainbow: 12,
        })
        builder.checkbox("teammate chams", "TC", "Show Chams for teammates")
        builder.checkbox("Wireframe", "wireframe")
        builder.slider("interval of the rainbow chams", "chamsInterval", 50, 1000, 50, "RGB speed")
    })

    tab(2, () => {
        builder.checkbox("All skins!", "yay_skinnies", "Makes you able to use any skin in game, only shows on your side")
        builder.checkbox("Billboard shaders", "animatedBillboards", "Don't use if your fps drops")
        builder.checkbox("Any weapon trail", "bullet_trail")
        builder.slider("Weapon Zoom", "zoom_of_weapon", 0, 20, .1, "Weapon Zoom Multiplier ")
    })

    tab(3, () => {
        builder.checkbox("Always aim", "alwaysAim", "Makes you slower and jump lower, but the aimbot can start shooting at enemies, faster.")
        builder.checkbox("Aim when you can see the target", "v_Aim")
        builder.checkbox("Unaim when no target visible", "inv_Aim")
        builder.checkbox("Force unsilent", "force_loud")
    })

    tab(4, () => {
        builder.select("Auto bhop (superspeed)", "bhop", {
            "Null": 0,
            "Auto Jump": 1,
            "Key Jump": 2,
            "Automatic": 3,
            "Key Slide": 4,
        })
        builder.label("Only use with silent aim")
        builder.select("Pitch hax", "hack_of_pitch", {
            "Disabled": 0,
            "Downward": 1,
            "Upward": 2,
            "sin(time)": 3,
            "sin(time/5)": 4,
            "double": 5,
            "random": 6,
        }, "Only use with aimbot on")
        builder.checkbox("Spin bot", "spinny_Shooty")
    })

    tab(5, () => {
        builder.checkbox("Show GUI button", "gui_button", "Disable if you don't want the gif under settings!")
        builder.checkbox("GUI on middle mouse button", "encrypted", "Makes it possible to open this menu by clicking the mouse wheel")
        builder.checkbox("Keybinds/in-game-hotkeys", "ingamehotkeys", "Turn keybinds on/off, Aimbot [press y], ESP [press h]")
        builder.checkbox("No inactivity kick", "antikick", "Disables the 'Kicked for inactivity'")
        builder.checkbox("Auto nuke", "AN", "Automatically nukes when you are able to")
        builder.checkbox("Force nametags on", "fgno", "Use in custom games with disabled nametags")
        builder.checkbox("Use CSS", "copiedCSS", "Use the CSS when no custom CSS is Applied")
        builder.input("Custom CSS", "customCSS", "url", "", "URL to CSS file")
    })


    built += "</div>"

    return built;
}

 getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x2 -= x1) * x2 + (y2 -= y1) * y2);
}

getDistance3D(x1, y1, z1, x2, y2, z2) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    let dz = z1 - z2;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}

getXDir(x1, y1, z1, x2, y2, z2) {
    let h = Math.abs(y1 - y2);
    let dst = this.getDistance3D(x1, y1, z1, x2, y2, z2);
    return (Math.asin(h / dst) * ((y1 > y2) ? -1 : 1));
}

getDir(x1, y1, x2, y2) {
    return Math.atan2(y1 - y2, x1 - x2);
}

getAngleDist(a, b) {
    return Math.atan2(Math.sin(b - a), Math.cos(a - b));
}

containsPoint(point) {
    let planes = this.renderer.frustum.planes;
    for (let i = 0; i < 6; i++) {
        if (planes[i].distanceToPoint(point) < 0) {
            return false;
        }
    }
    return true;
}

world2Screen(pos, width, height, yOffset = 0) {
    pos.y += yOffset
    pos.project(this.renderer.camera)
    pos.x = (pos.x + 1) / 2
    pos.y = (-pos.y + 1) / 2
    pos.x *= width
    pos.y *= height
    return pos
}
};

window[lazyProgramma] = new Boken();

})([...Array(8)].map(_ => 'AaCcEeGgIiKkMmPpRrTtVvXxZzBbDdFfHhJjLlNnQqSsUuWwYy' [~~(Math.random() * 52)]).join(''));
