import microscope from "../images/products/cateogories/equipments/microscope.png";
import filterpapers from "../images/products/cateogories/equipments/filterpapers.png";
import labfurniture from "../images/products/cateogories/equipments/labfurniture.png";
import chemicals from "../images/products/cateogories/equipments/chemicals.png";

import micros from "../images/products/cateogories/equipments/hovered/micros.png";
import labfur from "../images/products/cateogories/equipments/hovered/labfur.png";
import chemi from "../images/products/cateogories/equipments/hovered/chemi.png";
import filter from "../images/products/cateogories/equipments/hovered/filter.png";

export const productCategoryData = [
  { id: 1, img1: microscope, img2: micros, alt: "brand01",title:"Equipment",path:"/equipment" },
  { id: 2, img1: filterpapers, img2: filter, alt: "brand01",title:"Filter Paper / Consumables",path:"/filterpapers" },
  { id: 3, img1: labfurniture, img2: labfur, alt: "brand01",title:"Lab Furniture",path:"/labfurniture" },
  { id: 4, img1: chemicals, img2: chemi, alt: "brand01",title:"Chemical & Reagents",path:"/chemicals" },
];

export default productCategoryData;
