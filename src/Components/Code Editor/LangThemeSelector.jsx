import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { activeLanguage, activeTheme } from '../Atoms/Atoms';
import { languages } from '../../Data/Data';
import { monacoThemes } from '../../Data/Data';
import { defineTheme } from '../../Data/Data';

function LangThemeSelector() {
  const [currentLanguage, setCurrentLanguage] = useRecoilState(activeLanguage);
  const [currentTheme, setCurrentTheme] = useRecoilState(activeTheme);
  const [themeOrLang, setThemeOrLang] = useState('Languages');

  const themes = Object.entries(monacoThemes).map(([themeId, themeName]) => ({
    label: themeName,
    value: themeId,
    key: themeId,
  }));




  function handleThemeChange(th) {
    const theme = th;
    console.log("theme...", theme);

    if (["light", "vs-dark"].includes(theme)) {
      setCurrentTheme(theme);
    } else {
      defineTheme(theme).then((_) => setCurrentTheme(theme));
    }
  }


  return (
    <>
      <div className="h-[5vh] w-full bg-white/30 rounded-md flex items-center p-2 gap-2 justify-between">
        <h1 className='cursor-pointer' onClick={() => setThemeOrLang('Languages')}>Languages</h1>
        <h1 className='cursor-pointer' onClick={() => setThemeOrLang('Themes')}>Themes</h1>
      </div>
      <div className="h-[86vh] w-full bg-white rounded-md overflow-scroll p-2 flex flex-col gap-1">
        {themeOrLang === 'Languages' &&
          languages.map((lang, index) => (
            <div
              key={index}
              onClick={() => setCurrentLanguage(lang)}
              className={`p-3 rounded-md h-fit w-full cursor-pointer transition-transform ${
                currentLanguage === lang ? 'bg-black text-white' : 'bg-white hover:bg-black hover:text-white'
              }`}
            >
              {lang}
            </div>
          ))}
        {themeOrLang === 'Themes' &&
          themes.map((theme, index) => (
            <div
              key={index}
              onClick={() => handleThemeChange(theme.value)}
              className={`p-3 rounded-md h-fit w-full cursor-pointer transition-transform ${
                currentTheme === theme.value ? 'bg-black text-white' : 'bg-white hover:bg-black hover:text-white'
              }`}
            >
              {theme.label}
            </div>
          ))}
      </div>
    </>
  );
}

export default LangThemeSelector;
