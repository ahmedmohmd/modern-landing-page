import clsx from "clsx";
import { FC } from "react";

const NavBar: FC = () => {
  return (
    <>
      <header
        className={clsx(
          "relative",
          "z-50 py-4",
          "w-full",
          "text-sm",
          "bg-white",
          "flex flex-wrap sm:justify-start sm:flex-nowrap"
        )}
      >
        <nav
          className={clsx(
            "max-w-[100rem] w-full",
            "mx-auto px-4",
            "flex items-center justify-between"
          )}
          aria-label="Global"
        >
          <div className={clsx("flex items-center justify-center")}>
            <a
              className={clsx("flex-none", "mr-12", "text-4xl font-bold")}
              href="#"
            >
              <img src="/media/images/logo.svg" alt="" />
            </a>
          </div>
          <div
            id="navbar-with-mega-menu"
            className={clsx(
              "hidden overflow-hidden",
              "transition-all duration-300 grow sm:block",
              "hs-collapse basis-full "
            )}
          >
            <div
              className={clsx(
                "flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-start",
                "mt-5 sm:mt-0 sm:pl-5"
              )}
            >
              <div className="hs-mega-menu">
                <button
                  id="hs-mega-menu-basic-dr"
                  type="button"
                  className={clsx(
                    "flex items-center",
                    "w-full",
                    "font-medium text-gray-600 hover:text-gray-800",
                    "hs-mega-menu-toggle hs-mega-menu-open:text-gray-500 hover:hs-mega-menu-open:text-gray-500"
                  )}
                >
                  Features
                  <svg
                    className={clsx("ml-2 w-2.5 h-2.5", "text-gray-600")}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>

                <div
                  className={clsx(
                    "px-3 py-4 sm:w-48",
                    "rounded-xl",
                    "w-full before:w-full",
                    "sm:duration-300 sm:transition-all hidden z-10 top-full before:absolute before:-top-5 before:left-0 before:h-5 sm:absolute",
                    "hs-mega-menu-content hs-mega-menu-open:opacity-100",
                    "bg-white opacity-0",
                    "sm:shadow-2xl sm:shadow-gray-300"
                  )}
                  aria-labelledby="hs-mega-menu-basic-dr"
                >
                  {[
                    { listName: "Todo List", listImageSrc: "icon-todo.svg" },
                    {
                      listName: "Calendar",
                      listImageSrc: "icon-calendar.svg",
                    },
                    {
                      listName: "Reminders",
                      listImageSrc: "icon-reminders.svg",
                    },
                    {
                      listName: "Planning",
                      listImageSrc: "icon-planning.svg",
                    },
                  ].map(({ listName, listImageSrc }, index: number) => {
                    return (
                      <a
                        key={index}
                        className={clsx(
                          " flex items-center gap-x-3.5",
                          "hover:bg-gray-100 focus:ring-blue-500 focus:ring-2",
                          "hover:pl-5 py-2 px-3",
                          "duration-300",
                          "text-sm text-gray-800",
                          "rounded-lg"
                        )}
                        href="#"
                      >
                        <img src={`/media/images/${listImageSrc}`} alt="" />
                        {listName}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="hs-mega-menu">
                <button
                  id="hs-mega-menu-basic-dr"
                  type="button"
                  className={clsx(
                    "flex items-center",
                    "w-full",
                    "font-medium text-gray-600  hover:text-gray-800",
                    "hs-mega-menu-toggle hs-mega-menu-open:text-gray-500 hover:hs-mega-menu-open:text-gray-500"
                  )}
                >
                  Features
                  <svg
                    className={clsx("w-2.5 h-2.5", "ml-2", "text-gray-600")}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>

                <div
                  className={clsx(
                    "rounded-xl",
                    "px-3 py-4",
                    "hs-mega-menu-content hs-mega-menu-open:opacity-100",
                    "bg-white opacity-0 sm:shadow-2xl sm:shadow-gray-300",
                    "w-full before:w-full sm:w-48",
                    "z-10 hidden before:absolute top-full before:-top-5 before:left-0 before:h-5 sm:absolute",
                    "sm:transition-all sm:duration-300"
                  )}
                  aria-labelledby="hs-mega-menu-basic-dr"
                >
                  {["History", "Our Team", "Blog"].map(
                    (listName: string, index: number) => {
                      return (
                        <a
                          key={index}
                          className={clsx(
                            "flex items-center gap-x-3.5",
                            "hover:pl-5 py-2 px-3",
                            "duration-300",
                            "rounded-lg",
                            "text-sm text-gray-800",
                            "hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                          )}
                          href="#"
                        >
                          {listName}
                        </a>
                      );
                    }
                  )}
                </div>
              </div>
              <a
                className={clsx(
                  "font-medium text-gray-600 hover:text-gray-800"
                )}
                href="#"
                aria-current="page"
              >
                Careers
              </a>
              <a
                className={clsx(
                  "font-medium text-gray-600 hover:text-gray-800"
                )}
                href="#"
              >
                About
              </a>
            </div>
          </div>
          <div
            className={clsx(
              "items-center justify-start gap-3 md:flex",
              " hidden "
            )}
          >
            <button
              className={clsx(
                "flex items-center justify-center",
                "px-5 py-2",
                "duration-300",
                "font-semibold text-slate-600 hover:text-slate-800"
              )}
            >
              Login
            </button>
            <button
              className={clsx(
                "flex items-center justify-center",
                "font-semibold text-slate-500 hover:text-slate-800",
                "px-5 py-2",
                "border-2 border-slate-500 rounded-xl hover:border-slate-800",
                "duration-300"
              )}
            >
              Register
            </button>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className={clsx("text-gray-500 hover:text-gray-600")}
              data-hs-sidebar="#docs-sidebar"
              aria-controls="docs-sidebar"
              aria-label="Toggle navigation"
            >
              <span className={clsx("sr-only")}>Toggle Navigation</span>
              <div className="px-2 py-3 rounded-lg">
                <img src="/media/images/icon-menu.svg" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <div
        id="docs-sidebar"
        className={clsx(
          " w-64",
          "hs-sidebar hs-sidebar-open:translate-x-0",
          "overflow-y-auto scrollbar-y",
          "border-r border-gray-200",
          "bg-white",
          "pt-7 pb-10 ",
          "-translate-x-full transition-all duration-300 transform lg:hidden fixed top-0 left-0 bottom-0 z-[60] lg:translate-x-0 lg:right-auto lg:bottom-0"
        )}
      >
        <button
          type="button"
          className={clsx(
            " text-gray-500  hover:text-gray-600",
            "absolute right-5"
          )}
          data-hs-sidebar="#docs-sidebar"
          aria-controls="docs-sidebar"
          aria-label="Toggle navigation"
        >
          <div className={clsx("p-3 hover:bg-gray-100", "rounded-lg")}>
            <img src="/media/images/icon-close-menu.svg" />
          </div>
        </button>

        <nav className={clsx("flex flex-col flex-wrap", "w-full", "p-6")}>
          <div
            id="navbar-with-mega-menu"
            className={clsx(
              "basis-full grow sm:block",
              "overflow-hidden transition-all duration-300",
              "hs-collapse "
            )}
          >
            <div
              className={clsx(
                "flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-start",
                "mt-5 sm:mt-0 sm:pl-5"
              )}
            >
              <div className="hs-mega-menu">
                <button
                  id="hs-mega-menu-basic-dr"
                  type="button"
                  className={clsx(
                    "flex items-center",
                    "hs-mega-menu-toggle hs-mega-menu-open:text-gray-500 hover:hs-mega-menu-open:text-gray-500 ",
                    "font-medium text-gray-600 hover:text-gray-800",
                    "w-full"
                  )}
                >
                  Features
                  <svg
                    className={clsx("ml-2", "w-2.5 h-2.5", "text-gray-600")}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>

                <div
                  className={clsx(
                    "sm:shadow-2xl sm:shadow-gray-300 sm:duration-300",
                    "z-10 hidden top-full before:absolute before:-top-5 before:left-0 sm:transition-all sm:absolute",
                    "px-3 py-4",
                    "w-full before:w-full  before:h-5 sm:w-48",
                    "opacity-0",
                    "bg-white",
                    "rounded-xl",
                    "hs-mega-menu-content hs-mega-menu-open:opacity-100"
                  )}
                  aria-labelledby="hs-mega-menu-basic-dr"
                >
                  {[
                    { listName: "Todo List", listImageSrc: "icon-todo.svg" },
                    { listName: "Calendar", listImageSrc: "icon-calendar.svg" },
                    {
                      listName: "Reminders",
                      listImageSrc: "icon-reminders.svg",
                    },
                    { listName: "Planning", listImageSrc: "icon-planning.svg" },
                  ].map(({ listName, listImageSrc }, index: number) => {
                    return (
                      <a
                        key={index}
                        className={clsx(
                          "hover:pl-5",
                          "duration-300",
                          "flex items-center gap-x-3.5",
                          "py-2 px-3",
                          "text-sm text-gray-800",
                          "hover:bg-gray-100",
                          "focus:ring-2 focus:ring-blue-500",
                          "rounded-lg"
                        )}
                        href="#"
                      >
                        <img src={`/media/images/${listImageSrc}`} alt="" />
                        {listName}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="hs-mega-menu">
                <button
                  id="hs-mega-menu-basic-dr"
                  type="button"
                  className={clsx(
                    "flex items-center",
                    "hs-mega-menu-toggle hs-mega-menu-open:text-gray-500 hover:hs-mega-menu-open:text-gray-500",
                    "w-full",
                    "font-medium text-gray-600  hover:text-gray-800"
                  )}
                >
                  Features
                  <svg
                    className={clsx("ml-2", "w-2.5 h-2.5", "text-gray-600")}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>

                <div
                  className={clsx(
                    "bg-white opacity-0 sm:shadow-2xl sm:shadow-gray-300",
                    "rounded-xl",
                    "sm:w-48",
                    "before:absolute before:-top-5 before:left-0 before:w-full before:h-5",
                    "z-10 hidden top-full sm:transition-all sm:absolute  sm:duration-300",
                    "hs-mega-menu-content hs-mega-menu-open:opacity-100",
                    "w-full",
                    "px-3 py-4"
                  )}
                  aria-labelledby="hs-mega-menu-basic-dr"
                >
                  {["History", "Our Team", "Blog"].map(
                    (listName: string, index: number) => {
                      return (
                        <a
                          key={index}
                          className={clsx(
                            "hover:bg-gray-100 focus:ring-2 focus:ring-blue-500",
                            "flex items-center gap-x-3.5 hover:pl-5",
                            "py-2 px-3",
                            "text-sm text-gray-800",
                            "duration-300",
                            "rounded-lg"
                          )}
                          href="#"
                        >
                          {listName}
                        </a>
                      );
                    }
                  )}
                </div>
              </div>
              <a
                className={clsx(
                  "font-medium text-gray-600 hover:text-gray-800"
                )}
                href="#"
                aria-current="page"
              >
                Careers
              </a>
              <a
                className={clsx(
                  "font-medium text-gray-600 hover:text-gray-800"
                )}
                href="#"
              >
                About
              </a>
            </div>
          </div>
          <div
            className={clsx(
              "flex flex-col items-center justify-start gap-3",
              "w-full",
              "mt-10"
            )}
          >
            <button
              className={clsx(
                "flex items-center justify-center w-full",
                "rounded-xl",
                "hover:bg-gray-100",
                "duration-300",
                "px-5 py-2",
                "text-slate-600 hover:text-slate-800"
              )}
            >
              Login
            </button>
            <button
              className={clsx(
                "flex items-center justify-center",
                "px-5 py-2",
                "w-full",
                "duration-300",
                "text-slate-500 hover:text-slate-800",
                "border-2 border-slate-400 hover:border-slate-800",
                "rounded-xl "
              )}
            >
              Register
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
