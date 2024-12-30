import { createContext,useState } from "react";
import Footer from "./Footer/Footer";
import Navbar from "./Header/Navbar";
import Main from "./Main/Body";

export const Themex = createContext();

const App = () => {
 const [theme,setTheme] = useState(true);

 let themeColor = (theme)?"bg-black ":null;

  return (
    <Themex.Provider value={{theme,setTheme}}>
    <div className={"scroll-smooth "+themeColor}>
      <Navbar />
      <Main />
      <Footer />
    </div>
    </Themex.Provider>
  );
};

export default App;
