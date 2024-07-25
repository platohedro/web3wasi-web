// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Web3 EsCool", url: "/products" },
  { name: "Infraestructura", url: "/services" },
  { name: "Bitácora", url: "/blog" },
  { name: "Acerca de", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "Tools & Equipment", url: "/products" },
      { name: "Construction Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "#" },
      { name: "Customers", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/platohedro",
  x: "https://x.com/platohedro",
  github: "https://github.com/platohedro",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};