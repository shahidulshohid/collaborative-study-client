import { toast } from "react-toastify";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const RejectedModal = ({ id }) => {
  const axiosSecure = useAxiosSecure();
  const handleRejected = (e) => {
    e.preventDefault();
    const rejectionReason = e.target.rejectionReason.value;
    const feedback = e.target.feedback.value;
    const rejectionData = {
      rejectionReason,
      feedback,
      feedbackId: id,
    };
    axiosSecure.post("/rejections", rejectionData).then((res) => {
        toast.success("Rejection reason and feedback added successfully");
        my_modal_2.close();
    });
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h2 className="text-center text-xl md:text-2xl font-semibold mb-3">
          Rejected Reason
        </h2>
        <form onSubmit={handleRejected} className="-mb-14">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Rejection Reason</span>
            </div>
            <input
              name="rejectionReason"
              type="text"
              placeholder="Rejection Reason"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text font-semibold">Feedback</span>
            </div>
            <textarea
              name="feedback"
              className="textarea textarea-bordered h-24"
              placeholder="Feedback"
            ></textarea>
          </label>

          <div>
            <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded-lg">
              Rejected Reason
            </button>
          </div>
        </form>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="bg-white text-white px-3 py-1 mt-1 rounded-lg mb-5">
              {/* Cancel */}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default RejectedModal;
