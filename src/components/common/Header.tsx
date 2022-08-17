import { FC } from "react";
import clsx from "clsx";

const Header: FC = () => {
  return (
    <div
      className={clsx(
        "max-w-[95rem] w-full",
        "mx-auto",
        "flex-col flex justify-between items-center xl:flex-row gap-20 lg:gap-0"
      )}
    >
      <div
        className={clsx(
          "flex flex-col items-start order-2 max-w-xl xl:order-1 sm:jusify-center xl:items-start",
          "w-full lg:max-w-screen-xl",
          "px-4 mx-aut-2 lg:px-8",
          "sm:text-center xl:text-start"
        )}
      >
        <div className={clsx("mb-16 lg:my-40 lg:pr-5", "lg:max-w-lg")}>
          <div className={clsx("max-w-xl", "mb-6")}>
            <h2
              className={clsx(
                "max-w-lg",
                "mb-12",
                "font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-[81px]",
                "sm:leading-none"
              )}
            >
              Make remote Work
            </h2>
            <p
              className={clsx(
                "mb-12",
                "text-base font-semibold text-gray-500 md:text-lg"
              )}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
          <div
            className={clsx(
              "mb-24 sm:mb-32 xl:mb-40",
              "w-full",
              "flex justify-center items-center xl:justify-start"
            )}
          >
            <button
              className={clsx(
                "px-10 py-4",
                "flex justify-start items-center",
                "text-white hover:text-black font-bold",
                "rounded-[18px]",
                "border border-transparent hover:border-black",
                "bg-black hover:bg-white",
                "duration-150"
              )}
            >
              Learn More
            </button>
          </div>
          <div
            className={clsx(
              "flex justify-between items-center gap-10 flex-wrap",
              "max-w-full",
              "px-4 md:p-0"
            )}
          >
            {[
              "/media/images/client-databiz.svg",
              "/media/images/client-audiophile.svg",
              "/media/images/client-meet.svg",
              "/media/images/client-maker.svg",
            ].map((element: string, index: number) => (
              <img key={index} src={element} />
            ))}
          </div>
        </div>
      </div>

      <img
        className={clsx(
          "max-w-full max-h-[800px]",
          "order-1 xl:order-2",
          "mt-[2rem] xl:mt-0"
        )}
        src="/media/images/image-hero-desktop.png"
        alt=""
      />
    </div>
  );
};

export default Header;
