let bill =document.getElementById("tip-Cal");
let percentTip=document.getElementById("tip-Percent");
let Cal=document.getElementById("calculate")
let finalBill=document.getElementById("finalBill")

let tipPercent=function(bill,percentTip){
    let bill1=parseFloat(bill.value);
    let tip2 = percentTip.value === "" ? 15 : parseFloat(percentTip.value);


    if(isNaN(bill1) || isNaN(tip2)){
          finalBill.textContent="enter valid number"
          return;}
          if(bill1<=0||tip2<=0){
            finalBill.textContent="enter valid number"
            return;

          }else{

 let FinalBill=Math.floor((bill1+(bill1*tip2)/100).toFixed(2));
 finalBill.textContent=`your bill after Tip: ${FinalBill} ₹ `
          }}

