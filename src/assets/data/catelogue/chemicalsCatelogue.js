import accustand from "../../images/products/cateogories/chemicals/catelogueImages/bg/accustand.png";
import megazyme from "../../images/products/cateogories/chemicals/catelogueImages/bg/megazyme.png";
import chemlab from "../../images/products/cateogories/chemicals/catelogueImages/bg/chemlab.png";
import A from "../../images/products/cateogories/chemicals/catelogueImages/accustand/A.png";
import B from "../../images/products/cateogories/chemicals/catelogueImages/accustand/B.png";
import C from "../../images/products/cateogories/chemicals/catelogueImages/accustand/C.png";
import D from "../../images/products/cateogories/chemicals/catelogueImages/accustand/D.png";
import E from "../../images/products/cateogories/chemicals/catelogueImages/accustand/E.png";
import F from "../../images/products/cateogories/chemicals/catelogueImages/accustand/F.png";
import G from "../../images/products/cateogories/chemicals/catelogueImages/accustand/G.png";
import H from "../../images/products/cateogories/chemicals/catelogueImages/accustand/H.png";
import I from "../../images/products/cateogories/chemicals/catelogueImages/accustand/I.png";
import J from "../../images/products/cateogories/chemicals/catelogueImages/accustand/J.png";
import K from "../../images/products/cateogories/chemicals/catelogueImages/accustand/K.png";

import AA from "../../images/products/cateogories/chemicals/catelogueImages/chemlab/A.png";
import BB from "../../images/products/cateogories/chemicals/catelogueImages/chemlab/B.png";
import CC from "../../images/products/cateogories/chemicals/catelogueImages/chemlab/C.png";
import DD from "../../images/products/cateogories/chemicals/catelogueImages/chemlab/D.png";
import EE from "../../images/products/cateogories/chemicals/catelogueImages/chemlab/E.png";
import FF from "../../images/products/cateogories/chemicals/catelogueImages/chemlab/F.png";

import HH from "../../images/products/cateogories/chemicals/catelogueImages/chemlab/H.png";
import II from "../../images/products/cateogories/chemicals/catelogueImages/chemlab/I.png";

import AAA from "../../images/products/cateogories/chemicals/catelogueImages/megazyme/A.png";
import BBB from "../../images/products/cateogories/chemicals/catelogueImages/megazyme/B.png";

import CCC from "../../images/products/cateogories/chemicals/catelogueImages/megazyme/C.png";

import EEE from "../../images/products/cateogories/chemicals/catelogueImages/megazyme/E.png";
import FFF from "../../images/products/cateogories/chemicals/catelogueImages/megazyme/F.png";

import HHH from "../../images/products/cateogories/chemicals/catelogueImages/megazyme/H.png";
import III from "../../images/products/cateogories/chemicals/catelogueImages/megazyme/I.png";
import JJJ from "../../images/products/cateogories/chemicals/catelogueImages/megazyme/J.png";
import KKK from "../../images/products/cateogories/chemicals/catelogueImages/megazyme/K.png";

export const chemicalsCatelogue = [
  {
    id: "chemicatalogue",
    bgImage: [
      { id: 1, img: accustand, title: "accustand" },
      { id: 2, img: chemlab, title: "chemlab" },
      { id: 3, img: megazyme, title: "megazyme" },
    ],

    text: "METHOD, established in 1990, transitioned from trading to manufacturing laboratory fittings in 1994, offering cost-effective options to the growing market. With over 30 years of experience, METHOD is a trusted supplier of laboratory fixtures in over 40 countries, prioritizing quality, affordability, and innovation. The company remains committed to providing customized solutions and ensuring workplace safety through continuous research and collaboration.",
    catelogue: [
      {
        catelogueName: "accustand",
        index: 0,
        catlogueImages: [
          { id: 1, Catlogueimage: A, alt: "" },
          { id: 2, Catlogueimage: B, alt: "" },
          { id: 3, Catlogueimage: C, alt: "" },
          { id: 4, Catlogueimage: D, alt: "" },

          { id: 5, Catlogueimage: E, alt: "" },
          { id: 6, Catlogueimage: F, alt: "" },

          { id: 7, Catlogueimage: G, alt: "" },
          { id: 8, Catlogueimage: H, alt: "" },
          { id: 9, Catlogueimage: I, alt: "" },
          { id: 10, Catlogueimage: J, alt: "" },
          { id: 11, Catlogueimage: K, alt: "" },
        ],
      },
      {
        catelogueName: "chemlab",
        index: 1,
        catlogueImages: [
          { id: 1, Catlogueimage: AA, alt: "" },
          { id: 2, Catlogueimage: BB, alt: "" },
          { id: 3, Catlogueimage: CC, alt: "" },
          { id: 4, Catlogueimage: DD, alt: "" },
          { id: 5, Catlogueimage: EE, alt: "" },
          { id: 6, Catlogueimage: FF, alt: "" },

          { id: 8, Catlogueimage: HH, alt: "" },
          { id: 9, Catlogueimage: II, alt: "" },
          { id: 10, Catlogueimage: J, alt: "" },
        ],
      },
      {
        catelogueName: "megazyme",
        index: 2,
        catlogueImages: [
          { id: 1, Catlogueimage: AAA, alt: "" },

          { id: 2, Catlogueimage: BBB, alt: "" },
          { id: 3, Catlogueimage: CCC, alt: "" },

          { id: 5, Catlogueimage: EEE, alt: "" },
          { id: 6, Catlogueimage: FFF, alt: "" },

          { id: 8, Catlogueimage: HHH, alt: "" },
          { id: 9, Catlogueimage: III, alt: "" },
          { id: 10, Catlogueimage: JJJ, alt: "" },
          { id: 11, Catlogueimage: KKK, alt: "" },
        ],
      },
    ],
  },
];

export default chemicalsCatelogue;
