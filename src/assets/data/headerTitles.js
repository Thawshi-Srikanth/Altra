import toggledown from "../images/toggledown.png";
import search from "../images/search.svg";

export const headerTitles = [
  { id: 1, name: "Home", path: "/" ,color:"text-[#FF8A3A]"},
  { id: 2, name: "Products", path: "/products" },
  { id: 3, name: "Research", path: "/research", img: toggledown },
  { id: 4, name: "Services", path: "/services" },
  { id: 5, name: "About Us", path: "/aboutUs" },
  { id: 6, name: "Contact", path: "/contact" },
  { id: 7, name: "Search", path: "", lense: search, },
];

export default headerTitles;
