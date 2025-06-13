import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./assets/Food.jsx";
function App() {
      
  return(
     //returning of two componats is not allowed
    <>
   <Header/>  
   <Footer/>
   <Food/>
   </>  // we should inclose all componats in a fragments
  );
}

export default App
