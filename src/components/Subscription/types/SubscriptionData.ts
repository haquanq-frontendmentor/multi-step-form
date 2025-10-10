import type { AddonOption } from "./AddonOption";
import type { BillingOption } from "./BillingOption";
import type { PlanOption } from "./PlanOption";

export type SubscriptionData = {
    phone: string;
    name: string;
    email: string;
    plan: PlanOption;
    billing: BillingOption;
    addons: AddonOption[];
};
