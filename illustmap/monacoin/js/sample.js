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
                    if (node.name == "monacoin"){
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monacoin.png";
                            ctx.drawImage(img, pt.x - w / 0.7, pt.y - w / 0.7, 200, 200);
                        
                    }
                    else if (node.name == "monya") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monya.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                        
                    }
                    else if (node.name == "twitter") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/aoitori.png";
                            ctx.drawImage(img, pt.x - w / 1.5, pt.y - w / 1.5, 70, 70);
                        
                    }
                    else if (node.name == "youtube") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/Youtube.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "nekomasu") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/nekomasu.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 120, 120);
                    }
                    else if (node.name == "monacoinchan") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monacoinchan.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 120, 120);
                    }
                    else if (node.name == "ecservices") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/cart.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "monazon") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monazon.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 300, 110);
                    }
                    else if (node.name == "monaoku") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monaoku.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 220, 100);
                    }
                    else if (node.name == "bitbank") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/bitbank.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "zaif") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/zaif.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);
                    }
                    else if (node.name == "bitflyer") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/bitflyer.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "cryptobridge") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/cryptobjige.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "monappy") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monappy.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 190, 50);
                    }
                    else if (node.name == "wallet") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/wallet.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 70, 70);
                    }
                    else if (node.name == "map") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/map_pointa.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "monamap") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monamap.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "monagame") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/game.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "muratamona") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/muratamona.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 280, 180);
                    }
                    else if (node.name == "plicy") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/plicy.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 200, 50);
                    }
                    else if (node.name == "eccservices") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/cart.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }                         
                    else if (node.name == "tipmusic") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/tipmusic.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 220, 50);
                    }
                  /*  else if (node.name == "tipphoto") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/tipphoto.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 150, 50);
                    }*/
                    else if (node.name == "tipvideo") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/tipvideo.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2,150, 90);
                    }
                    else if (node.name == "tipnovel") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/tipnovel.png";
                        ctx.drawImage(img, pt.x - w /2, pt.y - w /2, 150, 90);
                    }
                    else if (node.name == "askmona") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/askmona.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 50);
                    }
                    else if (node.name == "chromeattachments") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/chrome.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "monyachrome") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monya.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "tipassist") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/tipassist.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "monalogin") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monalogin.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 150, 80);
                    }
                    else if (node.name == "monaparty") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monaparty.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "monacard") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monacard.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.data.who == "tradeplaces") {
                        ctx.fillStyle = "rgba(0,0,255,0)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "tipservices") {
                        ctx.fillStyle = "rgba(0,0,255,0)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    /*addnode color 
                    if (node.data.url == "mona") {
                        ctx.fillStyle = "rgba(150,5,10,0.666)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
 
                    else if (node.data.url == "wallet") {
                        ctx.fillStyle = "rgba(246,168,37,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.url == "ec") {
                        ctx.fillStyle = "rgba(168,122,255,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.url == "tipservice") {
                        ctx.fillStyle = "rgba(0,0,255,0)"
                         gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.url == "youtube") {
                        ctx.fillStyle = "rgba(246,35,0,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.url == "twitter") {
                        ctx.fillStyle = "rgba(0,183,255,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.url == "monacoinchan") {
                        ctx.fillStyle = "rgba(0,183,255,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.url == "tradeplaces") {
                        ctx.fillStyle = "rgba(0,20,150,0.666)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.url == "askmona") {
                        ctx.fillStyle = "rgba(0,204,35,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.url == "nekomasu") {
                        ctx.fillStyle = "rgba(246,35,0,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.url == "game") {
                        ctx.fillStyle = "rgba(0,132,255,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }                        
                    else if (node.data.url == "chromeattachement") {
                        ctx.fillStyle = "rgba(0,112,255,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }   
                    else if (node.data.url == "map") {
                        ctx.fillStyle = "rgba(47,144,25,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }   
                    else if (node.data.url == "monappy") {
                        ctx.fillStyle = "rgba(231,215,39,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }*/   
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
        sys.addNode('monacoin', { url: "https://monacoin.org" });
        sys.addNode('bitbank', { url: "https://bitbank.cc" });
        sys.addNode('bitflyer', { url: "https://bitflyer.jp/ja/" });
        sys.addNode('zaif', { url: "https://zaif.jp/" });
        sys.addNode('cryptobridge', { url: "https://crypto-bridge.org/" });
        sys.addNode('tradeplaces', {who: "tradeplaces"});

        sys.addNode('askmona', { url: 'https://askmona.org' });

        sys.addNode('monappy', { url: 'https://monappy.jp' });

        sys.addNode('map', {});
        sys.addNode('monamap', { url: 'https://www.google.com/maps/d/viewer?mid=13dW7cDC7eKC-OYqf8xhTTejkooId-ueF&ll=35.06939124071531%2C135.444886&z=5' });

        sys.addNode('twitter', {});
        sys.addNode('monacoinchan', { url: 'https://twitter.com/tipmona' });

        sys.addNode('youtube', {});
        sys.addNode('nekomasu', { url: 'https://www.youtube.com/channel/UCt8tmsv8kL9Nc1sxvCo9j4Q' });

        sys.addNode('muratamona', { url: "http://murata-mona.info/" });
        sys.addNode('plicy', { url: "https://plicy.net/" });
        sys.addNode('monagame', {});

        sys.addNode('monaparty', { url: "https://wallet.monaparty.me/#" });
        sys.addNode('monacard', { url: "https://card.mona.jp" });
        sys.addNode('monalogin', { url: "https://mona-login.com/" });

        sys.addNode('monya', { url: "https://missmonacoin.github.io/monya/wallet/" });
        sys.addNode('wallet', {});

        sys.addNode('ecservices', {});
        sys.addNode('monazon', { url: "https://monazon.jp" });
        sys.addNode('monaoku', { url: "https://monaoku.xyz/" });

        sys.addNode('tipservices', {who:"tipservices"});
        sys.addNode('tipmusic', { url: "http://retoruto.php.xdomain.jp/" });
        sys.addNode('tipvideo', { url: "https://www.tip-video.net/index.php" });
      //  sys.addNode('tipphoto', { url: "http://tipphoto.takutyamu.net/" });
        sys.addNode('tipnovel', { url: "https://tipnovel.taillook.tech/" });

        sys.addNode('chromeattachments', {});
        sys.addNode('monyachrome', { url: "https://chrome.google.com/webstore/detail/%E3%82%82%E3%81%AB%E3%82%83-monacoin-bitzeny-wall/lgiengglndmdhgdbdcknhgjnbefhnkio/reviews" });
        sys.addNode('tipassist', { url: "https://chrome.google.com/webstore/detail/tipassist/jheabpiaknlkageplpdbpggnjkikipcf?hl=ja" });

        sys.addEdge('monacoin', 'wallet');
        sys.addEdge('wallet', 'monya');

        sys.addEdge('monacoin', 'twitter');
        sys.addEdge('twitter', 'monacoinchan');

        sys.addEdge('monacoin', 'monappy');

        sys.addEdge('monacoin', 'monagame');
        sys.addEdge('monagame', 'muratamona');
        sys.addEdge('monagame', 'plicy');

        sys.addEdge('monacoin', 'tipservices');
        sys.addEdge('tipservices', 'tipmusic');
   //     sys.addEdge('tipservices', 'tipphoto');
        sys.addEdge('tipservices', 'tipnovel');
        sys.addEdge('tipservices', 'tipvideo');

        sys.addEdge('monacoin', 'map');
        sys.addEdge('map', 'monamap');

        sys.addEdge('monacoin', 'monaparty');
        sys.addEdge('monaparty', 'monacard');
        sys.addEdge('monaparty', 'monalogin');

        sys.addEdge('monacoin', 'tradeplaces');
        sys.addEdge('tradeplaces', 'bitbank');
        sys.addEdge('tradeplaces', 'bitflyer');
        sys.addEdge('tradeplaces', 'cryptobridge');
        sys.addEdge('tradeplaces', 'zaif');

        sys.addEdge('monacoin', 'askmona');

        sys.addEdge('monacoin', 'ecservices');
        sys.addEdge('ecservices', 'monaoku');
        sys.addEdge('ecservices', 'monazon');

        sys.addEdge('monacoin', 'youtube');
        sys.addEdge('youtube', 'nekomasu');

        sys.addEdge('monacoin', 'chromeattachments');
        sys.addEdge('chromeattachments', 'monyachrome');
        sys.addEdge('chromeattachments', 'tipassist');

    })

})(this.jQuery)