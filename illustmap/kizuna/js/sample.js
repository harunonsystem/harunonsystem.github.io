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
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/logo.png";
                            ctx.drawImage(img, pt.x - w / 0.7, pt.y - w / 0.7, 160, 160);
                    }
                    else if (node.name == "game") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/game.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "gamee") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/gamee.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "paycent") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/paycent.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "wallet") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/wallet.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "tsumugi") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/tsumugi.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "kizunacoin") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/kizunacoin.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "kizunatoken") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/kizunatoken.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "game") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/gamee.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "map") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/map.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "wnt") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/wnt.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "shop") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/shop.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "nextmoney") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/nextmoney.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "bit-z") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/bit-z.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "bit-m") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/bit-m.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "bittrust") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/bittrust.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "bitebtc") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/bitebtc.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "keep") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/keep.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "bitcointalk") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/bitcointalk.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "medium") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/medium.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "github") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/github.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "discord") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/discord.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "twitter") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/twitter.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "youtube") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/youtube.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "telegram") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/telegram.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "teikei") {
                        img.src = "https://harunonsystem.github.io/illustmap/kizuna/images/teikei.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else {
                        ctx.fillStyle = "rgba(0,0,0,0.666)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    nodeBoxes[node.name] = [pt.x - w / 2, pt.y - 11, w, 22]

                    /* draw the text
                    if (label) {
                        ctx.font = "12px Helvetica"
                        ctx.textAlign = "center"
                        ctx.fillStyle = "white"
                        if (node.data.color == 'none') ctx.fillStyle = '#333333'
                        ctx.fillText(label || "", pt.x, pt.y + 4)
                        ctx.fillText(label || "", pt.x, pt.y + 4)
                    }*/
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

        sys.addNode('logo', {url: ""});
        sys.addNode('teikei', {url: ""});
        sys.addNode('bitcointalk', {url: ""});
        sys.addNode('github', {url: ""});
        sys.addNode('telegram', {url: ""});
        sys.addNode('medium', {url: ""});
        sys.addNode('discord', {url: ""});
        sys.addNode('twitter', {url: ""});
        sys.addNode('youtube', {url: ""});
        sys.addNode('shop', {url: ""});
        sys.addNode('wnt', {url: ""});
        sys.addNode('nextmoney', {url: ""});
        sys.addNode('paycent', {url: ""});
        sys.addNode('bit-z', {url: ""});
        sys.addNode('bit-m', {url: ""});
        sys.addNode('bitebtc', {url: ""});
        sys.addNode('bittrust', {url: ""});
        sys.addNode('keep', {url: ""});
        sys.addNode('kizunacoin', {url: ""});
        sys.addNode('kizunacointoken', {url: ""});
        sys.addNode('wallet', {url: ""});
        sys.addNode('game', {url: ""});
        sys.addNode('gamee', {url: ""});
        sys.addNode('map', {url: ""});

        sys.addEdge('logo', 'teikei');
        sys.addEdge('teikei', 'wnt');
        sys.addEdge('teikei', 'shop');
        sys.addEdge('teikei','nextmoney');
        sys.addEdge('teikei','bit-z');
        sys.addEdge('teikei','paycent');

        sys.addEdge('logo','game');
        sys.addEdge('game','gamee');

        sys.addEdge('logo','kessai');
        sys.addEdge('kessai','map');
        sys.addEdge('kessai','paycent');

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
        sys.addEdge('wallet','kizunatoken');
        sys.addEdge('wallet','tsumugi');

    })
})(this.jQuery)