import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  activeLanguage,
  activeTheme,
  languageToServer,
  versionToServer,
} from "../Atoms/Atoms";
import { languageOptions } from "../../Data/Data";
import { themes } from "../../Data/Data";

function LangThemeSelector() {
  const [currentLanguage, setCurrentLanguage] = useRecoilState(activeLanguage);
  const [currentTheme, setCurrentTheme] = useRecoilState(activeTheme);
  const [themeOrLang, setThemeOrLang] = useState("Languages");
  const [serverlang, setserverlang] = useRecoilState(languageToServer);
  const [serverversion, setserverversion] = useRecoilState(versionToServer);

  console.log(serverlang);
  console.log(serverversion);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  const handleLanguageChange = (language, version) => {
    setCurrentLanguage(language);
    setserverlang(language);
    setserverversion(version);
  };

  return (
    <div className="h-full w-full rounded-md flex flex-col font-mate ">
      <div className="xs:h-full xs:w-full lg:h-[7vh] lg:w-full flex flex-row rounded-md">
        <div className="xs:h-full xs:w-1/2 lg:h-full lg:w-1/2 flex justify-center items-center p-1">
          <button
            className={`${
              themeOrLang === "Languages"
                ? "text-white bg-black rounded-md p-1"
                : "text-black"
            } cursor-pointer h-full w-full font-bold`}
            onClick={() => setThemeOrLang("Languages")}
          >
            Languages
          </button>
        </div>
        <div className="xs:h-full xs:w-1/2 lg:h-full lg:w-1/2 flex justify-center items-center p-1">
          <button
            className={`${
              themeOrLang === "Themes"
                ? "text-white bg-black rounded-md p-1"
                : "text-black"
            } cursor-pointer h-full w-full font-bold`}
            onClick={() => setThemeOrLang("Themes")}
          >
            Themes
          </button>
        </div>
      </div>

      <div className="h-fit flex justify-center items-center">
        <div className="xs:border-b-2 lg:border-b-2 h-fit border-black w-[90%]"></div>
      </div>

      <div className="xs:h-full xs:flex-grow lg:h-flex-grow lg:w-full flex xs:flex-col lg:flex-row rounded-md overflow-hidden ">
        <div className="h-full w-full p-1 flex flex-col gap-2 overflow-hidden rounded-md">
          <div className="flex lg:flex-col gap-1 h-full overflow-scroll xs:flex-row rounded-md">
            {themeOrLang === "Languages" &&
              languageOptions.map((lang, index) => (
                <div className="flex lg:flex-col gap-1 p-1 xs:flex-row items-center  h-full w-full" key={index}>
                  <div
                    onClick={() =>
                      handleLanguageChange(lang.language, lang.version)
                    }
                    className={`p-2  h-[5vh] w-full cursor-pointer transition-transform whitespace-nowrap xs:justify-center lg:justify-start items-center flex ${
                      currentLanguage === lang.language
                        ? "bg-black text-white font-bold rounded-md"
                        : "bg-white hover:bg-black hover:text-white rounded-md"
                    }`}
                  >
                    {lang.language}
                    {lang.version !== null && <span className="px-1"></span>}
                    {lang.version}
                  </div>
                </div>
              ))}
            {themeOrLang === "Themes" &&
              Object.entries(themes).map(([key, theme], index) => (
                <div className="flex lg:flex-col gap-1 p-1 xs:flex-row items-center" key={index}>
                  <div
                    onClick={() => handleThemeChange(theme.themeValue)}
                    className={`p-2 rounded-md h-fit w-full cursor-pointer transition-transform whitespace-nowrap ${
                      currentTheme === theme.themeValue
                        ? "bg-black text-white font-bold rounded-md"
                        : "bg-white hover:bg-black hover:text-white rounded-md"
                    }`}
                  >
                    {theme.themeName}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LangThemeSelector;
