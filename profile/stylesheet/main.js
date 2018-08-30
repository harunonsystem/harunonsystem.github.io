//clipboard copy
var clipboard = new Clipboard('.btn');
clipboard.on('success', function(e){
    alert("コピー完了！");
    //console.log(e);
    e.clearSelection();
});
clipboard.on('error', function(e){
    alert('😨');
});