import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { SubscriptionContext, type SubscriptionContextState } from "./contexts";
import type { SubscriptionData } from "./types";

export const SubscriptionSummary = () => {
  const { getValues } = useFormContext<SubscriptionData>();

  const billing = getValues("billing");
  const plan = getValues("plan");
  const addons = getValues("addons").filter((v) => v.checked);

  plan.price *= billing.multiplier;
  addons.forEach((addon) => (addon.price *= billing.multiplier));

  const period = billing.label === "monthly" ? "mo" : "yr";
  const totalPerMonth = (addons.reduce((a, x) => a + x.price, 0) + plan.price) / (billing.multiplier === 1 ? 1 : 12);

  const { setStep } = useContext(SubscriptionContext) as SubscriptionContextState;

  return (
    <section>
      <div className="mb-6 flex flex-col gap-2 sm:mb-8 md:mb-10">
        <h2 className="text-xl text-blue-950">Finishing up</h2>
        <p className="text-md-1 text-gray-500">Double-check everything looks OK before confirming.</p>
      </div>
      <div className="mb-6 rounded-lg bg-blue-50 p-4 lg:mb-8 lg:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm-2 capitalize">{`${plan.name} (${billing.label})`}</p>
            <button
              className="text-sm-1 text-gray-500 transition-colors hover:text-purple-600"
              type="button"
              onClick={() => setStep(2)}
            >
              Change
            </button>
          </div>
          <span className="text-[1rem] leading-5 font-bold">{`$${plan.price}/${period}`}</span>
        </div>
        {addons.length !== 0 && (
          <div className="text-sm-1 mt-4 grid gap-4 border-t border-purple-200 pt-4">
            {addons.map((addon) => (
              <p className="flex items-center justify-between" key={addon.description}>
                <span className="text-gray-500">{addon.name}</span>
                <span className="text-blue-950">{`+$${addon.price}/${period}`}</span>
              </p>
            ))}
          </div>
        )}
      </div>
      <p className="sr-only">{`Total pay $${totalPerMonth} per month`}</p>
      <div className="flex items-start justify-between" aria-hidden="true">
        <span className="text-sm-1 text-gray-500">Total (per month)</span>
        <span className="text-[1.25rem] leading-none font-bold text-purple-600">{`+$${totalPerMonth}/${period}`}</span>
      </div>
    </section>
  );
};
