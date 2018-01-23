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
                    //images screen
                    var img =new Image();
                    if (node.name == "monacoin"){
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monacoin.png";
                        ctx.drawImage(img, pt.x - w / 3, pt.y - w / 3 , 500, 500);
                    }
                    else if (node.name == "monya") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monya.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "twitter") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/aoitori.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "youtube") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/Youtube.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "nekomasu") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/nekomasu.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "monacoinchan") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monacoinchan.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "ecservices") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/cart.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "monazon") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monazon.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 300, 110);
                    }
                    else if (node.name == "monaoku") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monaoku.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 220, 100);
                    }
                    else if (node.name == "tradeplaces") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/tradeplaces.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "bitbank") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/bitbank.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "zaif") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/zaif.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
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
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 200, 200);
                    }
                    else if (node.name == "wallet") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/wallet.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "map") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/map_pointa.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "monamap") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monamap.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
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
                    else if (node.name == "tipservices") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/tipservices.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "tipmusic") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/tipmusic.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 300, 50);
                    }
                    else if (node.name == "tipphoto") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/tipphoto.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 300, 50);
                    }
                    else if (node.name == "tipvideo") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/tipvideo.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 300, 180);
                    }
                    else if (node.name == "tipnovel") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/tipnovel.png";
                        ctx.drawImage(img, pt.x - w /2, pt.y - w /2, 300, 180);
                    }
                    else if (node.name == "askmona") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/askmona.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 300, 180);
                    }
                    else if (node.name == "chromeattachments") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/chrome.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "monyachrome") {
                        img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monya.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
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
                    /*addnode color 
                    if (node.data.who == "mona") {
                        ctx.fillStyle = "rgba(150,5,10,0.666)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "tradeplace") {
                        ctx.fillStyle = "rgba(0,20,150,0.666)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "wallet") {
                        ctx.fillStyle = "rgba(246,168,37,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "ec") {
                        ctx.fillStyle = "rgba(168,122,255,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "tipservice") {
                        ctx.fillStyle = "rgba(147,193,238,1)"
                         gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "youtube") {
                        ctx.fillStyle = "rgba(246,35,0,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "twitter") {
                        ctx.fillStyle = "rgba(0,183,255,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "monacoinchan") {
                        ctx.fillStyle = "rgba(0,183,255,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "tradeplaces") {
                        ctx.fillStyle = "rgba(0,20,150,0.666)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "askmona") {
                        ctx.fillStyle = "rgba(0,204,35,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "nekomasu") {
                        ctx.fillStyle = "rgba(246,35,0,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "game") {
                        ctx.fillStyle = "rgba(0,132,255,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }                        
                    else if (node.data.who == "chromeattachement") {
                        ctx.fillStyle = "rgba(0,112,255,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }   
                    else if (node.data.who == "map") {
                        ctx.fillStyle = "rgba(47,144,25,1)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }   
                    else if (node.data.who == "monappy") {
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
                var handler = {
                    clicked: function (e) {
                        var pos = $(canvas).offset();
                        _mouseP = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)
                        dragged = particleSystem.nearest(_mouseP);

                        if (dragged && dragged.node !== null) {
                            dragged.node.fixed = true
                        }

                        $(canvas).bind('mousemove', handler.dragged)
                        $(window).bind('mouseup', handler.dropped)

                        return false
                    },
                    dragged: function (e) {
                        var pos = $(canvas).offset();
                        var s = arbor.Point(e.pageX - pos.left, e.pageY - pos.top)

                        if (dragged && dragged.node !== null) {
                            var p = particleSystem.fromScreen(s)
                            dragged.node.p = p
                        }

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

            },

        }
        return that
    }

    $(document).ready(function () {
        var sys = arbor.ParticleSystem(300, 900, 0.8)
        sys.parameters({ gravity: true })
        sys.renderer = Renderer("#viewport")
        sys.addNode('monacoin', { who: "mona" });
        sys.addNode('bitbank', { who: "tradeplace" });
        sys.addNode('bitflyer', { who: "tradeplace" });
        sys.addNode('zaif', { who: "tradeplace" });
        sys.addNode('cryptobridge', { who: "tradeplace" });
        sys.addNode('tradeplaces', { who: "tradeplace" });

        sys.addNode('askmona', { who: 'askmona' });

        sys.addNode('monappy', { who: 'monappy' });

        sys.addNode('map', { who: 'map' });
        sys.addNode('monamap', { who: 'map' });

        sys.addNode('twitter', { who: 'twitter' });
        sys.addNode('monacoinchan', { who: 'twitter' });

        sys.addNode('youtube', { who: 'nekomasu' });
        sys.addNode('nekomasu', { who: 'nekomasu' });

        sys.addNode('muratamona', { who: "game" });
        sys.addNode('plicy', { who: "game" });
        sys.addNode('monagame', { who: "game" });

        sys.addNode('monaparty', { who: "token" });
        sys.addNode('monacard', { who: "token" });
        sys.addNode('monalogin', { who: "token" });

        sys.addNode('monya', { who: "wallet" });
        sys.addNode('wallet', { who: "wallet" });

        sys.addNode('ecservices', { who: "ec" });
        sys.addNode('monazon', { who: "ec" });
        sys.addNode('monaoku', { who: "ec" });

        sys.addNode('tipservices', { who: "tipservice" });
        sys.addNode('tipmusic', { who: "tipservice" });
        sys.addNode('tipvideo', { who: "tipservice" });
        sys.addNode('tipphoto', { who: "tipservice" });
        sys.addNode('tipnovel', { who: "tipservice" });

        sys.addNode('chromeattachments', { who: "chromeattachement" });
        sys.addNode('monyachrome', { who: "chromeattachement" });
        sys.addNode('tipassist', { who: "chromeattachement" });

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