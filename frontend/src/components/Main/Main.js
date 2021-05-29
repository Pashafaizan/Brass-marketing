// import logo from './logo.svg';

import Header from "../Header/Header";

import CarouselPage from "../CrouselPage/CrouselPage";
import Card from "../ProductCard/ProductCard"
import Footer from "../Footer/Footer";

function Main() {
  return (
    <div className="App">
      <Header />
      <CarouselPage />
      <h2 className="best_board"> Best Board</h2>
      <Card />
      <Footer />
    </div>
  );
}

export default Main;
