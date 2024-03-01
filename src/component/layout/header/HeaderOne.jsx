import { useState } from "react";
import SearchBar from "../../forms/SearchBar";
import Author from "./Author";
import MassagePopup from "./MassagePopup";
import ProfilePopup from "./ProfilePopup";
import StorePopUp from "./StorePopUp";
import ToggleBtn from "./ToggleBtn";
import ModeToggler from "./ModeToggler";

function HeaderOne({ handleSidebar }) {
  const [popup, setPopup] = useState(false);

  const handlePopup = (name) => {
    setPopup({ [name]: popup?.[name] ? false : true });
  };

  return (
    <header className="header-wrapper fixed z-30 hidden w-full md:block">
      <div className="relative flex h-[108px] w-full items-center justify-between bg-white px-10 dark:bg-darkblack-600 2xl:px-[76px]">
        <button
          aria-label="none"
          onClick={handleSidebar}
          title="Ctrl+b"
          type="button"
          className="drawer-btn absolute left-0 top-auto rotate-180 transform"
        >
          <span>
            <svg
              width="16"
              height="40"
              viewBox="0 0 16 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z"
                fill="#22C55E"
              />
              <path
                d="M10 15L6 20.0049L10 25.0098"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        <div>
          <h3 className="text-xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px]">
            Dashboard
          </h3>
          <p className="text-xs font-medium text-bgray-600 dark:text-bgray-50 lg:text-sm lg:leading-[25.2px]">
            Let’s check your update today
          </p>
        </div>
        <SearchBar />

        <div className="quick-access-wrapper relative">
          <div className="flex items-center space-x-[43px]">
            <div className="hidden items-center space-x-5 xl:flex">
              <div
                onClick={() => setPopup(false)}
                id="noti-outside"
                className={`fixed left-0 top-0  h-full w-full ${
                  popup ? "block" : "hidden"
                }`}
              ></div>
              <ModeToggler />

              <ToggleBtn
                active={true}
                name="massage"
                clickHandler={handlePopup}
                icon={
                  <svg
                    className="stroke-bgray-900 dark:stroke-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 12V7C2 4.79086 3.79086 3 6 3H18C20.2091 3 22 4.79086 22 7V17C22 19.2091 20.2091 21 18 21H8M6 8L9.7812 10.5208C11.1248 11.4165 12.8752 11.4165 14.2188 10.5208L18 8M2 15H8M2 18H8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              >
                <MassagePopup
                  active={popup?.massage}
                  handlePopup={handlePopup}
                />
              </ToggleBtn>
              <ToggleBtn
                name="store"
                clickHandler={handlePopup}
                icon={
                  <svg
                    className="stroke-bgray-900 dark:stroke-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 11H20M4 11C2.89543 11 2 10.1046 2 9V8C2 6.89543 2.89543 6 4 6H20C21.1046 6 22 6.89543 22 8V9C22 10.1046 21.1046 11 20 11M4 11L4 20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V11M12 6H16C17.1046 6 18 5.10457 18 4C18 2.89543 17.1046 2 16 2C13.7909 2 12 3.79086 12 6ZM12 6H8C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C10.2091 2 12 3.79086 12 6ZM12 6V22"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                }
              >
                <StorePopUp active={popup?.store} handlePopup={handlePopup} />
              </ToggleBtn>
            </div>
            <div className="hidden h-[48px] w-[1px] bg-bgray-300 dark:bg-darkblack-400 xl:block"></div>
            <Author showProfile={handlePopup} />
          </div>
          

          <ProfilePopup active={popup?.profile} handlePopup={handlePopup} />
        </div>
      </div>
    </header>
  );
}

export default HeaderOne;
