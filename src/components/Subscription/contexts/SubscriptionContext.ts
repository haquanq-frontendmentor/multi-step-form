import { createContext } from "react";
import type { AddonOption } from "../types/AddonOption";
import type { BillingOption } from "../types/BillingOption";
import type { PlanOption } from "../types/PlanOption";

interface SubscriptionContextState {
    step: number;
    setStep: (value: number) => void;
    formOptions: {
        plans: PlanOption[];
        billings: BillingOption[];
        addons: AddonOption[];
    };
}

const SubscriptionContext = createContext<SubscriptionContextState | null>(null);

export { SubscriptionContext, type SubscriptionContextState };
