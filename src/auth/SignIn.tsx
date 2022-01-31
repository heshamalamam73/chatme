import { Auth } from "aws-amplify";
import { useState } from "react";
import { useForm } from "react-hook-form";

type SigninProps = {
  onSignIn: () => void;
};

const SignIn: React.FC<SigninProps> = ({ onSignIn }) => {
  const { register, reset, handleSubmit } = useForm();

  const handleSignIn = async (data: any) => {
    try {
      const user = await Auth.signIn(data);
      onSignIn();
      console.log(user);
    } catch (error) {
      console.log(error, "error singin");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input type="text" id="" {...register("username")} />
        <input type="password" id="" {...register("password")} />
        <button type="submit">SignIn</button>
      </form>
    </div>
  );
};

export default SignIn;
