import React from 'react';
import './App.css';
import StudentClassForm from './component/forms/StudentClassForm';
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <div className="App">
        <StudentClassForm />
      </div>
    </ThemeProvider>
  );
}

export default App;
