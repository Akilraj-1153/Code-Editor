import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { activeLanguage, activeTheme,languageToServer,versionToServer } from "../Atoms/Atoms";
import { languageOptions } from "../../Data/Data";
import { themes } from "../../Data/Data";

function LangThemeSelector() {
  const [currentLanguage, setCurrentLanguage] = useRecoilState(activeLanguage);
  const [currentTheme, setCurrentTheme] = useRecoilState(activeTheme);
  const [themeOrLang, setThemeOrLang] = useState("Languages");
  const [serverlang,setserverlang]=useRecoilState(languageToServer)
  const [serverversion,setserverversion]=useRecoilState(versionToServer)

  console.log(serverlang)
  console.log(serverversion)


  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    
    
  };

  const handleLanguageChange = (language,version) => {
    setCurrentLanguage(language);
    setserverlang(language)
    setserverversion(version)
  };

  return (
    <>
      <div className="h-[5vh] w-full bg-white/30 rounded-md flex items-center p-2 gap-2 justify-between">
        <h1
          className={`${
            themeOrLang === "Languages"
              ? "text-white bg-black p-1 rounded-md"
              : "text-black"
          } cursor-pointer`}
          onClick={() => setThemeOrLang("Languages")}
        >
          Languages
        </h1>
        <h1
          className={`${
            themeOrLang === "Themes"
              ? "text-white bg-black p-1 rounded-md"
              : "text-black"
          } cursor-pointer`}
          onClick={() => setThemeOrLang("Themes")}
        >
          Themes
        </h1>
      </div>
      <div className="h-[86vh] w-full bg-white rounded-md overflow-scroll p-2 flex flex-col gap-1">
        {themeOrLang === "Languages" &&
          languageOptions.map((lang, index) => (
            <div
              key={index}
              onClick={() => handleLanguageChange(lang.language,lang.version)} // Update language here
              className={`p-3 rounded-md h-fit w-full cursor-pointer transition-transform ${
                currentLanguage === lang.language
                  ? "bg-black text-white"
                  : "bg-white hover:bg-black hover:text-white"
              }`}
            >
              {lang.language}
              <span className="px-2"></span>
              {lang.version}
            </div>
          ))}
        {themeOrLang === "Themes" &&
          Object.entries(themes).map(([key, theme], index) => (
            <div
                key={index}
                onClick={() => handleThemeChange(theme.themeValue)}
                className={`p-3 rounded-md h-fit w-full cursor-pointer transition-transform ${
                    currentTheme === theme.themeValue
                        ? "bg-black text-white"
                        : "bg-white hover:bg-black hover:text-white"
                }`}
            >
                {theme.themeName}
            </div>
        ))}
      </div>
    </>
  );
}

export default LangThemeSelector;
