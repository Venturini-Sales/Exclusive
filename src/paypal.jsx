import React, { useEffect, useRef, useState } from 'react';

function paypal() {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: 10.0,
    description: 'Exclusive Product',
  };

  useEffect(() => {
    const script = document.createElement('script');
    const id =
      'AUNY83_cBvnGTscdqPqsiouenuyXOjBTrD-5RHg60UMyEdSlSbiw3wlAYPRkVi2aFqbGykpkw2l44v4_';
    script.src = `https://www.paypal.com/sdk/js?current=BRL&client-id=${id}`;
    script.addEventListener('load', () => setLoaded(true));

    document.body.appendChild(script);

    if (loaded) {
      function loadButtonsAndLogicAboutPayment() {
        setTimeout(() => {
          window.paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    description: product.description,
                    amount: {
                      currency_code: 'BRL',
                      value: product.price,
                    },
                  },
                ],
              });
            },
            onApprove: async(_,actions) =>{
                const order = await actions.order.capture();
                setPaid(true);

                console.log(order); 
            }
          });
          .render(paypalRef);
        });
      }
      loadButtonsAndLogicAboutPayment();
    }
  });

  return (
    <div>
      {paid?(
        <div>Parabens você comprou o curso</div>
      ): (
        <>
        <h1>{product.description} por R${product.price}</h1>
        <div ref={v => (paypalRef = v)}/>
        </>
      )}
    </div>
  );
}

export default paypal;
