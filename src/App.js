import { ThemeProvider, styled } from "styled-components";
import React, { useState } from 'react';
import Navbar from './components/Navbar';
//import { useState } from "react";
import { lightTheme } from "./utils/Theme";
import { BrowserRouter } from "react-router-dom";
import Authentication from "./pages/Authentication";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  const [user] = useState(true);
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      {user ? (
       <Container>
        <Navbar/>
       </Container>
      ) : (
     
        <Container>
          <Authentication />
        </Container>
         )}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
