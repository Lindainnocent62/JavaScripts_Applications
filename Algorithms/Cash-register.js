function checkCashRegister(price, cash, cid) {

  let totalCid = parseFloat(cid.reduce((total,item)=>total+item[1], 0).toFixed(2));
  let balanceDue = parseFloat((cash - price).toFixed(2));
  let currency = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
   ];
  const OPEN = {status: "OPEN", change: []}

  if(totalCid < balanceDue) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  if(totalCid === balanceDue) {
    return {status: "CLOSED", change: cid};
  }
//if total amount in cid is greater than the balance due 
  for(let key in currency) {
    let unit = currency[key][0];
    let value = currency[key][1];
    let totalCash = cid.find(item => item[0] === unit)[1];

    if(balanceDue > value && balanceDue > totalCash ) {
       // if due balance is bigger than available balance
      balanceDue -= totalCash;
      OPEN.change.push([unit, totalCash]);
    }else if(balanceDue > value && totalCash > balanceDue) { 
      // if there are more balance than due balance
      let pay = Math.floor(balanceDue / value) * value;
      balanceDue -= pay;
      balanceDue = parseFloat(balanceDue.toFixed(2));
      OPEN.change.push([unit, pay]);
    }
  }

  if(balanceDue > 0) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  
  return OPEN;

}
