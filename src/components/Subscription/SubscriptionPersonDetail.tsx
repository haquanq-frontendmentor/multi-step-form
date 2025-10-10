import { useFormContext } from "react-hook-form";
import { TextField } from "../form/TextField";
import type { SubscriptionData } from "./types/SubscriptionData";

export const SubscriptionPersonDetail = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<SubscriptionData>();

  return (
    <fieldset>
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 md:mb-10">
        <legend className="text-xl text-blue-950">Personal info</legend>
        <p className="text-md-1 text-gray-500">Please provide your name, email address and phone number</p>
      </div>
      <div className="flex flex-col gap-4 lg:gap-6">
        <TextField
          label="Name"
          placeholder="e.g. Stephen King"
          errorMessage={errors.name?.message}
          autoComplete="name"
          {...register("name", {
            required: "This field is required",
            minLength: { message: "Minimum 2 characters", value: 2 },
            maxLength: { message: "Maximum 50 characters", value: 50 },
          })}
        />
        <TextField
          type="email"
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          autoComplete="email"
          errorMessage={errors.email?.message}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        <TextField
          label="Phone Number"
          placeholder="e.g. +1 234 567 890"
          autoComplete="tel"
          errorMessage={errors.phone?.message}
          {...register("phone", {
            required: "This field is required",
            maxLength: { message: "Maximum 15 digits", value: 15 },
            pattern: {
              value: /^[0-9-]+$/g,
              message: "Invalid phone number",
            },
          })}
        />
      </div>
    </fieldset>
  );
};
