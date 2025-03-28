import { AppRouter } from "./components/AppRouter";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import css from "./style.module.css";

export const App = () => {
  return (
    <div >
<Header/>
<AppRouter/>
<Footer/>
  
    </div>
  );
}


