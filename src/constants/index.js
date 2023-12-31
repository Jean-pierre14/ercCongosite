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

import masasu from "../assets/images/masasu.png";
import bisimwa from "../assets/images/bisimwa.jpeg";
import coupleMasasu from "../assets/images/coupleMasasu.png";

export const navLinks = [
  { href: "#home", label: "Accueil" },
  { href: "#pasteurs", label: "Nos Pasteurs" },
  // { href: "#Enseignement", label: "Enseignement" },
  { href: "#Ministères ", label: "Ministères " },
  { href: "#Événements  ", label: "Événements  " },
  { href: "#products", label: "Services et horaires" },
  // { href: "#contact-us", label: "Contact Nous" },
];

export const statistics = [
  { value: "1k+", label: "Fideles" },
  { value: "500+", label: "Pasteurs" },
  { value: "250k+", label: "Eglises" },
];

export const pasteurs = [
  { imgURL: masasu, name: "Apotre Masasu Masengo", location: "Kigali" },
  { imgURL: masasu, name: "Gabriel Masasu", location: "Gisenyi" },
  { imgURL: bisimwa, name: "Valoi", location: "Gisenyi" },
  { imgURL: coupleMasasu, name: "Bisimwa Grace", location: "Goma" },
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
    subtext:
      "Dispenser des enseignements bibliques lors des cultes et des réunions religieuses. Prêcher la Parole de Dieu pour nourrir spirituellement la congrégation",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Dispenser des enseignements bibliques lors des cultes et des réunions religieuses. Prêcher la Parole de Dieu pour nourrir spirituellement la congrégation",
  },
  {
    imgURL: support,
    label: "L'amour du prochain",
    subtext: "Jesus-Christ nous a dit de nous aimer les uns aux autres.",
  },
];

export const reviews = [
  {
    imgURL: masasu,
    customerName: "Apotre Masasu",
    rating: "Rwanda, Kigali",
    feedback:
      "Les Épîtres : Les lettres écrites par les apôtres du Nouveau Testament, comme Paul, Pierre, Jean et Jacques, contiennent également des témoignages et des enseignements sur Jésus-Christ.",
  },
  {
    imgURL: coupleMasasu,
    customerName: "Couple Masasu",
    rating: "Rwanda, Kigali",
    feedback:
      "Les Actes des Apôtres : Le livre des Actes, également dans le Nouveau Testament, raconte les débuts de l'Église chrétienne après la résurrection de Jésus et la descente du Saint-Esprit sur les apôtres.",
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
