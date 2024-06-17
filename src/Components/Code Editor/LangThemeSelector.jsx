import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  activeLanguage,
  activeTheme,
  languageToServer,
  versionToServer,
  codeToServer,
  langicon,
} from "../Atoms/Atoms";
import { languageOptions } from "../../Data/Data";
import { themes } from "../../Data/Data";

function LangThemeSelector() {
  const [currentLanguage, setCurrentLanguage] = useRecoilState(activeLanguage);
  const [currentTheme, setCurrentTheme] = useRecoilState(activeTheme);
  const [themeOrLang, setThemeOrLang] = useState("Languages");
  const [serverlang, setserverlang] = useRecoilState(languageToServer);
  const [serverversion, setserverversion] = useRecoilState(versionToServer);
  const [servercode, setservercode] = useRecoilState(codeToServer);
  const [currenticon, setcurrecticon] = useRecoilState(langicon);

  console.log(serverlang);
  console.log(serverversion);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  const handleLanguageChange = (language, version, code, img) => {
    setCurrentLanguage(language);
    setserverlang(language);
    setserverversion(version);
    setservercode(code);
    setcurrecticon(img);
  };

  return (
    <div className="h-full w-full rounded-md flex flex-col font-mate gap-2 bg-black">
      <div className="xs:h-[7vh] xs:w-full lg:h-[6vh] lg:w-full flex flex-row rounded-md  bg-black text-white">
        <div className="xs:h-full xs:w-1/2 lg:h-full lg:w-1/2 flex justify-center items-center p-1">
          <button
            className={`${
              themeOrLang === "Languages" ? "text-black bg-white" : ""
            } cursor-pointer h-full w-full font-bold rounded-md`}
            onClick={() => setThemeOrLang("Languages")}
          >
            Languages
          </button>
        </div>
        <div className="xs:h-full xs:w-1/2 lg:h-full lg:w-1/2 flex justify-center items-center p-1">
          <button
            className={`${
              themeOrLang === "Themes" ? "text-black bg-white" : ""
            } cursor-pointer h-full w-full font-bold rounded-md`}
            onClick={() => setThemeOrLang("Themes")}
          >
            Themes
          </button>
        </div>
      </div>

      <div className="xs:h-[7vh] xs:flex-grow lg:h-flex-grow lg:w-full flex xs:flex-col lg:flex-row  overflow-hidden bg- p-1 ">
        <div className="h-full w-full  flex flex-col gap-2 overflow-hidden rounded-md">
          <div className="flex lg:flex-col gap-1 h-full overflow-scroll xs:flex-row rounded-md">
            {themeOrLang === "Languages" &&
              languageOptions.map((lang, index) => (
                <div
                  className="flex lg:flex-col gap-1 xs:flex-row items-center  h-full w-full "
                  key={index}
                >
                  <div
                    onClick={() =>
                      handleLanguageChange(
                        lang.language,
                        lang.version,
                        lang.code,
                        lang.img
                      )
                    }
                    className={`p-2  rounded-md  h-[6vh] xs:w-[23vh] lg:w-full max-w-full cursor-pointer whitespace-nowrap xs:justify-center lg:justify-start items-center flex ${
                      currentLanguage === lang.language
                        ? "text-black bg-white"
                        : "text-white"
                    } `}
                  >
                    <img className="h-full w-fit" src={lang.img}></img>
                    <span className="px-1"></span>
                    {lang.language}
                    {lang.version !== null && <span className="px-1"></span>}
                    {lang.version}
                  </div>
                </div>
              ))}

            {themeOrLang === "Themes" &&
              Object.entries(themes).map(([key, selectedtheme], index) => (
                <div
                  className="flex lg:flex-col gap-1 xs:flex-row items-center  h-full w-full "
                  key={index}
                >
                  <div
                    onClick={() => handleThemeChange(selectedtheme.themeValue)}
                    className={`p-2 rounded-md h-[6vh]  w-full cursor-pointer transition-transform whitespace-nowrap flex items-center ${
                      currentTheme === selectedtheme.themeValue
                        ? "text-black bg-white"
                        : "text-white"
                    }
                    `}
                  >
                    {selectedtheme.themeName}
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
