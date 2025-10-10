import { useState } from "react";
import { addonOptions, billingOptions, planOptions } from "./constants";
import { SubscriptionContext } from "./contexts";
import { SubscriptionForm } from "./SubscriptionForm";
import { SubscriptionSidebar } from "./SubscriptionSidebar";

export const Subscription = () => {
  const [formStep, setFormStep] = useState(1);

  const setStep = (value: number) => {
    setFormStep(value);
  };

  return (
    <SubscriptionContext.Provider
      value={{
        step: formStep,
        setStep,
        formOptions: { addons: addonOptions, billings: billingOptions, plans: planOptions },
      }}
    >
      <section className="w-[min(100%,58.75rem)] md:grid md:grid-cols-[min(35%,18.125rem)_1fr] md:rounded-[0.9375rem] md:bg-white md:shadow-lg">
        <h1 className="sr-only" aria-atomic="true" aria-live="polite">
          {`Your subscription plan (step ${formStep} of 4)`}
        </h1>
        <SubscriptionSidebar />
        <SubscriptionForm />
      </section>
    </SubscriptionContext.Provider>
  );
};
