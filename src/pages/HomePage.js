import React from "react";
import { useForm } from "react-hook-form";

const HomePage = () => {
    const { register, handleSubmit, formState } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-10 p-2 shadow-md "
        >
            <input
                placeholder="enter your name..."
                {...register("name")}
                className="outline-none border border-gray-200 p-3"
            />

            <input
                placeholder="enter your password"
                {...register("password", { required: true })}
                className="outline-none border border-gray-200 p-3"
            />

            {formState.errors.password && (
                <span className="text-error font-semibold ">
                    Password is required field
                </span>
            )}
            <select {...register("gender")}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </select>

            <input
                type="submit"
                className="px-5 py-3 bg-blue-500 text-white cursor-pointer"
            />
        </form>
    );
};

export default HomePage;
