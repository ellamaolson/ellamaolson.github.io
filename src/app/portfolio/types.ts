export type PortfolioColor = {
  hex: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  thumbnail: string;
  company: string;
  industry: string;
  services: string;
  hero: {
    macbookImage: string;
    description: string;
  };
  gallery: {
    mainImage: string;
    secondaryImages: string[];
  };
  testimonial?: {
    quote: string;
    attribution: string;
    role: string;
  };
  brand: {
    heading: string;
    tagline: string;
    colors: PortfolioColor[];
    details: string;
    tags: string[];
    businessCardFront?: string;
    businessCardBack?: string;
  };
  preview: {
    desktopImage: string;
    mobileImage: string;
    liveUrl: string;
    liveUrlMobile?: string;
  };
};

export type PortfolioData = {
  projects: PortfolioProject[];
};
