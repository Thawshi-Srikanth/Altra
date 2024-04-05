import equipment from "../../images/products/cateogories/equipmentOne/equipmentbg.png";

import euromax from "../../images/products/cateogories/equipmentOne/newBrands/euromex.png";
import consort from "../../images/products/cateogories/equipmentOne/newBrands/consort.png";
import camlab from "../../images/products/cateogories/equipmentOne/newBrands/camlab.png";
import apera from "../../images/products/cateogories/equipmentOne/newBrands/Apera instruments.png";
import orto from "../../images/products/cateogories/equipmentOne/newBrands/alvarez.png";
import france from "../../images/products/cateogories/equipmentOne/newBrands/Alla france.png";
import jp from "../../images/products/cateogories/equipmentOne/newBrands/jp.png";
import interscience from "../../images/products/cateogories/equipmentOne/newBrands/interscience.png";
import gerber from "../../images/products/cateogories/equipmentOne/newBrands/gerber.png";

export const equipmentProductTemplate = [
  {
    id: 1,
    imgOne: equipment,
    clients: [
      { id: 1, client: france, nextpath: "france", index: 0 },
      { id: 2, client: apera, nextpath: "apera", index: 1 },
      { id: 3, client: orto, nextpath: "orto", index: 2 },
      { id: 4, client: euromax, nextpath: "euromax", index: 3 },
      { id: 5, client: camlab, nextpath: "camlab", index: 4 },
      { id: 6, client: gerber, nextpath: "gerber", index: 5 },
      { id: 7, client: consort, nextpath: "consort", index: 6 },
      { id: 8, client: interscience, nextpath: "interscience", index: 7 },
      { id: 9, client: jp, nextpath: "jp", index: 8 },
    ],
  },
];

export default equipmentProductTemplate;
