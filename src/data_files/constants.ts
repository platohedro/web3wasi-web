import ogImageSrc from "@images/social.png";

import wasi2 from "@images/wasi2.jpg";

export const SITE = {
  title: "Web 3 Wasi",
  tagline: "Programa de Platohedro",
  description: "Programa de Platohedro",
  description_short: "Programa de Platohedro.",
  url: "https://platohedro.org",
  author: "JJ & Noisk8",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Programa de platohedro`,
  description: "ONboarding de blockchain al barrio",
  image: wasi2,
};
