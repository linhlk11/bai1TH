const text = document.getElementById('name-display');
const input = document.getElementById('name');
const btn = document.getElementById('btn');
const deleteBtn = document.getElementById('delete-btn'); 

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    text.innerText = ""; 
}

const cookie = document.cookie;
const split = cookie.split(';');

split.forEach((item) => {
    const cookieSplit = item.split('=');
    if (cookieSplit[0] === 'name' && cookieSplit[1]) {
        text.innerText = `Xin chao, ${cookieSplit[1]}`;
    }
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const value = input.value;
    document.cookie = `name=${value}`;
});

deleteBtn.addEventListener('click', () => {
    deleteCookie('name');
});