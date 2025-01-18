import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

//add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const PaymentPage = () => {
    return (
        <div>
            <h1>Payment page</h1>

            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PaymentPage;