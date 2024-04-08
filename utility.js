function total(element) {

    const total = document.getElementById(element)
    const totalToNumber = parseInt(total.innerText)
    const countTotal = totalToNumber + 550
    total.innerText = countTotal
  }

  function addHide(element){
    document.getElementById(element).classList.add('hidden')

  }
  function removeHide(element){
    document.getElementById(element).classList.remove('hidden')

  }


  function countSeat (element){
    const seat = document.getElementById(element);
    const seatToNumber = parseInt(seat.innerText);
    const countSeat = seatToNumber + 1;
    seat.innerText = countSeat;
  }
  

function countLeftSeat(element){
  const seatLeft = document.getElementById(element);
  const seatLeftToNumber = parseInt(seatLeft.innerText);
  const countSeatLeft = seatLeftToNumber - 1;
  seatLeft.innerText = countSeatLeft;
}

function discount15(element){
  const totalPrice = document.getElementById(element)
  const innerText = parseInt(totalPrice.innerText)
  const discount = innerText * 15/100


 const li = document.createElement('li')
 li.innerText = 'Discount Price'
 const li2 = document.createElement('li')
 li2.innerText = discount
 const totalUl = document.getElementById('total-div')
 totalUl.classList.add('font-bold')
 const numberPrice = document.getElementById('number-price')
 numberPrice.classList.add('font-bold')
 totalUl.appendChild(li)
 numberPrice.appendChild(li2)
 const grandTotal = document.getElementById('grand-total')
 const grandTotalInnerText = parseInt(grandTotal.innerText)
 const minusDiscount = grandTotalInnerText - discount
 grandTotal.innerText = minusDiscount
 return grandTotal
}
 
function discount20(element){
  const totalPrice = document.getElementById(element)
  const innerText = parseInt(totalPrice.innerText)
  const discount = innerText * 20/100


 const li = document.createElement('li')
 li.innerText = 'Discount Price'
 const li2 = document.createElement('li')
 li2.innerText = discount
 const totalUl = document.getElementById('total-div')
 totalUl.classList.add('font-bold')
 const numberPrice = document.getElementById('number-price')
 numberPrice.classList.add('font-bold')
 totalUl.appendChild(li)
 numberPrice.appendChild(li2)
 const grandTotal = document.getElementById('grand-total')
 const grandTotalInnerText = parseInt(grandTotal.innerText)
 const minusDiscount = grandTotalInnerText - discount
 grandTotal.innerText = minusDiscount
 return grandTotal
}
 