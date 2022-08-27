document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawFeild = document.getElementById('withdraw-feild');
    const withdrawAmountString = withdrawFeild.value;
    const withdrawAmount = parseFloat(withdrawAmountString);


    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    const currentWithdaw = withdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWithdaw;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    withdrawFeild.value = ' ';
})