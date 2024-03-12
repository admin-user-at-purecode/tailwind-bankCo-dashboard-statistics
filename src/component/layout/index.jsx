import Sidebar from "./sidebar/index";
import HeaderOne from "./header/HeaderOne";
import HeaderTwo from "./header/HeaderTwo";
import { useState } from "react";
import { createContext } from "react";
import Statistics from "../../pages/statistics";

export const ThemeContext = createContext("");

function Layout({ bg }) {
  const [sidebar, setSidebar] = useState(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "" || localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : ""
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`layout-wrapper ${
          sidebar && "active"
        }  w-full dark:bg-darkblack-600 `}
        style={{
          borderColor: "#2a313c",
        }}
      >
        <div className="relative flex w-full">
          <Sidebar handleActive={() => setSidebar(!sidebar)} />
          <div
            className={`body-wrapper flex-1 overflow-x-hidden ${
              bg ? bg : "dark:bg-darkblack-500"
            } `}
          >
            <HeaderOne handleSidebar={() => setSidebar(!sidebar)} />
            <HeaderTwo handleSidebar={() => setSidebar(!sidebar)} />
            <Statistics />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default Layout;
