(function ($) {

    var Renderer = function (canvas) {
        var canvas = $(canvas).get(0)
        var ctx = canvas.getContext("2d");
        var gfx = arbor.Graphics(canvas);
        var particleSystem;

        var that = {
            init: function (system) {
                particleSystem = system
                particleSystem.screenSize(canvas.width, canvas.height)
                particleSystem.screenPadding(80)
                particleSystem.eachNode(function(node,pt){
                	if (node.data.url) {
                		node.data.img = new Image();
                		node.data.img.src = node.data.img_url;
                	}
                });
                that.initMouseHandling()
            },
            redraw: function () {
                ctx.fillStyle = "white"
                ctx.fillRect(0, 0, canvas.width, canvas.height)

                particleSystem.eachEdge(function (edge, pt1, pt2) {
                    ctx.strokeStyle = "rgba(0,0,0, .333)"
                    ctx.lineWidth = 1
                    ctx.beginPath()
                    ctx.moveTo(pt1.x, pt1.y)
                    ctx.lineTo(pt2.x, pt2.y)
                    ctx.stroke()
                })

                var nodeBoxes = {}
                particleSystem.eachNode(function (node, pt) {
                	if (node.data.url) {
                		node.data.img = new Image();
                //		node.data.img.src = node.data.url;
                	}
                    var label = node.name || ""
                    var w = ctx.measureText("" + label).width + 20
                    if (!("" + label).match(/^[ \t]*$/)) {
                        pt.x = Math.floor(pt.x)
                        pt.y = Math.floor(pt.y)
                    } else {
                        label = null
                    }
                    //images screen
                    var img = new Image();
                    if (node.name == "logo"){
                        img.src = "../kizuna/images/logo.png";
                            ctx.drawImage(img, pt.x - w / 0.7, pt.y - w / 0.7, 250, 160);
                    }
                    else if (node.name == "game") {
                        img.src = "../kizuna/images/game.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 60, 60);    
                    }
                    else if (node.name == "gamee") {
                        img.src = "../kizuna/images/gamee.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "paycent") {
                        img.src = "../kizuna/images/paycent.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 60);    
                    }
                    else if (node.name == "paycent2") {
                        img.src = "../kizuna/images/paycent.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 60);    
                    }
                    else if (node.name == "wallet") {
                        img.src = "../kizuna/images/wallet.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 60, 60);    
                    }
                    else if (node.name == "tsumugi") {
                        img.src = "../kizuna/images/tsumugi.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "kizunacoin") {
                        img.src = "../kizuna/images/kizunacoin.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "kizunacointoken") {
                        img.src = "../kizuna/images/kizunatoken.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "game") {
                        img.src = "../kizuna/images/gamee.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "map") {
                        img.src = "../kizuna/images/map.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "wnt") {
                        img.src = "../kizuna/images/wnt.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "shop") {
                        img.src = "../kizuna/images/shop.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "nextmoney") {
                        img.src = "../kizuna/images/nextmoney.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "bit-z") {
                        img.src = "../kizuna/images/bit-z.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 150, 80);    
                    }
                    else if (node.name == "bit-z2") {
                        img.src = "../kizuna/images/bit-z.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 150, 80);    
                    }
                    else if (node.name == "bit-m") {
                        img.src = "../kizuna/images/bit-m.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 150, 60);    
                    }
                    else if (node.name == "bittrust") {
                        img.src = "../kizuna/images/bittrust.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 150, 80);    
                    }
                    else if (node.name == "bitebtc") {
                        img.src = "../kizuna/images/bitebtc.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 150, 80);    
                    }
                    else if (node.name == "keep") {
                        img.src = "../kizuna/images/keep.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 150, 80);    
                    }
                    else if (node.name == "bitcointalk") {
                        img.src = "../kizuna/images/bitcointalk.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "medium") {
                        img.src = "../kizuna/images/medium.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "github") {
                        img.src = "../kizuna/images/github.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "discord") {
                        img.src = "../kizuna/images/discord.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "twitter") {
                        img.src = "../kizuna/images/twitter.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "youtube") {
                        img.src = "../kizuna/images/youtube.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "telegram") {
                        img.src = "../kizuna/images/telegram.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.name == "teikei") {
                        img.src = "../kizuna/images/teikei.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);    
                    }
                    else if (node.data.who == "exchange") {
                        ctx.fillStyle = "rgba(0,0,255,0)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "media") {
                        ctx.fillStyle = "rgba(0,0,255,0)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "kessai") {
                        ctx.fillStyle = "rgba(0,0,255,0)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                                                      
                    else {
                        ctx.fillStyle = "rgba(0,0,0,0.666)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    nodeBoxes[node.name] = [pt.x - w / 2, pt.y - 11, w, 22]
                })
            },


            initMouseHandling: function () {
                var dragged = null;
                var isClick = null;
                var handler = {

                    oneclicked: function (e) {
                       if (isClick) {
                            var pos = $(canvas).offset();
                            pos = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)
                            var p = particleSystem.fromScreen(pos)
                            dragged = particleSystem.nearest(pos);

                            let DISTANCE = 1;
                            if (Math.pow(dragged.node.p.x - p.x, 2) + Math.pow(dragged.node.p.y - p.y, 2) < DISTANCE * DISTANCE) {
                                if (dragged.node.data.url) {
                                    console.log(dragged.node.data.url);
                                    window.open(dragged.node.data.url);
                               }

                            };

                            if (dragged && dragged.node !== null) {
                                dragged.node.fixed = true
                                return;
                            }
                        }
                           isClick = true;
                
                          return false
                    },
                    clicked: function (e) {
                        var pos = $(canvas).offset();
                        _mouseP = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)
                        dragged = particleSystem.nearest(_mouseP);

                        if (dragged && dragged.node !== null) {
                            dragged.node.fixed = true
                        }
                        isClick = true;

                        $(canvas).bind('mousemove', handler.dragged)
                        $(window).bind('mouseup', handler.dropped)

                        return false
                    },

                    mousemove: function (e) {
                        var pos = $(canvas).offset();
                        pos = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)
                        var p = particleSystem.fromScreen(pos)
                        dragged = particleSystem.nearest(pos);

                        if (!dragged && dragged.node == null){
                            document.body.style.cursor = "";
                            return;
                        }

                        let DISTANCE = 1;
                        if (Math.pow(dragged.node.p.x - p.x, 2) + Math.pow(dragged.node.p.y - p.y, 2) < DISTANCE * DISTANCE) {
                                document.body.style.cursor = "pointer";
                            } else {
                                document.body.style.cursor = "";
                        }
                        isClick = false;

                            return false
                    },

                    dragged: function (e) {
                        var pos = $(canvas).offset();
                        var s = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)
                        if (dragged && dragged.node !== null) {
                            var p = particleSystem.fromScreen(s)
                            dragged.node.p = p
                        }

                        isClick = false;

                            return false
                    },

                    dropped: function (e) {
                        if (dragged === null || dragged.node === undefined) return
                        if (dragged.node !== null) dragged.node.fixed = false
                        dragged.node.tempMass = 1000
                        dragged = null
                        $(canvas).unbind('mousemove', handler.dragged)
                        $(window).unbind('mouseup', handler.dropped)
                        _mouseP = null

                            return false
                    }

                    }

                $(canvas).mousedown(handler.clicked);
                $(canvas).click(handler.oneclicked);
                $(canvas).mousemove(handler.mousemove);
            },

        }

        return that
    }

    $(document).ready(function () {
        var sys = arbor.ParticleSystem(300, 900, 0.8)
        sys.parameters({ gravity: true })
        sys.renderer = Renderer("#viewport")

        sys.addNode('logo', {url: "https://www.kizunacoin.net/"});
        sys.addNode('teikei', {url: ""});
        sys.addNode('bitcointalk', {url: "https://bitcointalk.org/index.php?topic=4412637"});
        sys.addNode('github', {url: "https://github.com/KIZUNACOIN"});
        sys.addNode('telegram', {url: "https://t.me/KIZUNA_OFFICIAL"});
        sys.addNode('medium', {url: "https://medium.com/@KIZUNA_GLOBAL_Inc"});
        sys.addNode('discord', {url: "https://discordapp.com/invite/fmhV8Qq"});
        sys.addNode('twitter', {url: "https://twitter.com/KIZUNA_OFFICIAL"});
        sys.addNode('youtube', {url: "https://www.youtube.com/watch?v=qBrGzlSoCsk"});
        sys.addNode('shop', {url: "https://shop-coin.info/"});
        sys.addNode('wnt', {url: "https://worldnuqumoritytransporters.com/"});
        sys.addNode('nextmoney', {url: "http://nextmoney.jp/?p=14029"});
        sys.addNode('paycent', {url: "https://jp.paycent.com/"});
        sys.addNode('bit-z', {url: "https://www.bitz.com/exchange?lang=jp"});
        sys.addNode('bit-m', {url: "https://www.bit-m.com/"});
        sys.addNode('bitebtc', {url: "https://bitebtc.com/trade/eth_btc"});
        sys.addNode('bittrust', {url: "https://www.bittrust-currency.com/markets/btckiz"});
        sys.addNode('keep', {url: ""});
        sys.addNode('tsumugi', {url: ""});
        sys.addNode('kizunacoin', {url: "https://itunes.apple.com/us/app/kizunacoin-dag-wallet/id1430843357"});
        sys.addNode('kizunacointoken', {url: "http://kizunaglobal.com/"});
        sys.addNode('wallet', {url: ""});
        sys.addNode('game', {url: ""});
        sys.addNode('gamee', {url: "https://itunes.apple.com/app/id1358164629" });
        sys.addNode('map', {url: "https://www.kizunacoin.net/#home-kizuna-affiliated-store"});
        sys.addNode('kessai', {who: "kessai"});
        sys.addNode('exchange', {who: "exchange"});
        sys.addNode('media', {who: "media"});

        sys.addEdge('logo', 'teikei');
        sys.addEdge('teikei', 'wnt');
        sys.addEdge('teikei', 'shop');
        sys.addEdge('teikei','nextmoney');
        sys.addEdge('teikei','bit-z2');
        sys.addEdge('teikei','paycent');

        sys.addEdge('logo','game');
        sys.addEdge('game','gamee');

        sys.addEdge('logo','kessai');
        sys.addEdge('kessai','map');
        sys.addEdge('kessai','paycent2');

        sys.addEdge('logo','exchange');
        sys.addEdge('exchange','bit-m');
        sys.addEdge('exchange','bit-z');
        sys.addEdge('exchange','bittrust');
        sys.addEdge('exchange','bitebtc');
        sys.addEdge('exchange','keep');

        sys.addEdge('logo','media');
        sys.addEdge('media','bitcointalk');
        sys.addEdge('media','github');
        sys.addEdge('media','telegram');
        sys.addEdge('media','youtube');
        sys.addEdge('media','twitter');
        sys.addEdge('media','discord');
        sys.addEdge('media','medium');

        sys.addEdge('logo','wallet');
        sys.addEdge('wallet','kizunacoin');
        sys.addEdge('wallet','kizunacointoken');
        sys.addEdge('wallet','tsumugi');

    })
})(this.jQuery)