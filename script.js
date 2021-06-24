function lovecalc(){
    var love1 =document.getElementById('fname').value;
    var love2 =document.getElementById('lname').value;
    console.log(typeof(love2))
    var peopleName=0
    var l1=love1.length;
    var l2=love2.length;
    if(l1 === 0 || l2 === 0)
    {
        $('#res').val("0 %");
    }
    else{
        love1.toLowerCase();
        love2.toLowerCase();
        for (let index = 0; index < love1.length; index++) {
            peopleName +=love1.charCodeAt(index);
        }
        for (let index = 0; index < love2.length; index++) {
            peopleName +=love2.charCodeAt(index);
        }
        var love="love";
        var sumdigits=0;
        var lovesum=love.charCodeAt(0)+love.charCodeAt(1)+love.charCodeAt(2)+love.charCodeAt(3);
        while(peopleName!=0){
            var d=peopleName%10;
            sumdigits +=d;
            peopleName/=10;
        }
        if(sumdigits>15){
            sumdigits = 15 -(sumdigits -15);
        }
        var percent=(sumdigits/15)*100;
        console.log(percent)
        percent=Math.round(percent)
        percent = percent+"%";
        
        setTimeout($('#res').val(percent),5000);
    }
}