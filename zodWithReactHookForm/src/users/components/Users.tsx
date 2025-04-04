import { useForm } from "react-hook-form";
function Users() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<{ email: String }>({
    mode: "onSubmit",
  });

  const submitHandler = () => {
    console.log("submitted");
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <input
        {...register("email", {
          required: { value: true, message: "required" },
          minLength: { value: 10, message: "must be atleast 10 characters" },
        })}
        placeholder="Email"
      />
      <p>{errors.email?.message}</p>
    </form>
  );
}

export default Users;
