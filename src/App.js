import { AppRouter } from "./components/AppRouter";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";

export const App = () => {
  return (
    <div>
      <Header />
      <ScrollToTop/>
      <AppRouter />
      <Footer />
    </div>
  );
};
