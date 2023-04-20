import Item from "./Item";
import { CONTACTO, NAVEGAR } from "./Menus";
import imagen from '../../about/logardo.png'
const ItemsContainer = () => {
  return (
    <div className="flex justify-evenly gap-6 sm:px-8 px-5 py-16">
      <Item Links={NAVEGAR} title="NAVEGAR" />
      <img src={imagen} alt="Descripción de la imagen" className="w-16 h-14" />
      <Item Links={CONTACTO} title="CONTACTO" />
    </div>
  );
};

export default ItemsContainer;