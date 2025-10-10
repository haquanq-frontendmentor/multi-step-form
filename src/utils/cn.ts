import clsx, { type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customMerge = extendTailwindMerge({
    override: {
        classGroups: {
            "font-size": [
                "text-xs",
                "text-sm-1",
                "text-sm-2",
                "text-sm-3",
                "text-md-1",
                "text-md-2",
                "text-lg",
                "text-xl",
            ],
        },
    },
});

export function cn(...classes: ClassValue[]) {
    return customMerge(clsx(classes));
}
