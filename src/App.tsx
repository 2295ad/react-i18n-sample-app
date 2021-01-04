import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Trans, useTranslation } from "react-i18next";
import {StyledButton} from './components/styledButton';

function App() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
      i18n.changeLanguage(language);
    };

  return (
    <div className="App">
       {/* <button onClick={() => changeLanguage("en")}>EN</button>
       <button onClick={() => changeLanguage("de")}>DE</button> */}
       <StyledButton onClick={() => changeLanguage("en")} bg="red">EN</StyledButton>
       <StyledButton onClick={() => changeLanguage("de")} bg="blue">DE</StyledButton>
       <hr/>

       <Trans i18nKey="message">
         <p>
            Hello, Good Morning!
        </p>
      </Trans>
    </div>
  );
}

export default App;
