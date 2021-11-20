let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
 let item = document.createElement('div');
 item.classList.add('item');
 item.id = 'item-' + order;
 item.draggable = true;
 item.addEventListener('dragstart', (event) => {
   event.dataTransfer.setData('text', event.target.id);
   event.target.id = 'text';
  });
 item.addEventListener('dragend', event =>  event.dataTransfer.clearData());
 
 let input = document.createElement('input');
 input.appendChild(item);

 let save_btn = document.createElement('button');
 save_btn.innerHTML = 'save';


 save_btn.addEventListener('click',()=>{
   error.innerHTML = '';
   if(input.value !== ''){
     order += 1;
     item.innerHTML = input.value;
     adding = false;
   } else{
    error.innerHTML = message;
   }
 })
 save_btn.appendChild(item);
 return item;
};

document.querySelectorAll('.drop').forEach(element => {
});