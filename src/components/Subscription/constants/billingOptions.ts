import type { BillingOption } from "../types/BillingOption";

export const billingOptions: BillingOption[] = [
    { label: "monthly", multiplier: 1 },
    { label: "yearly", multiplier: 10 },
] as const;
