// Initialize arr with items from localStorage if available
let arr = JSON.parse(localStorage.getItem('items')) || [];

document.getElementById('btn').addEventListener('click', () => {
    let value = document.getElementById('value').value;
    let check = value.split(' ');
    let validate = check[0].toLowerCase();
    if (validate == 'add') {
        addItem(check[1]);
    } else if (validate == "remove") {
        removeItem(check[1]);
    } else if (validate == 'getlist') {
        getList();
    } else {
        alert("Please use 'Add item' or 'Remove item'");
    }
    document.getElementById('value').value = '';
});

function addItem(name) {
    if (!arr.includes(name)) {
        arr.push(name);
    } else {
        alert('Product is already exist');
    }
    localStorage.setItem('items', JSON.stringify(arr));
}

function removeItem(name) {
    const index = arr.indexOf(name);
    if (index > -1) {
        arr.splice(index, 1);
    }
    localStorage.setItem('items', JSON.stringify(arr));
}

function getList() {
    let list = document.getElementById('list');
    list.innerHTML=''
    arr.forEach(element => {
        
        list.innerHTML += `<li>${element}</li>`; 
    });
  
}
