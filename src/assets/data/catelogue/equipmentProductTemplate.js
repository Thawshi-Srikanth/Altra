import equipment from "../../images/products/cateogories/equipmentOne/equipmentbg.png";
import client from "../../images/products/cateogories/consumables/client.png";
import clientTwo from "../../images/products/cateogories/consumables/clientTwo.png";
import clientThree from "../../images/products/cateogories/consumables/clientThree.png";
import clientFour from "../../images/products/cateogories/consumables/clientFour.png";

import france from "../../images/Brands/brand15.png";
import apera from "../../images/Brands/brand13.png";
import orto from "../../images/Brands/brand14.png";
import eromax from "../../images/Brands/brand10.png";
import camlab from "../../images/Brands/brand12.png";
import gerber from "../../images/Brands/brand9.png";
import consort from "../../images/Brands/brand11.png";
import witeg from "../../images/Brands/brand6.png";
import jp from "../../images/Brands/brand7.png";
import interscience from "../../images/Brands/brand8.png";

export const equipmentProductTemplate = [
  {
    id: 1,
    imgOne: equipment,
    clients: [
      { id: 1, client: france, nextpath: "france", index: 0 },
      { id: 2, client: apera, nextpath: "apera", index: 1 },
      { id: 3, client: orto, nextpath: "orto", index: 2 },
      { id: 4, client: eromax, nextpath: "eromax", index: 3 },
      { id: 5, client: camlab, nextpath: "camlab", index: 4 },
      { id: 6, client: gerber, nextpath: "gerber", index: 5 },
      { id: 7, client: consort, nextpath: "consort", index: 6 },
      { id: 8, client: interscience, nextpath: "interscience", index: 7 },
      { id: 9, client: jp, nextpath: "jp", index: 8 },
    ],
  },
];

export default equipmentProductTemplate;
