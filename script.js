const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phn = phone.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    let x=0;


    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else if (usernameValue.length < 5 ) {
        setError(username, 'Name must be at least 5 character.')
    } else {
        setSuccess(username);
        x++;
    }
    

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
        x++;
    }

    if(phn === '') {
        setError(phone, 'Phone Number is required');
    } else if(phn === '123456789'){
        setError(phone, 'Phone Number should not be 123456789');
    } else if (phn.length < 10 ) {
        setError(phone, 'Phone Number must be at least 10 character.')
    } else {
        setSuccess(phone);
        x++;
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if(passwordValue === 'password'){
        setError(password, 'Password should not be password');
    } else if(password === usernameValue){
        setError(password, 'Password should not be Name');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
        x++;
    }

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        x++;
    }

    if(x === 5){
    alert("Succesfully registered on this Site");
    }

};

