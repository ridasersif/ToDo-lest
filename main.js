let title = document.getElementById('title');
let price= document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
//*************************************************************** */

//get total
function getTotal(){
    if(price.value!=''){
        let result=(+price.value + +taxes.value + +ads.value )
        - +discount.value;
        total.innerHTML = result;
        total.style.background='#040';
    }else{
        total.innerHTML='';
        total.style.background='#a00d02'

    } 
}
//*********************************************** */
//creat prodact
let dataPro;
if(localStorage.product!=null){
    dataPro=JSON.parse(localStorage.product)
}else{
    dataPro=[];
}
submit.onclick = function(){

    let newPro={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value
    }
    dataPro.unshift(newPro);
    //save localstorage
    localStorage.setItem('product', JSON.stringify(dataPro))
    console.log(dataPro)
    clearData();
    showData();
}
//******************************************************** */
// clear inputs
function clearData(){
    title.value=''
    price.value=''
    taxes.value=''
    ads.value=''
    discount.value=''
    count.value=''
    category.value=''
    total.innerHTML=''
     total.style.background='#a00d02'
}
//********************************************************** */
//read
function showData(){
    let table='';
    for(let i=0;i<dataPro.length;i++){
        table += `
        
         <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].category}</td>
                    <td><button onclick="updeteData(${i})" id="updete">updete</button></td>
                    <td><button onclick="delateData(${i})" id="delete">delate</button></td>
         </tr>
         `;
    }
   document.getElementById('tbody').innerHTML= table;
   let btnDelete=document.getElementById('deleteAll');
  
   if(dataPro.length > 0){
    btnDelete.innerHTML =`
    <button onclick="deleteAll()" >delet All</button>
      
    `  
   }else{
    btnDelete.innerHTML='';
   }
}
//*********************************************************** */
//delete
function delateData(i){
    dataPro.splice(i,1);
    localStorage.product=JSON.stringify(dataPro)  ;
    showData();
}
//************************************************* */
function deleteAll(){
    dataPro=[];
    localStorage.product=JSON.stringify(dataPro);
    showData();
}
//************************************************************ */
//update
function updeteData(){
    
}

// search
//clean data

