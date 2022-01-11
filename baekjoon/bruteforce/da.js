var price = [13,7,3,7,5,16,12];
var answer = [];
    var num = 0;
    for(var i = 0; i < price.length; i++){
        for(var j = 1; j <= price.length; j++){
            if(price[j] > price[i]){
                num++;
                answer[i] = num;
                num = 0;
                break;
            }else{
                num++;
                answer[i] = -1;
            }
        }
    }
    console.log(answer)





