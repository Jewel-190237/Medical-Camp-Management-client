import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { useLoaderData } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_SECRET_KEY)
const Payment = () => {
    const campData = useLoaderData();
    // console.log(campData);
    const amount = campData.campFees;
    const campName = campData.campName;
    const id = campData._id;
    // console.log(amount);
    return (
        <div className="m-10">
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm amount={amount} campName={campName} id={id}></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;