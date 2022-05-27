
document.getElementById('login-btn').addEventListener('click', ()=> {
    var loginArea = document.querySelector('.login-area');
    var transactionArea = document.querySelector('.transaction-area');

    loginArea.style.display = 'none';
    transactionArea.style.display = 'flex';
})