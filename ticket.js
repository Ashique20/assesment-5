const items = document.getElementsByClassName('choose-ticket');

function handleClick(event) {
  event.target.classList.remove('bg-[#C2C3C4]');
  event.target.classList.add('bg-green-500');
  event.target.classList.add('disabled');


  const seat = document.getElementById('seat');
  const seatToNumber = parseInt(seat.innerText);
  const countSeat = seatToNumber + 1;
  seat.innerText = countSeat;

  const seatLeft = document.getElementById('left-seat');
  const seatLeftToNumber = parseInt(seatLeft.innerText);
  const countSeatLeft = seatLeftToNumber - 1;
  seatLeft.innerText = countSeatLeft;

  

  if (countSeat === 4) {
    document.getElementById('apply-label').classList.remove('disabled')
    for (item of items) {
      item.removeEventListener('click', handleClick);
    }
  }

  total('total-price')
  total('grand-total')


const ticketDiv = document.getElementById('ticket-name')
 const newUl =  document.createElement('ul')
 newUl.classList.add('flex', 'items-center', 'gap-20', 'justify-center','mt-5')



 const liInUl1 = document.createElement('li')
 liInUl1.innerText =event.target.innerText
 newUl.appendChild(liInUl1)

 const liInUl2 = document.createElement('li')
 liInUl2.innerText ='Economy'
 newUl.appendChild(liInUl2)

 const liInUl3 = document.createElement('li')
 liInUl3.innerText ='550'
 newUl.appendChild(liInUl3)




 ticketDiv.appendChild(newUl)


}

for (item of items) {
  item.addEventListener('click', handleClick);
}


document.getElementById('phone').addEventListener('keyup',function getKeyBoard(event){
  const inputValue = event.target.value
  for(item of items){
    if(item.classList.contains('disabled') && inputValue){
     const nextButton = document.getElementById('next-button')
     nextButton.classList.remove('disabled')
    }
  }

 
})


document.getElementById('next-button').addEventListener('click', function(){
 addHide('banner')
  addHide('available-section')
  addHide('paribahan-section')
  addHide('ticket-section')
  addHide('coupon')
  addHide('header')
  addHide('footer')
  removeHide('success-card')
 

 
})





document.getElementById('apply-button').addEventListener('click', function(){
  const applyInput = document.getElementById('apply-input');
 
let inputValue = applyInput.value

  if(inputValue == 'NEW15' || inputValue == 'Couple 20'){
    document.getElementById("grand-ul").classList.add('hidden')
    if(inputValue == 'NEW15' ){
     
      discount15('total-price')
      
    }
    if(inputValue == 'Couple 20'){
      
      discount20('total-price')
      
    }
  }
  
  else{
    const h1 =  document.createElement('h1')
    h1.classList.add('text-red-500','font-bold','mt-2','ml-10')
   
    h1.innerText = 'Please add a valid coupon'

    console.log(h1)
    const grandUl = document.getElementById('grand-ul')
    grandUl.appendChild(h1)
  }
  

  
});


document.getElementById('buy-ticket').addEventListener('click', function() {
  const ticketCounter = document.getElementById('ticket-counter');
  ticketCounter.scrollIntoView({ behavior: 'smooth' });
});




