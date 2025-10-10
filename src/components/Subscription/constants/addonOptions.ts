import type { AddonOption } from "../types/AddonOption";

export const addonOptions: AddonOption[] = [
    { name: "Online service", description: "Access to multiplayer games", price: 1, checked: false },
    { name: "Larger storage", description: "Extra 1TB of cloud save", price: 2, checked: false },
    { name: "Customizable profile", description: "Custom theme on your profile", price: 2, checked: false },
] as const;
