import { useFieldArray, useFormContext } from "react-hook-form";
import { Checkbox } from "../form/Checkbox";
import type { SubscriptionData } from "./types/SubscriptionData";

export const SubscriptionAddons = () => {
  const { register, control, watch } = useFormContext<SubscriptionData>();
  const { fields } = useFieldArray({ control, name: "addons" });
  const billing = watch("billing");

  return (
    <fieldset>
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 md:mb-10">
        <legend className="text-xl text-blue-950">Pick add-ons</legend>
        <p className="text-md-1 text-gray-500">Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="flex flex-col gap-2 sm:gap-4">
        {fields.map((item, index) => (
          <Checkbox label={item.name} key={item.id} {...register(`addons.${index}.checked`)}>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="text-sm-2 text-blue-950">{item.name}</h3>
                <p className="md:text-sm-1 text-xs text-gray-500">{item.description}</p>
              </div>
              <span className="text-sm-1 text-purple-600">{`+$${item.price * billing.multiplier}/${billing.label === "yearly" ? "yr" : "mo"}`}</span>
            </div>
          </Checkbox>
        ))}
      </div>
    </fieldset>
  );
};
