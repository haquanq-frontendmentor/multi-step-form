import { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AdvancedIcon, ArcadeIcon, ProIcon } from "../../assets/images";
import { RadioField } from "../form/RadioField";
import { SubscriptionContext, type SubscriptionContextState } from "./contexts";
import { SubscriptionBilling } from "./SubscriptionBilling";
import type { SubscriptionData } from "./types";

export const SubscriptionPlans = () => {
  const { formOptions } = useContext(SubscriptionContext) as SubscriptionContextState;
  const { control, watch } = useFormContext<SubscriptionData>();

  const options = formOptions.plans.map((v) => ({ data: v, icon: "" }));
  options[0].icon = ArcadeIcon;
  options[1].icon = AdvancedIcon;
  options[2].icon = ProIcon;

  const billing = watch("billing");

  return (
    <fieldset>
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 md:mb-10">
        <legend className="text-xl text-blue-950">Select your plan</legend>
        <p className="text-md-1 text-gray-500">You have the option of monthly or yearly billing.</p>
      </div>
      <div className="mb-6 grid gap-x-[1.125rem] gap-y-2 lg:mb-8 lg:grid-cols-3">
        <Controller
          name="plan"
          control={control}
          render={({ field }) => (
            <>
              {options.map(({ data, icon }) => (
                <RadioField
                  label={`${data.name} $${data.price} per month`}
                  checked={field.value.name === data.name}
                  onChange={() => field.onChange(data)}
                  key={data.name}
                >
                  <div className="flex gap-4 md:items-start lg:flex-col lg:gap-12">
                    <img src={icon} alt="" />
                    <div className="flex flex-col">
                      <span className="text-md-2 text-blue-950 capitalize">{data.name}</span>
                      <span className="text-sm-1 text-gray-500">{`$${data.price * billing.multiplier}/${billing.label === "yearly" ? "yr" : "mo"}`}</span>
                    </div>
                  </div>
                </RadioField>
              ))}
            </>
          )}
        />
      </div>
      <SubscriptionBilling />
    </fieldset>
  );
};
