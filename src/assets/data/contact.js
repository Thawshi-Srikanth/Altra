import telephone from "../images/contactLogos/telephone.png";
import call from "../images/contactLogos/call.png";
import gmail from "../images/contactLogos/gmail.png";
import locationIcon from "../images/contactLogos/location.png";
import web from "../images/contactLogos/web.png";
import fbIcon from "../images/contactLogos/fb.png";
import linkedIn from "../images/contactLogos/linkedIn.svg";

export const contact = [
  {
    id: 1,
    topic1: "Contact",
    icon: [
      { id: 1, img: telephone, info: "011 744 5564", path: "tel:+94117445564" },
      { id: 2, img: call, info: "077 233 6609 ", path: "tel:+94772336609" },
      {
        id: 3,
        img: gmail,
        info: "sales@altrascientific.com",
        path: "mailto:sales@altrascientific.com",
      },
    ],
  },
  {
    id: 2,
    topic2: "Visit",
    iconTwo: [
      {
        id: 1,
        img: locationIcon,
        info: "452 Negombo Rd, Welisara",
        path: "https://maps.app.goo.gl/nzmBarY3pzQVTSWZ8",
      },
    ],
  },

  {
    id: 3,
    topic3: "Connect",
    iconThree: [
      {
        id: 1,
        img: linkedIn,
        info: "ALTRA SCIENTIFIC PVT LTD",
        path: "https://www.linkedin.com/company/altra-scientific-pvt-ltd/",
      },
      { id: 2, img: web, info: "www.altrascientific.com", path: "" },
      // { id: 3, img: fbIcon, info: "@altrascientific", path: "" },
    ],
  },
];

export default contact;
