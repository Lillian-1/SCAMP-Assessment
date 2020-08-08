var a = 0;
var b = 1;
result = b;

for(var i= 1; i <=10; i++){
    document.write(result +"<br>");
    result = a+b;
    a=b;
    b=result;
}