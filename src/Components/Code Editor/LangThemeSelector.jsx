import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  activeLanguage,
  activeTheme,
  languageToServer,
  versionToServer,
  codeToServer,
  UITheme,
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
  const [theme, setTheme] = useRecoilState(UITheme);

  console.log(serverlang);
  console.log(serverversion);

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
  };

  const handleLanguageChange = (language, version, code) => {
    setCurrentLanguage(language);
    setserverlang(language);
    setserverversion(version);
    setservercode(code);
  };

  return (
    <div className="h-full w-full rounded-md flex flex-col font-mate  ">
      <div className={`xs:h-1/2 xs:w-full lg:h-[6vh] lg:w-full flex flex-row rounded-md  ${theme==='light'? "bg-black text-black":"text-white bg-white"}`}>
        <div className="xs:h-full xs:w-1/2 lg:h-full lg:w-1/2 flex justify-center items-center p-1">
          <button
            className={`${
              themeOrLang === "Languages" && theme === "light"
                ? "text-black bg-white"
                : ""
            }
            ${
              themeOrLang !== "Languages" && theme === "light"
                ? "text-white bg-black"
                : ""
            }
            ${
              themeOrLang === "Languages" && theme === "dark"
                ? "text-white bg-black"
                : ""
            }
            ${
              themeOrLang !== "Languages" && theme === "dark"
                ?"text-black bg-white"
                : ""
            } cursor-pointer h-full w-full font-bold rounded-md`}
            onClick={() => setThemeOrLang("Languages")}
          >
            Languages
          </button>
        </div>
        <div className="xs:h-full xs:w-1/2 lg:h-full lg:w-1/2 flex justify-center items-center p-1">
          <button
            className={`${
              themeOrLang === "Themes" && theme === "light"
                ? "text-black bg-white"
                : ""
            }
            ${
              themeOrLang !== "Themes" && theme === "light"
                ? "text-white bg-black"
                : ""
            }
            ${
              themeOrLang === "Themes" && theme === "dark"
                ? "text-white bg-black"
                : ""
            }
            ${
              themeOrLang !== "Themes" && theme === "dark"
                ? "text-black bg-white"
                : ""
            } cursor-pointer h-full w-full font-bold rounded-md`}
            onClick={() => setThemeOrLang("Themes")}
          >
            Themes
          </button>
        </div>
      </div>

      <div className="xs:h-1/2 xs:flex-grow lg:h-flex-grow lg:w-full flex xs:flex-col lg:flex-row rounded-md overflow-hidden ">
        <div className="h-full w-full mt-2 flex flex-col gap-2 overflow-hidden rounded-md">
          <div className="flex lg:flex-col gap-1 h-full overflow-scroll xs:flex-row rounded-md">
            {themeOrLang === "Languages" &&
              languageOptions.map((lang, index) => (
                <div className="flex lg:flex-col gap-1 xs:flex-row items-center  h-full w-full" key={index}>
                  <div
                    onClick={() =>
                      handleLanguageChange(lang.language, lang.version,lang.code)
                    }
                    className={`p-2 rounded-md  h-fit w-full cursor-pointer transition-transform whitespace-nowrap xs:justify-center lg:justify-start items-center flex ${
                      currentLanguage === lang.language && theme === "light"
                        ? "text-white bg-black"
                        : ""
                    }
                    ${
                      currentLanguage !== lang.language && theme === "light"
                        ? "text-black bg-white"
                        : ""
                    }
                    ${
                      currentLanguage === lang.language && theme === "dark"
                        ? "text-black bg-white"
                        : ""
                    }
                    ${
                      currentLanguage !== lang.language && theme === "dark"
                        ? "text-white bg-black"
                        : ""
                    } `}
                  >
                    {lang.language}
                    {lang.version !== null && <span className="px-1"></span>}
                    {lang.version}
                  </div>
                </div>
              ))}
            {themeOrLang === "Themes" &&
              Object.entries(themes).map(([key, selectedtheme], index) => (
                <div className="flex lg:flex-col gap-1 xs:flex-row items-center  h-full w-full" key={index}>
                  <div
                    onClick={() => handleThemeChange(selectedtheme.themeValue)}
                    className={`p-2 rounded-md h-fit w-full cursor-pointer transition-transform whitespace-nowrap ${
                      currentTheme === selectedtheme.themeValue && theme === "light"
                        ? "text-white bg-black"
                        : ""
                    }
                    ${
                      currentTheme !== selectedtheme.themeValue && theme === "light"
                        ? "text-black bg-white"
                        : ""
                    }
                    ${
                      currentTheme === selectedtheme.themeValue && theme === "dark"
                        ? "text-black bg-white"
                        : ""
                    }
                    ${
                      currentTheme !== selectedtheme.themeValue && theme === "dark"
                        ? "text-white bg-black"
                        : ""
                    }`}
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
