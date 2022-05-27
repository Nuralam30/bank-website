

// login button event
    const loginBtn = document.getElementById('login-btn');
    loginBtn.addEventListener('click', ()=> {
    const loginArea = document.querySelector('.login-area');
    const transactionArea = document.querySelector('.transaction-area');

    loginArea.style.display = 'none';
    transactionArea.style.display = 'block';
});


// deposite button event
    const depositeBtn = document.getElementById('deposite-btn');
    depositeBtn.addEventListener('click', ()=> {
    const depositeAmount = document.getElementById('deposite-amount').value;
    const depositeNumber = parseFloat(depositeAmount);

    updateSpanText('current-deposite', depositeNumber)
    updateSpanText('current-balance', depositeNumber);
    document.getElementById('deposite-amount').value = '';

    });
     
// withdraw button event
    const withdrawBtn = document.getElementById('withdraw-btn');
    withdrawBtn.addEventListener('click', ()=> {
    const withdrawAmount = document.getElementById('withdraw-amount').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    updateSpanText('current-withdraw', withdrawNumber)
    updateSpanText('current-balance', -1 * withdrawNumber);
    document.getElementById('withdraw-amount').value = '';

    });


    function updateSpanText(id, amount) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = amount + currentNumber;
        document.getElementById(id).innerText = totalAmount;
    }

 