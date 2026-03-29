export interface MenuItem {
  id: string;
  price: string | null;
  featured?: boolean;
  ctaHref?: string;
}

export interface ShopInfo {
  name: string;
  foundedYear: number;
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
  icon: string;
}
