import consumables from "../../images/products/cateogories/consumables/consumablesbg.png";
import client from "../../images/products/cateogories/consumables/client.png";
import clientTwo from "../../images/products/cateogories/consumables/clientTwo.png";
import clientThree from "../../images/products/cateogories/consumables/clientThree.png";
import clientFour from "../../images/products/cateogories/consumables/clientFour.png";

export const consumablesProductTemplate = [
  {
    id: 1,
    imgOne: consumables,
    clients: [
      { id: 1, client: client, nextpath: "johnson", index: 0 },
      { id: 2, client: clientTwo, nextpath: "water", index: 1 },
      { id: 3, client: clientThree, nextpath: "lactos", index: 2 },
      { id: 4, client: clientFour, nextpath: "geyer", index: 3 },
    ],
  },
];

export default consumablesProductTemplate;
