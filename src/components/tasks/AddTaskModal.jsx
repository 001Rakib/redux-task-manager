import { useForm } from "react-hook-form";
import Modal from "../ui/modal";
import { useDispatch } from "react-redux";
import { addTasks } from "../../redux/features/tasks/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    dispatch(addTasks(data));
    onCancel();
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Programming Hero"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-5">
          <label htmlFor="title" className="mb-2">
            {" "}
            Title{" "}
          </label>
          <input
            className="W-full rounded-md"
            type="text"
            id="title"
            {...register("title")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="description" className="mb-2">
            {" "}
            Description{" "}
          </label>
          <input
            className="W-full rounded-md"
            type="text"
            id="description"
            {...register("description")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="deadline" className="mb-2">
            {" "}
            Deadline{" "}
          </label>
          <input
            className="W-full rounded-md"
            type="date"
            id="date"
            {...register("date")}
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="assignTo" className="mb-2">
            Assign To
          </label>
          <select name="" id="assignedTo" {...register("assignedTo")}>
            <option value="Rakib Hasan">Rakib Hasan</option>
            <option value="Meherab Hasan">Meherab Hasan</option>
            <option value="Kaxi Siam">Kaxi Siam</option>
            <option value="Shakib Al Hasan">Shakib Al Hasan</option>
            <option value="Ruhi">Ruhi</option>
            <option value="Smith">Smith</option>
          </select>
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="priority" className="mb-2">
            Priority
          </label>
          <select name="" id="priority" {...register("priority")}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="flex gap-3 justify-end">
          <button
            onClick={() => onCancel()}
            className="bg-red-500 px-2 py-1 rounded-md text-white"
            type="button"
          >
            {" "}
            Cancel{" "}
          </button>
          <button
            className="bg-blue-500 px-2 py-1 rounded-md text-white"
            type="submit"
          >
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
