module.exports = {
      add:function(num1, num2) { 
           console.log(num1 +num2)
      },
      multiply:function(num1, num2) {
           console.log(num1*num2)
      },
      square:function(num) {
            console.log(num*num) 
      },
      random:function(num1, num2) {
        if(num1==num2){
            console.log(num1);
        }
        else if(num1>num2){
              console.log(Math.floor(Math.random() * (num1 - num2) + num2)) ;
        }
        else{
            console.log(Math.floor(Math.random() * (num2 - num1) + num1))
        }
      }
    };