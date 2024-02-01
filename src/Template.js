import Navbar from'./component/Navbar';
import Hero from './component/Hero';
import Product from './component/Product';
import Choose from './component/Choose';
import Popular from './component/Popular'
import Blog from "./component/Blog"
import Footer from './component/Footer';

function App() {
  return (
        <>
          <Navbar />
           <Hero />
          <Product />
          <Choose />
          <Popular />
          <Blog />
          <Footer />
        </>
  );
}

export default App;
