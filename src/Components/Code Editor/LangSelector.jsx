import React from 'react';
import { useRecoilState } from 'recoil';
import { activeLanguage } from '../Atoms/Atoms';
import { languages } from '../../Data/Data';

function LangSelector() {
  const [currentLanguage, setCurrentLanguage] = useRecoilState(activeLanguage);

  return (
    <>
    <div className="h-[5vh] w-full bg-white/30 rounded-md flex items-center p-2 gap-2">
    Languages:-
    </div>
    <div className="h-[86vh] w-full bg-white rounded-md overflow-scroll p-2 flex flex-col gap-1">
        {languages.map((lang, index) => (
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
      </div>

    </>
  );
}

export default LangSelector;
