# これはなに
仮想通貨が使えるWebサービスや情報を視覚的にまとめたイラストマップです（手動更新）🎈

### ライブラリ
JavaScript
- arbor.js(http://arborjs.org/)

### 対応仮想通貨
- Monacoin（https://harunonsystem.github.io/illustmap/monacoin/ ）
- Bitzeny （https://harunonsystem.github.io/illustmap/bitzeny/ ）
- Kizunacoin（https://harunonsystem.github.io/illustmap/kizuna/ ）

### Node追加

`js/sample.js`

50行目あたり
```
var img = new Image();
if (node.name == "monacoin"){
img.src = "https://harunonsystem.github.io/illustmap/monacoin/images/monacoin.png";
ctx.drawImage(img, pt.x - w / 0.7, pt.y - w / 0.7, 200, 200);
}
```
`node.name` & `img.src`を設定

362行目あたり
```
sys.addNode('monacoin', { url: https://monacoin.org" });
```
`sys.addNode` にNodeNameとURL設定

422行目あたり
```
sys.addEdge('monacoin', 'wallet');
```
`sys.addEdge`にNode同士を繋ぐ（この場合、`monacoin` と `wallet`を）

ex) 取引所
```
sys.addEdge('monacoin', 'tradeplaces');
sys.addEdge('tradeplaces', 'bitbank');
sys.addEdge('tradeplaces', 'bitflyer');
sys.addEdge('tradeplaces', 'cryptobridge');
sys.addEdge('tradeplaces', 'zaif');
```
`monacoin`と`tradeplaces`を繋いで各取引所をそれに繋ぐ

ので

追加したいものの
- URL
- 画像URL

をこちらに（https://github.com/harunonsystem/harunonsystem.github.io/pulls ）いただけたら追加します🙏


### 連絡はこちらまで

- Twitter(https://twitter.com/harunon_system/ )
- Keybase(https://keybase.io/harunon/ )
