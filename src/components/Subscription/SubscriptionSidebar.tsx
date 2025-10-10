import { useContext } from "react";
import { SidebarBackgroundDesktop, SidebarBackgroundMobile } from "../../assets/images";
import { cn } from "../../utils/cn";
import { SubscriptionContext, type SubscriptionContextState } from "./contexts/SubscriptionContext";

export const SubscriptionSidebar = () => {
  const { step } = useContext(SubscriptionContext) as SubscriptionContextState;

  const progresses = [
    { no: 1, label: "Your info" },
    { no: 2, label: "Select plan" },
    { no: 3, label: "Add-ons" },
    { no: 4, label: "Summary" },
  ];

  return (
    <div className="absolute top-0 right-0 left-0 md:relative md:py-4 md:pl-4">
      <div className="h-full overflow-hidden *:h-full *:w-full *:object-cover md:w-auto md:rounded-[0.625rem]">
        <img className="md:hidden" src={SidebarBackgroundMobile} alt="" />
        <img className="hidden md:block" src={SidebarBackgroundDesktop} alt="" />
      </div>
      <ul className="absolute top-8 left-1/2 flex -translate-x-1/2 gap-x-4 gap-y-8 text-white uppercase md:top-14 md:left-12 md:translate-x-0 md:flex-col">
        {progresses.map((progress) => (
          <li className="items-start md:flex md:items-center md:gap-4" key={progress.label}>
            <span
              className={cn(
                "text-sm-3 flex aspect-square w-[2.0625rem] shrink-0 items-center justify-center rounded-full outline-1 -outline-offset-1 outline-white",
                step === progress.no && "bg-blue-200 text-blue-950 outline-none",
              )}
              aria-hidden="true"
            >
              {progress.no}
            </span>
            <p className="absolute opacity-0 md:static md:z-auto md:flex md:flex-col md:opacity-100">
              <span className="text-xs text-blue-300">{`Step ${progress.no}`}</span>
              <span className="text-sm-3">{progress.label}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
