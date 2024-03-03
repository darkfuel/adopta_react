import Header from "./componentes/Header";
import "./App.css";
import Footer from "./componentes/Footer";
import MyCard from "./componentes/MyCard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="main">
        <Header titulo="Adopta un Perrito" />
        <MyCard
          imagen="https://i.ibb.co/P4shDby/pexels-sebastian-coman-travel-3610168.jpg"
          nombre="Toby"
          descrip="Lindo Schnauzer busca dar compañía y alegría"
          color="primary"
          btnNombre="Schnauzer"
        />
        <MyCard
          imagen="https://i.ibb.co/ZTL7Yjp/pexels-emsi-belli-14739822.jpg"
          nombre="Brandon"
          descrip="Hermoso Cocker con 2 meses, sano, obediente y cariñoso"
          color="secondary"
          btnNombre="Cocker S."
        />
        <MyCard
          imagen="https://i.ibb.co/hgqsNYM/pexels-kaboompics-com-5549.jpg"
          nombre="Laika"
          descrip="Labradora juguetona, ágil y bien portada busca nuevo hogar"
          color="warning"
          btnNombre="Labrador"
        />
        <MyCard
          imagen="https://i.ibb.co/s2DDhrF/pexels-dominika-roseclay-2023386.jpg"
          nombre="Zeus"
          descrip="Bonito Rottweiler vacunado y desparasitado con 1 mes de nacido está dispuesto a crecer en un nuevo hogar"
          color="success"
          btnNombre="Rottweiler"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
