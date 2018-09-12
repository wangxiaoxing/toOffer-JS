# toOffer-JS
剑指offer js 版
(function (){
 
var addLarge = function(n1,n2){
var carry = 0;
var ret = "";
n1=n1.toString();
n2=n2.toString();
 
var len = Math.min(n1.length,n2.length);
var sln1 = n1.substr(n1.length - len,n1.length );
var sln2 = n2.substr(n2.length - len,n2.length );
 
for(var i = len;i > 0; i--)
{
 
var di = parseInt(sln1[i-1]);
var dj = parseInt(sln2[i-1]);
 
ret = (carry + di + dj)>= 10 ? ((carry + di + dj) - 10 + ret) : ((carry+di+dj) + ret);
 
carry = ((carry + di + dj) /10 ) | 0;
 
}
 
if(n1.length != n2.length)
{
if(n1.length > n2.length){
ret = addLarge(n1.substr(0,n1.length-len),carry.toString()) + ret;
}
else{
ret = addLarge(n2.substr(0,n2.length - len),carry.toString()) + ret;
}
 
return ret;
}
 
else{
if(carry> 0){
ret = carry+ ret;
}
return ret.toString();
}
 
};
 
var multiply = function(n1,n2){
var nstr1 = n1.toString();
var nstr2 = n2.toString();
 
var carry = 0;
var ret = "";
 
var di = 0;
var dj = 0;
var dig = "";
for(var i = nstr1.length - 1 ;i >= 0;i--)
{
 
var tmp = "";
var di = parseInt(nstr1[i]) ;
for(var j = nstr2.length - 1;j >= 0;j--)
{
var dj = parseInt(nstr2[j]);
var r = di*dj + carry;
 
if(r >= 10)  {
carry =(r / 10) | 0;
tmp = (r%10) + tmp;
}else{
carry=0;
tmp = r + tmp;
}
 
}
 
if(carry > 0){
tmp = carry.toString() + tmp;
carry = 0;
}
 
if(i < nstr1.length -1)
{
ret = addLarge (ret ,tmp + dig);
}
else{
ret = tmp;
}
 
dig += "0";
}
 
return ret;
};
 
 
var a = "1543843275857859592482498432243255";
var b = "1554335546546546662";
 
console.log(multiply(a,b));
console.log(parseInt(a)*parseInt(b));
 
