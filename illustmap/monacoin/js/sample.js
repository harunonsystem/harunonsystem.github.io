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
                
                particleSystem.eachNode(function (node, pt) {
                    if (node.data.img_url) {
                        node.data.img = new Image();
                        node.data.img.src = node.data.img_url;
                    }
                    node.isHit = function(screenPos) {
                        if (!this.data.img_url) {
                            return false;
                        }
                        let label = this.name || ""
                        let w = ctx.measureText("" + label).width + 20
                        let width = this.data.width || w;
                        let height = this.data.height || w;
                        let nodeScreenPos = particleSystem.toScreen(this.p);
                        if (nodeScreenPos.x - width/2  < screenPos.x && screenPos.x < nodeScreenPos.x + width/2
                         && nodeScreenPos.y - height/2 < screenPos.y && screenPos.y < nodeScreenPos.y + height/2) {
                             return true;
                        }
                        return false;
                    };
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
                    var label = node.name || ""
                    var w = ctx.measureText("" + label).width + 20
                    if (!("" + label).match(/^[ \t]*$/)) {
                        pt.x = Math.floor(pt.x)
                        pt.y = Math.floor(pt.y)
                    } else {
                        label = null
                    }
                    
                    if (node.data.img) {
                        let width = node.data.width || w;
                        let height = node.data.height || w;
                        ctx.drawImage(node.data.img, pt.x - width / 2, pt.y - height / 2, width, height);
                    }
                    //images screen
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
                            console.log(pos);
                            dragged = particleSystem.nearest(pos);
                            
                            if (dragged.node.isHit(pos)) {
                                if (dragged.node.data.url) {
                                    console.log(dragged.node.data.url);
                                    window.open(dragged.node.data.url);
                                }

                            }

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
                        dragged = particleSystem.nearest(pos);

                        if (!dragged && dragged.node == null){
                            document.body.style.cursor = "";
                            return;
                        }

                        if (dragged.node.isHit(pos)) {
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
        sys.addNode('monacoin', { url: "https://monacoin.org", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/monacoin.png", width : 200, height : 200, });
        sys.addNode('bitbank', { url: "https://bitbank.cc", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/bitbank.png", });
        sys.addNode('bitflyer', { url: "https://bitflyer.jp/ja/", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/bitflyer.png", width : 100, height : 100, });
        sys.addNode('zaif', { url: "https://zaif.jp/", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/zaif.png", width : 80, height : 80, });
        sys.addNode('cryptobridge', { url: "https://crypto-bridge.org/", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/cryptobjige.png", });
        sys.addNode('tradeplaces', {who: "tradeplaces"});

        sys.addNode('askmona', { url: 'https://askmona.org', img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/askmona.png", width : 100, height : 50, });

        sys.addNode('monappy', { url: 'https://monappy.jp', img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/monappy.png", width : 190, height : 50, });

        sys.addNode('map', {});
        sys.addNode('monamap', { url: 'https://www.google.com/maps/d/viewer?mid=13dW7cDC7eKC-OYqf8xhTTejkooId-ueF&ll=35.06939124071531%2C135.444886&z=5', img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/monamap.png", width : 100, height : 100, });

        sys.addNode('twitter', { img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/aoitori.png", width : 70, height : 70,});
        sys.addNode('monacoinchan', { url: 'https://twitter.com/tipmona', img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/monacoinchan.png", width : 120, height : 120, });

        sys.addNode('youtube', { img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/Youtube.png", });
        sys.addNode('nekomasu', { url: 'https://www.youtube.com/channel/UCt8tmsv8kL9Nc1sxvCo9j4Q', img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/nekomasu.png", width : 120, height : 120, });

        sys.addNode('muratamona', { url: "http://murata-mona.info/", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/muratamona.png", width : 280, height : 180, });
        sys.addNode('plicy', { url: "https://plicy.net/", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/plicy.png", width : 200, height : 50, });
        sys.addNode('monagame', { img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/game.png", });

        sys.addNode('monaparty', { url: "https://wallet.monaparty.me/#", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/monaparty.png", width : 100, height : 100, });
        sys.addNode('monacard', { url: "https://card.mona.jp", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/monacard.png", width : 100, height : 100, });
        sys.addNode('monalogin', { url: "https://mona-login.com/", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/monalogin.png", width : 150, height : 80, });

        sys.addNode('monya', { url: "https://missmonacoin.github.io/monya/wallet/", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/monya.png", width : 100, height : 100, });
        sys.addNode('wallet', {img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/wallet.png", width : 70, height : 70,});

        sys.addNode('ecservices', {img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/cart.png", width : 100, height : 100,});
        sys.addNode('monazon', { url: "https://monazon.jp", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/monazon.png", width : 300, height : 110, });
        sys.addNode('monaoku', { url: "https://monaoku.xyz/", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/monaoku.png", width : 220, height : 100, });

        sys.addNode('tipservices', {who:"tipservices"});
        sys.addNode('tipmusic', { url: "http://retoruto.php.xdomain.jp/", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/tipmusic.png", width : 220, height : 50, });
        sys.addNode('tipvideo', { url: "https://www.tip-video.net/index.php", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/tipvideo.png", width : 150, height : 90, });
        sys.addNode('tipphoto', { url: "http://tipphoto.takutyamu.net/", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/tipphoto.png", width : 150, height : 50, });
        sys.addNode('tipnovel', { url: "https://tipnovel.taillook.tech/", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/tipnovel.png", width : 150, height : 90, });

        sys.addNode('chromeattachments', { img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/chrome.png", width : 100, height : 100, });
        sys.addNode('monyachrome', { url: "https://chrome.google.com/webstore/detail/%E3%82%82%E3%81%AB%E3%82%83-monacoin-bitzeny-wall/lgiengglndmdhgdbdcknhgjnbefhnkio/reviews", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/monya.png", width : 100, height : 100, });
        sys.addNode('tipassist', { url: "https://chrome.google.com/webstore/detail/tipassist/jheabpiaknlkageplpdbpggnjkikipcf?hl=ja", img_url : "https://harunonsystem.github.io/illustmap/monacoin/images/tipassist.png", });

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
        sys.addEdge('tipservices', 'tipphoto');
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