import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";

type SigninProps = {
  onSignIn: () => void;
};

const SignIn: React.FC<SigninProps> = ({ onSignIn }) => {
  const { register, reset, handleSubmit } = useForm();

  const handleSignIn = async (data: any) => {
    try {
      const { user } = await Auth.signIn(data);
      onSignIn();
    } catch (error) {
      console.log(error, "error singin");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input type="text" id="" {...register("username")} />
        <input type="password" id="" {...register("password")} />
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
};

export default SignIn;
