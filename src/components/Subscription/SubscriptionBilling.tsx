import { useContext } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "../../utils/cn";
import { Switch } from "../form/Switch";
import { SubscriptionContext, type SubscriptionContextState } from "./contexts";
import type { SubscriptionData } from "./types";

export const SubscriptionBilling = () => {
  const { formOptions } = useContext(SubscriptionContext) as SubscriptionContextState;
  const { watch, control } = useFormContext<SubscriptionData>();

  const billing = watch("billing");
  const switchLabel = `Use yearly billing (current ${billing.label})`;

  console.log(billing);

  return (
    <div className="text-sm-2 flex justify-center gap-6 rounded-lg bg-blue-100 py-[0.875rem]">
      <span
        className={cn("transition-colors", billing.label === "monthly" ? "text-blue-950" : "text-gray-500")}
        aria-hidden="true"
      >
        Monthly
      </span>
      <Controller
        name="billing"
        control={control}
        render={({ field }) => (
          <Switch
            label={switchLabel}
            checked={field.value.label === formOptions.billings[1].label}
            onChange={(e) => {
              field.onChange(e.target.checked ? formOptions.billings[1] : formOptions.billings[0]);
            }}
          />
        )}
      />
      <span
        className={cn("transition-colors", billing.label === "yearly" ? "text-blue-950" : "text-gray-500")}
        aria-hidden="true"
      >
        Yearly
      </span>
    </div>
  );
};
