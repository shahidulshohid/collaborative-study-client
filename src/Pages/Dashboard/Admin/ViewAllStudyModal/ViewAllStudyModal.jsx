import { useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const ViewAllStudyModal = ({ item, refetch }) => {
  const { registrationFee, _id } = item;
  console.log(registrationFee);
  const [sessionType, setSessionType] = useState("free");
  const [amount, setAmount] = useState(0);
  const axiosSecure = useAxiosSecure();
  // const [free, setFree] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (sessionType === "paid" && amount <= 0) {
      return toast.error("Please specify a valid amount for a paid session.");
    }
    if (sessionType === "free" && amount > 0) {
      // setFree(true)
      setAmount(0);
      return toast.error("No need any amount for a free session.");
    }
    console.log(sessionType);
    console.log(amount);

    // sending data to database after updating
    const updateData = {
      registrationFee: amount,
      status: "approved",
    };
    axiosSecure.patch(`/studySessionsAll/${_id}`, updateData).then((data) => {
      toast.success("Session approved is successfully");
      my_modal_1.close();
      refetch();
    });
  };

  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h2 className="text-center text-xl md:text-2xl mb-3">
          Approve Session
        </h2>
        <form onSubmit={handleSubmit} className="-mb-14">
          <label className="">
            <p className="text-lg">Is the session free of paid</p>
            <select
              className="bg-white text-lg text-left"
              value={sessionType}
              onChange={(e) => setSessionType(e.target.value)}
            >
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </label>
          {sessionType && (
            <label>
              <p className="text-lg">Amount:</p>
              <input
                type="number"
                // disabled={free}
                onChange={(e) => setAmount(e.target.value)}
                // min='1'
                value={amount}
                className="input input-bordered"
              />
            </label>
          )}
          <div>
            <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded-lg">
              Approved
            </button>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="bg-red-400 text-white px-3 py-1 mt-1 rounded-lg">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ViewAllStudyModal;
