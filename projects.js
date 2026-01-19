function handleCostKey () {
       if (event.key === 'Enter') {
   calculateTotal();
    }
      }
      function calculateTotal() {
      const inputElem = document.querySelector('.js-input');
      let cost = Number(inputElem.value);
      console.log(cost);
      if (cost < 40) {
     cost = cost + 10 ;
      console.log(cost);
      }
       document.querySelector('.js-total-cost')
        .innerHTML = `$${cost}`;
      }
      function subscribe() {
        const btnElem = document.querySelector(".Btn1");
        if (btnElem.innerText === "Subscribe") {
          btnElem.innerHTML = "Subscribed";
          btnElem.classList.add('is-subscribed');
        } else {
          btnElem.innerHTML = "Subscribe";
          btnElem.classList.remove('is-subscribed');
        }
       
      }