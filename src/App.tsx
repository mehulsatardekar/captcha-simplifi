import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./chakra-theme/ChakraThemeExtender";
import './App.css'
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Homepage } from "./pages";
import { ThemeSwitcher } from "./contexts";

function App() {

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ThemeSwitcher>
        <Router>
            <Homepage />
        </Router>
      </ThemeSwitcher>
    </ChakraProvider>
  )
}

export default App
