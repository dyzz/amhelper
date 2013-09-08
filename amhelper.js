var body = document.body.innerHTML;

var ooxx = body.match(/([oO0xX]{32})/g)[0];

var new_ooxx = ooxx.match(/.{1,4}/g).join("|");

var xs = ooxx.match(/[xX]/g);
var count_x = xs ? xs.length : 0;
var count_o = 32-count_x;

var info = count_x + "X, " + count_o + " O";

var output = new_ooxx.replace(/[xX]/g,"<font color='red'>X</font>");


document.body.innerHTML=body.replace(ooxx,output+"</br>"+info);
