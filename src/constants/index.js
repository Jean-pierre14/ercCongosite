import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Accueil" },
  { href: "#about-us", label: "À propos de nous" },
  { href: "#products", label: "Services et horaires" },
  // { href: "#Enseignement", label: "Enseignement" },
  { href: "#Ministères ", label: "Ministères " },
  { href: "#Événements  ", label: "Événements  " },
  // { href: "#contact-us", label: "Contact Nous" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Nos Eglises",
    links: [
      { name: "ERC-Kinshasa", link: "/" },
      { name: "ERC-Beni", link: "/" },
      { name: "ERC-Ndosho", link: "/" },
      { name: "ERC-Katindo", link: "/" },
      { name: "ERC-Bunia", link: "/" },
      { name: "ERC-Goma", link: "/" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Predication", link: "/" },
      { name: "Choral", link: "/" },
      { name: "Evangelisation", link: "/" },
      { name: "Priere", link: "/" },
      { name: "Adoration", link: "/" },
    ],
  },
  {
    title: "Pour plus d'informations",
    links: [
      { name: "erc.congo@erc.com", link: "mailto:erc.congo@erc.com" },
      { name: "+250784545831", link: "tel:+250784545831" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
