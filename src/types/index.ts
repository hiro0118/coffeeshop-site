export interface MenuItem {
  id: string;
  name: string;
  price: string | null;
  description: string;
  tag: string;
  featured?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface HoursEntry {
  days: string;
  hours: string;
}

export interface ShopInfo {
  name: string;
  tagline: string;
  foundedYear: number;
}

export interface LocationInfo {
  locationName: string;
  address: string[];
  hours: HoursEntry[];
}

export interface SocialLink {
  platform: string;
  href: string;
  label: string;
  icon: string;
}
