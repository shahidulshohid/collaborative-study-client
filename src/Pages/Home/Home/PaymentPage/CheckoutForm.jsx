import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    if(!stripe || !elements) {
        return 
    }
    // const card = elements.getElement(CardElement)
    // if(card === null) {
    //     return
    // }
    // const {} = stripe.createPaymentMethod({
    //     type:'card',
    //     card
    // })
    // if(error) {
    //     console.log("Payment error", error)
    // }
    // else {
    //     console.log("Payment method", paymentMethod)
    // }
    
  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="btn btn-sm bg-blue-500 text-white my-4" type="submit" disabled={!stripe}>Pay</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
