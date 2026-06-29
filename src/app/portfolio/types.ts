export type PortfolioColor = {
  name: string;
  hex: string;
};

export type PortfolioFont = {
  name: string;
  description: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  url: string;
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
    tertiaryImages?: string[];
  };
  testimonial?: {
    quote: string;
    attribution: string;
    role: string;
  };
  brand: {
    heading: string;
    tagline: string;
    mainColor?: PortfolioColor;
    colors: PortfolioColor[];
    fonts?: PortfolioFont[];
    imageDescription?: string;
    tags: string[];
  };
};

export type PortfolioData = {
  projects: PortfolioProject[];
};
