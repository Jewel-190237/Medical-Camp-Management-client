import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('')
const Payment = () => {
    return (
        <div>
            <div>
            <Elements stripe={stripePromise}>

            </Elements>
            </div>
        </div>
    );
};

export default Payment;