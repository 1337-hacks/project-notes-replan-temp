import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/AuthContext";
import styles from '../styles/styles.module.css'

interface LoginType {
  email: string;
  password: string;
}
const LoginPage = () => {
  const methods = useForm<LoginType>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const { logIn } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: LoginType) => {
      try {
        await logIn(data.email, data.password);
        router.push("/dashboard");
      } catch (error: any) {
        console.log(error.message);
      }
    };
    
  return (
    <>
      <div className={`${styles.loginWrapper} d-flex justify-content-center align-items-center text-center`}>
        <FormProvider {...methods}>
          <form className="w-50" action="" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="h3 mb-3 fw-normal">Log in</h1>

            <div className="form-floating">
              <input 
              type="email" 
              className="form-control" 
              id="floatingInput" 
              placeholder="name@example.com"
              {...register("email", { required: "Email is required" })}
              />
              <label htmlFor="floatingInput">Email address</label>
              {errors.email && <p className="text-red-400">{errors.email.message}</p>}
            </div>

            <div className="form-floating">
              <input 
              type="password" 
              className="form-control" 
              id="floatingPassword" 
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              />
              <label htmlFor="floatingPassword">Password</label>
              {errors.password && <p className="text-red-400">{errors.password.message}</p>}
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">Log in</button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default LoginPage;