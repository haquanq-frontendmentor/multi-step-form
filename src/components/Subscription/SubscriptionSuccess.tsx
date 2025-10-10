import { ThanksIcon } from "../../assets/images";

export const SubscriptionSuccess = () => {
  return (
    <section className="flex flex-col items-center justify-center py-16 text-center">
      <img className="mb-8" src={ThanksIcon} alt="" />
      <h2 className="mb-4 text-lg text-blue-950 md:text-xl">Thank you!</h2>
      <p className="text-md-1 max-w-[28.125rem] text-gray-500">
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com.
      </p>
    </section>
  );
};
