import type { PlanOption } from "../types/PlanOption";

export const planOptions: PlanOption[] = [
    { name: "arcade", price: 9 },
    { name: "advanced", price: 12 },
    { name: "pro", price: 15 },
] as const;
