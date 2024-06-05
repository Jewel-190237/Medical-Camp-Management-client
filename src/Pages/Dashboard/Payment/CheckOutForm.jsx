/* eslint-disable react-hooks/rules-of-hooks */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
const stripe = useStripe();
const elements = useElements();

const CheckOutForm = () => {

    const handlePayment = async (event) => {
        event.preventdefault();

        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card == null){
            return;
        }
    }

    
    return (
        <form onSubmit={handlePayment}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" disabled={!stripe}>
                Pay
            </button>
        </form>
    );
};

export default CheckOutForm;