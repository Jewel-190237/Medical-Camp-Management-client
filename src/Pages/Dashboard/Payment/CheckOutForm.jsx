/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import { AuthContext } from "../../../Providers/AuthProvider";


const CheckOutForm = ({ amount, campName }) => {

    const axiosSecure = useAxios();
    const [transactionId, settTransactionId] = useState('');
    const stripe = useStripe()
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: amount })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })

    }, [axiosSecure, amount])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')
        }
        const {paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'user',
                    email: user?.email || 'user@email'
                }
            }
        })
        if(confirmError){
            console.log('Payment error')
        }
        else{
            console.log('Payment Intent', paymentIntent);
            if(paymentIntent.status === 'succeeded'){
                console.log('Transaction Id', paymentIntent.id);
                settTransactionId(paymentIntent.id)

                //now save database to payment information
                const payment = {
                    email: user?.email,
                    amount: amount,
                    status: 'pending',
                    campName: campName,
                    transactionId: transactionId
                }

                console.log(payment);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
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
            <button className="btn btn-secondary" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-400">{error}</p>
            {transactionId && <p className="text-green-400">Payment Successful <br /> your transaction id is {transactionId} </p>}
        </form>
    );
};

export default CheckOutForm;