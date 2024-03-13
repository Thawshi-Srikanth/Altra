import telephone from "../images/contactLogos/telephone.png";
import call from "../images/contactLogos/call.png";
import gmail from "../images/contactLogos/gmail.png";
import locationIcon from "../images/contactLogos/location.png";
import web from "../images/contactLogos/web.png";
import fbIcon from "../images/contactLogos/fb.png";
import nullICon from "../images/contactLogos/null.png";

export const contact = [
  {
    id: 1,
    topic1: "Contact",
    icon: [
      { id: 1, img: telephone, info: "0110 000 000" },
      { id: 2, img: call, info: "0770 000 000" },
      { id: 3, img: gmail, info: "altrascientific@gmail.com" },
    ],
  },
  {
    id: 2,
    topic2: "Visit",
    iconTwo: [
      { id: 1, img: locationIcon, info: "217, Central Road, Colombo 12" },
    ],
  },

  {
    id: 3,
    topic3: "Connect",
    iconThree: [
      { id: 1, img: nullICon, info: "@altrascientific" },
      { id: 2, img: web, info: "www.altrascientific.com" },
      { id: 3, img: fbIcon, info: "@altrascientific" },
    ],
  },
];

export default contact;
