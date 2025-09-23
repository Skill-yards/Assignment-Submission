
let income = document.getElementById("income");
let Expense = document.getElementById("expense");
let Balance = document.getElementById("balance");
let History = document.getElementById("history");
let description = document.getElementById("Description");
let show = document.getElementById("show");
const budget = [];

function update() {
  const amount = parseFloat(income.value);
  const desc = description.value.trim() || 'Income';
  budget.push({ type: 'income', amount: amount, desc: desc });
  income.value = '';
  description.value = '';
  show.textContent = `Income added: ₹${amount} - ${desc}`;
}

function expense() {
  let amount = parseFloat(Expense.value);
  let desc = description.value.trim() || 'Expense';
  budget.push({ type: 'expense', amount: amount, desc: desc });
  Expense.value = '';
  description.value = '';
  show.textContent = `Expense added: ₹${amount} - ${desc}`;
};
function viewBalance(){
  let balance = 0
  for(let t of budget){
    if(t.type ==="income") balance+=t.amount
    else balance-=t.amount
    
  }
 show.textContent=`your balance ${balance}` 

}

function viewHistory(){
  
  if (budget.length === 0) {
    show.textContent = "No transactions yet.";
    return;
  }

  let historyText = "Transaction History:\n";
  for (let i = 0; i < budget.length; i++) {
    historyText += `${budget[i].type.toUpperCase()} - ₹${budget[i].amount} - ${budget[i].desc}\n`;
  }
  show.textContent = historyText;


  


 

}