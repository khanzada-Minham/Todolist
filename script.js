let Addbuttontext = document.querySelector('.Add-button-text'),
footer = document.querySelector('.footer'),
inputItem = document.querySelector('.input-item'),
deletebutton = document.querySelectorAll('.delete-button'),
num = 1;
Addbuttontext.addEventListener('click',()=>{
    if(inputItem.value !== ''){
        let footerData = `<div class="footerContainer" id='item-${num}'>
        <p class="footer-text">${inputItem.value}</p>
        <div class="buttons">
            <button class="delete-button" onclick="deleteItems(${num})">Delete</button>
            <button class="edit-button" onclick='updateItems()'>Update</button>
        </div>
        </div>`
        footer.innerHTML += footerData;
        num ++
        inputItem.value = '';
    }

})

function deleteItems(num){
    let deleteData = document.getElementById(`item-${num}`);
    deleteData.remove()  
}

function updateItems(){
    let btn = event.target;
    let element = btn.parentElement.parentElement
    let item = element.querySelector('P');
    if(btn.innerText === 'Update'){
        item.innerHTML = `<input type="text" value="${item.innerText}" id="inputValues">`;
        btn.innerText = 'Save';
    } 
    else{
        let addinput = element.querySelector('#inputValues').value;
        item.innerText = addinput;
        btn.innerText = 'Update'
    }
}

