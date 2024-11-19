document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('sub-email').value;
    var name = document.getElementById('sub-name').value;
    var phone = document.getElementById('sub-phone').value;
    var date = document.getElementById('sub-date').value;
    
    if (!email || !name || !phone || !date) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Пожалуйста, введите корректный email.');
        return;
    }

    var output = `
        <h3>Вы подписались!</h3>
        <p>Email: ${email}</p>
        <p>Имя: ${name}</p>
        <p>Телефон: ${phone}</p>
        <p>Дата рождения: ${date}</p>
    `;
    
    document.getElementById('form-output').innerHTML = output;
});

const logo = document.querySelector('.logo');
logo.addEventListener('mouseover', function() {
    logo.style.transform = 'scale(1.2)';
    logo.style.transition = 'transform 0.3s ease';
});

logo.addEventListener('mouseout', function() {
    logo.style.transform = 'scale(1)';
});

const btn1 = document.querySelector('.btn1');
btn1.addEventListener('mouseover', function() {
    btn1.style.transform = 'translateX(20px)';
    btn1.style.transition = 'transform 0.3s ease';
});

btn1.addEventListener('mouseout', function() {
    btn1.style.transform = 'translateX(0)';
});