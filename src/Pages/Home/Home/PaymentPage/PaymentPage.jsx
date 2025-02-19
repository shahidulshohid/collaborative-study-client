import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

//add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const PaymentPage = () => {
    return (
        <div className='dark:bg-white pt-4 pb-12 mt-16'>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default PaymentPage;