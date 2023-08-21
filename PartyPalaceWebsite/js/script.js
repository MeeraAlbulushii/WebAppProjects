//nav scroll 

window.addEventListener('scroll', ()=>{
    let nav = document.getElementsByClassName('nav')[0]

    if(window.scrollY>=200){
        nav.style.width = "100%";
        nav.style.top= "0";
        // nav.style.width= "80px";
        nav.style.borderRadius = "0px"

    }else{
        nav.style.width = "70%";
        nav.style.top= "40px";
        nav.style.borderRadius = "20px"
        // nav.style.width= "80px";
    }
})

//sign up form 

let username = document.getElementById("uname");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let items = document.getElementById("items");
let quantity = document.getElementById("quantity");
let comment = document.getElementById("comment");
let address = document.getElementById("address");
let btn = document.getElementById("btn");
let arrOfProducts=[];

if(localStorage.getItem('products') !== null){
    arrOfProducts = JSON.parse(localStorage.getItem('products'))
    loopData();
}

btn.addEventListener('click', ()=>{
    let customerData = {
        uname: username.value,
        uemail: email.value,
        uphone: phone.value,
        uitems: items.value,
        uquantity: quantity.value,
        ucomment: comment.value,
        uaddress:address.value,
    };
    arrOfProducts.push(customerData);
    loopData();
    clearData();
    localStorage.setItem('products', JSON.stringify(arrOfProducts));
    }
)

function loopData(){
    let Data="";
    let count=1;
    for(let i =0 ; i < arrOfProducts.length; i++){
        Data += `
        <tr>
            <td>${count++}</td>
            <td>${arrOfProducts[i].uname}</td>
            <td>${arrOfProducts[i].uemail}</td>
            <td>${arrOfProducts[i].uphone}</td>
            <td>${arrOfProducts[i].uitems}</td>
            <td>${arrOfProducts[i].uquantity}</td>
            <td>${arrOfProducts[i].ucomment}</td>
            <td>${arrOfProducts[i].uaddress}</td>
            <td><button id="delBtn" onclick="deleteData(${i})">Cancel Order</button></td>
            <td><button id="upBtn" onclick="updateData(${i})">Edit Order</button></td>
        </tr>
        `;
    }
    document.getElementById("tablee").innerHTML= Data;
}

function deleteData(element){
    arrOfProducts.splice(element,1);
    loopData();
    localStorage.setItem('products', JSON.stringify(arrOfProducts))
}

let saveBtn = document.getElementById("saveBtn");
let y;
function updateData(indexedElement){
    y = indexedElement;
    username.value = arrOfProducts[indexedElement].uname;
    email.value = arrOfProducts[indexedElement].uemail;
    phone.value = arrOfProducts[indexedElement].uphone;
    items.value = arrOfProducts[indexedElement].uitems;
    quantity.value = arrOfProducts[indexedElement].uquantity;
    comment.value = arrOfProducts[indexedElement].ucomment;
    address.value = arrOfProducts[indexedElement].uaddress;
    btn.classList.toggle('show')
    saveBtn.classList.toggle('show')
}

saveBtn.addEventListener('click', ()=>{
    arrOfProducts[y].uname = username.value;
    arrOfProducts[y].uemail = email.value;
    arrOfProducts[y].uphone = phone.value;
    arrOfProducts[y].uitems = items.value;
    arrOfProducts[y].uquantity = quantity.value;
    arrOfProducts[y].ucomment = comment.value;
    arrOfProducts[y].uaddress = address.value;
    loopData();
    clearData();
    btn.classList.toggle('show')
    saveBtn.classList.toggle('show')
    localStorage.setItem('product', JSON.stringify(arrOfProducts));
})
function clearData(){
    username.value = "";
    email.value = "";
    phone.value="";
    items.value = "";
    quantity.value = "";
    comment.value = "";
    address.value="";
}

