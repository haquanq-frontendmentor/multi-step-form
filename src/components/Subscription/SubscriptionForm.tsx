import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SubscriptionContext, type SubscriptionContextState } from "./contexts";
import { PlanFormAction } from "./SubscriptionAction";
import { SubscriptionAddons } from "./SubscriptionAddons";
import { SubscriptionPersonDetail } from "./SubscriptionPersonDetail";
import { SubscriptionPlans } from "./SubscriptionPlans";
import { SubscriptionSuccess } from "./SubscriptionSuccess";
import { SubscriptionSummary } from "./SubscriptionSummary";
import type { SubscriptionData } from "./types/SubscriptionData";

export const SubscriptionForm = () => {
  const { step, formOptions } = useContext(SubscriptionContext) as SubscriptionContextState;

  const methods = useForm<SubscriptionData>({
    defaultValues: {
      addons: formOptions.addons,
      billing: formOptions.billings[0],
      plan: formOptions.plans[0],
    },
    mode: "onBlur",
  });

  const onSubmit = (data: SubscriptionData) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <div className="relative z-50 flex grow justify-center rounded-[0.625rem] bg-white px-6 py-8 shadow-lg md:px-12 md:pt-[2.9375rem] md:pb-12 md:shadow-none">
        {methods.formState.isSubmitted ? (
          <SubscriptionSuccess />
        ) : (
          <form className="w-full md:max-w-[28.125rem]" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="flex h-full w-full flex-col justify-between sm:gap-12">
              {step === 1 && <SubscriptionPersonDetail />}
              {step === 2 && <SubscriptionPlans />}
              {step === 3 && <SubscriptionAddons />}
              {step === 4 && <SubscriptionSummary />}
              <PlanFormAction />
            </div>
          </form>
        )}
      </div>
    </FormProvider>
  );
};
