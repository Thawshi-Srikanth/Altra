import chemicalsbg from "../../images/products/cateogories/chemicals/chemicalsbg.png";
import client from "../../images/products/cateogories/chemicals/client.png";
import clientTwo from "../../images/products/cateogories/chemicals/clientTwo.png";
import clientThree from "../../images/products/cateogories/chemicals/clientThree.png";



export const chemicalsProductTemplate = [
  {
    id: 1,
    imgOne: chemicalsbg,
    clients: [
      { id: 1, client: client, nextpath: "accustand", index: 0 },
      { id: 2, client: clientTwo, nextpath: "chemlab", index: 1 },
      { id: 3, client: clientThree, nextpath: "megazyme", index: 2 },
    ],
  },
];



export default chemicalsProductTemplate;
