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
                    if (node.name == "bitzeny"){
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/logo.png";
                            ctx.drawImage(img, pt.x - w / 0.7, pt.y - w / 0.7, 160, 160);
                    }
                    else if (node.name == "monya") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/monya.png";
                            ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);    
                    }
                    else if (node.name == "youtube") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/Youtube.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "nemchannel") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/nemchannel.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);
                    }
                    else if (node.name == "zenyhime") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/zenyhime.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);
                    }
                    else if (node.name == "zenytips") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/zenytips.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);
                    }
                    else if (node.name == "twitter") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/twitter.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 50, 40);
                    }
                    else if (node.name == "odairoid_001") {
                        img.src = "../monacoin/images/odairoid_001.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);
                    }
                    else if (node.name == "ecservices") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/cart.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "fairzenytradeshop") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/fairzenytradeshop.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);
                    }
                    else if (node.name == "zenyportal") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/zenyportal.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 180, 80);
                    }
                    else if (node.name == "stocksexchange") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/stocksexchange.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 160, 80);
                    }
                    else if (node.name == "tradesatoshi") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/tradesatoshi.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 180, 60);
                    }
                    else if (node.name == "c-cex") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/c-cex.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 160, 60);
                    }
                    else if (node.name == "cryptobridge") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/cryptobridge.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "contest") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/contest.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 130, 80);
                    }
                    else if (node.name == "wallet") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/wallet.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 70, 70);
                    }
                    else if (node.name == "map") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/mappin.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "znymap") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/map.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "jaguchi") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/jaguchi.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }
                    else if (node.name == "microzeny") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/microzeny.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 60, 40);
                    }
                    else if (node.name == "sukedachizeny") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/sukedachizeny.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);
                    }
                    else if (node.name == "ecservices") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/cart.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, w, w);
                    }                         
                    else if (node.name == "tipmusic") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/Tipmusic.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 220, 50);
                    }
                    else if (node.name == "tipphoto") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/Tipphoto.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 150, 50);
                    }
                    else if (node.name == "tipvideo") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/Tipvideo.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2,220, 90);
                    }
                    else if (node.name == "tipnovel") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/Tipnovel.png";
                        ctx.drawImage(img, pt.x - w /2, pt.y - w /2, 180, 70);
                    }
                    else if (node.name == "znyforam") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/znyforam.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 120, 50);
                    }
                    else if (node.name == "chromeattachments") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/Chromeattachment.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 4, 80, 80);
                    }
                    else if (node.name == "monyachrome") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/monya.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "tipassist") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/tipassist.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 80, 80);
                    }
                    else if (node.name == "zenythrow") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/zenythrow.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "wallet") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/wallet.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 100, 100);
                    }
                    else if (node.name == "pan") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/pan.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 60, 60);
                    }
                    else if (node.name == "bitzenywallet") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/bitzenywallet.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 160, 60);
                    }
                    else if (node.name == "monya") {
                        img.src = "https://harunonsystem.github.io/illustmap/bitzeny/images/monya.png";
                        ctx.drawImage(img, pt.x - w / 2, pt.y - w / 2, 50, 50);
                    }
                    else if (node.data.who == "tradeplaces") {
                        ctx.fillStyle = "rgba(0,0,255,0)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
                    }
                    else if (node.data.who == "tipservices") {
                        ctx.fillStyle = "rgba(0,0,255,0)"
                        gfx.oval(pt.x - w / 2, pt.y - w / 2, w, w, { fill: ctx.fillStyle })
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
        sys.addNode('bitzeny', { url: "https://bitzeny.tech" });
        sys.addNode('stocksexchange', { url: "https://stocks.exchange/" });
        sys.addNode('c-cex', { url: "https://c-cex.com/" });
        sys.addNode('tradesatoshi', { url: "https://tradesatoshi.com/" });
        sys.addNode('cryptobridge', { url: "https://crypto-bridge.org/" });
        sys.addNode('tradeplaces', {who: "tradeplaces"});

        sys.addNode('znyforam', { url: 'https://bitzeny.info/' });

        sys.addNode('contest', { url: 'https://bitzeny.world/' });

        sys.addNode('zenythrow', {url: 'https://zeny-throw.takutyamu.net/'});

        sys.addNode('map', {});
        sys.addNode('znymap', { url: 'https://www.google.com/maps/d/u/0/viewer?mid=1-5CuiEKDouUAzQZmkixuLbD9p9cRejmK&ll=38.55419507225843%2C137.4588139&z=6' });

        sys.addNode('twitter', {});
        sys.addNode('zenyhime', { url: 'https://twitter.com/zenyhime' });
        sys.addNode('zenytips', { url: 'https://twitter.com/zenytips' });
        sys.addNode('odairoid_001', {url: 'https://twitter.com/odairoid_001'});

        sys.addNode('wallet', {});
        sys.addNode('bitzenywallet', { url: 'https://bitzeny.jp/' });
        sys.addNode('pan', {url: "https://www.panwallet.com/"});
        sys.addNode('monya', {url: 'https://monya-wallet.github.io/'});

        sys.addNode('youtube', {});
        sys.addNode('nemchannel', { url: 'https://www.youtube.com/channel/UC7xyzq_Hd72-IbJVoz4DSrQ' });

        sys.addNode('microzeny', { url: "https://microzeny.com/" });
        sys.addNode('sukedachizeny', { url: "https://zeny.bex.jp/" });
        sys.addNode('jaguchi', {});

        sys.addNode('ecservices', {});
        sys.addNode('fairzenytradeshop', { url: "https://fairzenytradeshop.wixsite.com/fzts" });
        sys.addNode('zenyportal', { url: "https://zenypota.net/" });

        sys.addNode('tipservices', {who:"tipservices"});
        sys.addNode('tipmusic', { url: "http://retoruto.php.xdomain.jp/" });
        sys.addNode('tipvideo', { url: "https://www.tip-video.net/index.php" });
        sys.addNode('tipphoto', { url: "http://tipphoto.takutyamu.net/" });
        sys.addNode('tipnovel', { url: "https://tipnovel.taillook.tech/" });

        sys.addNode('chromeattachments', {});
        sys.addNode('monyachrome', { url: "https://chrome.google.com/webstore/detail/%E3%82%82%E3%81%AB%E3%82%83-bitzeny-bitzeny-wall/lgiengglndmdhgdbdcknhgjnbefhnkio/reviews" });
        sys.addNode('tipassist', { url: "https://chrome.google.com/webstore/detail/tipassist/jheabpiaknlkageplpdbpggnjkikipcf?hl=ja" });

        sys.addEdge('bitzeny', 'twitter');
        sys.addEdge('twitter', 'zenyhime');
        sys.addEdge('twitter', 'zenytips');
        sys.addEdge('twitter', 'odairoid_001');

        sys.addEdge('bitzeny', 'contest');

        sys.addEdge('bitzeny', 'jaguchi');
        sys.addEdge('jaguchi', 'microzeny');
        sys.addEdge('jaguchi', 'sukedachizeny');

        sys.addEdge('bitzeny', 'tipservices');
        sys.addEdge('tipservices', 'tipmusic');
        sys.addEdge('tipservices', 'tipphoto');
        sys.addEdge('tipservices', 'tipnovel');
        sys.addEdge('tipservices', 'tipvideo');
        sys.addEdge('tipservices', 'zenythrow');

        sys.addEdge('bitzeny', 'map');
        sys.addEdge('map', 'znymap');

        sys.addEdge('bitzeny', 'tradeplaces');
        sys.addEdge('tradeplaces', 'stocksexchange');
        sys.addEdge('tradeplaces', 'c-cex');
        sys.addEdge('tradeplaces', 'cryptobridge');
        sys.addEdge('tradeplaces', 'tradesatoshi');

        sys.addEdge('bitzeny', 'znyforam');

        sys.addEdge('bitzeny', 'ecservices');
        sys.addEdge('ecservices', 'zenyportal');
        sys.addEdge('ecservices', 'fairzenytradeshop');

        sys.addEdge('bitzeny', 'youtube');
        sys.addEdge('youtube', 'nemchannel');
        
        sys.addEdge('bitzeny', 'wallet');
        sys.addEdge('wallet', 'bitzenywallet');
        sys.addEdge('wallet', 'monya');
        sys.addEdge('wallet', 'pan');

        sys.addEdge('bitzeny', 'chromeattachments');
        sys.addEdge('chromeattachments', 'monyachrome');
        sys.addEdge('chromeattachments', 'tipassist');

    })
})(this.jQuery)