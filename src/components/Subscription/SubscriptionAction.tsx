import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "../common/Button";
import { SubscriptionContext, type SubscriptionContextState } from "./contexts/SubscriptionContext";
import type { SubscriptionData } from "./types/SubscriptionData";

export const PlanFormAction = () => {
  const { trigger } = useFormContext<SubscriptionData>();

  const { step, setStep } = useContext(SubscriptionContext) as SubscriptionContextState;

  const handleNextStepClick = async () => {
    if (step === 1) {
      const nameValid = await trigger("name", { shouldFocus: true });
      if (!nameValid) return;
      const emailValid = await trigger("email", { shouldFocus: true });
      if (!emailValid) return;
      const phoneValid = await trigger("phone", { shouldFocus: true });
      if (!phoneValid) return;
    }
    setStep(step + 1);
  };

  return (
    <div className="fixed right-0 bottom-0 left-0 flex items-center justify-between border-t border-purple-950 bg-white p-4 shadow-lg sm:static sm:border-none sm:p-0">
      {step > 1 ? (
        <Button type="button" variant="text" onClick={() => setStep(step - 1)}>
          Go back
        </Button>
      ) : (
        <div></div>
      )}
      {step < 4 ? (
        <Button type="button" onClick={handleNextStepClick}>
          Next Step
        </Button>
      ) : (
        <Button variant="secondary" type="submit">
          Confirm
        </Button>
      )}
    </div>
  );
};
