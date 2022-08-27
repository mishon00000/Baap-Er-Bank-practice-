document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositFeild = document.getElementById('deposit-feild');
    const newDepositAmountString = depositFeild.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentAmount = newDepositAmount + previousDepositTotal;
    depositTotalElement.innerText = currentAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    const newBalanceTotal = balanceTotal + currentAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    depositFeild.value = ' ';
})