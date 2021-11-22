fetch('http://api_1:443').then(res => {
    console.log(res);
    return res.json();
}).then(res => {
    const h1 = document.querySelector('h1');
    h1.textContent = res.message;
});