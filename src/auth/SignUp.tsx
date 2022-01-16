import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";

export type FormData = {
  username: string;
  password: string;
  email?: string;
  phone_number?: string;
};
const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => {
    try {
      const { user } = await Auth.signUp({
        username: data.username,
        password: data.password,
        attributes: {
          ...(data.email ? { email: data.email } : {}),
          ...(data.phone_number ? { phone_number: data.phone_number } : {}),
        },
      });
      console.log(user);
    } catch (err) {
      console.log("error sign up ", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("username")} />
        <input type="password" {...register("password")} />
        <input type="text" {...register("email")} />
        <input type="text" {...register("phone_number")} />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignUp;
