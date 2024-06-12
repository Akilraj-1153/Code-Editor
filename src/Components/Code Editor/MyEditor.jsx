import React from 'react'
import Html_Css_Js from './Html_Css_Js'
import { activeLanguage,codeToServer,languageToServer,versionToServer } from '../Atoms/Atoms';
import { useRecoilState } from 'recoil';
import LangEditor from './LangEditor';

function MyEditor() {
  const [currentLanguage] = useRecoilState(activeLanguage);
  


  return (
    <div className='h-full'>
      { currentLanguage ==='HTML CSS JS'&&
      <Html_Css_Js></Html_Css_Js>
      }
      {currentLanguage !=='HTML CSS JS'&&
    <LangEditor></LangEditor>
      }
    </div>
  )
}

export default MyEditor