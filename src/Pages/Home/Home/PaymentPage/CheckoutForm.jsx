import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import Container from "../../../Shared/Container/Container";

const CheckoutForm = ({ handleSessionBooked }) => {
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: session = {}, refetch } = useQuery({
    queryKey: ["session", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/studySessions/${id}`);
      return res?.data;
    },
  });
  const {
    image,
    title,
    tutorName,
    description,
    resStartDate,
    resEndDate,
    claStartDate,
    claEndDate,
    sessionDuration,
    registrationFee,
    _id,
    tutorEmail,
  } = session;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Payment error", error);
      setError(error.message);
      return;
    } else {
      console.log("Payment method", paymentMethod);
      setError("");
    }
    const freeBookedSession = {
      studentEmail: user?.email,
      studySessionId: _id,
      image,
      title,
      tutorName,
      description,
      resStartDate,
      resEndDate,
      claStartDate,
      claEndDate,
      sessionDuration,
      registrationFee,
      tutorEmail,
    };
    axiosSecure.post("/bookedSession", freeBookedSession).then((res) => {
      if (res.data.insertedId) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: "Your payment has been processed successfully!",
        });
        navigate('/dashboard/viewBookSession')
      }
    });
  };
  return (
    <div className="max-w-3xl mx-auto mt-20">
      <Container>
        <h1 className="text-xl md:text-3xl font-semibold text-center">
          Payment
        </h1>
        <p className=" mb-12 text-center">Secure and seamless payment processing for a hassle-free experience</p>
        <div className="md:flex items-center gap-5 lg:gap-12">
          <div className="flex-1 mb-5 md:mb-0">
            <img src={image} alt="" />
            <h3 className="text-xl font-semibold mt-2">{title}</h3>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-3">${registrationFee} Will be deducted from your card</h3>
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
          <button
            onClick={handleSessionBooked}
            className="btn btn-sm bg-blue-500 text-white my-4"
            type="submit"
            disabled={!stripe}
          >
            Payment
          </button>
          <p className="text-red-600">{error}</p>
        </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CheckoutForm;
