import type { MenuItem, ShopInfo, LocationInfo, SocialLink } from "@/types";

export const shopInfo: ShopInfo = {
  name: "Pig-nic & Brew",
  tagline: "Est. 2024 — The Modern Alchemist",
  foundedYear: 2024,
};

export const images = {
  heroBg:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC46PKPqgT44q7vR-23kTLlvGt9WzqDHGnXbOvL2k-WuM_uWmrgcmKc-RQYAJixMbsvRpk7XuYMEJcDt9TPlAdoSR3Jv_-Fi_Nexp4S4-R2hmjfUFtEW1YLSCrQz15YqUPEPbW14nizJ99cNlDr3L6J-QuqpIaKJcVU_V-NEJeyFEkrL0_TRg65PR4fPx4wRd5G4LcYQdAD1RXMny5r4n4JBNNLvik1-rYSS8ugZFITS8duhVuTLZ8LgqrIYX8JqNm3pcDOXklZFNA",
  heroLogo:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDwqWbaR6NjftQjUup7ZxiHo3D2KUrVDwSi6ggvGz8sIgQuuitlm4qnoOBeVDhIwoKG_rHN8mbPDultWROyU4jTzJIvDCgqYI5BWKqOFCUu4JMhmUpqTKFZ4HY9lBhqBpgowxbfGO6nGitlGkxowwxob_MA08M1kKA1_COgF-kxsSVjQMcG5_x5c9nuYCk0OwEJ7ak-XydhmbUjb3uuZlVcaAwNLigvv2j-jCf2G4Z-AzIbAMlqQSnqUX_-AgkpKezuv8bk67kKc0",
  storyImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA9e_42b1WbgsrG6kVPSaJ_n4WeCyeSvnaMmeG_MjFmnu3MePd4QN_j4hZR1gXIyPkhRS2QctTI1rfXclKnYCOhDm6248RHkmriuXdqAHVSIF_RhwFVC5j5YyVNuq63hhceu1_9ktiwzYSJLv9MAKVSZLLmp5GDd2Byo9LuKM9ZrQEiTWsZXQOndNXHiRmOfTXWj3UjIbnzXqWPgYrUT-CER8ltmwTuHnYpFrsVFQJWHgcL48ZjA9ejwM5yLxH3IYlkaCECduYDEQM",
  menuFeatured:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD_PHrCP9Xo3FewBs3Tvw906Wwu9ZS3PbgRUbw66qsuwgunurdqEi67R9SHVPdFExCR7A8fp8R3lBsFPtdkpyP6smBbdzrinxq89sT8UA3jHQCywpnYX7wat04p_RRax7Wq4VZ1px8SKTdWTgIebVjQsFwGJaiaj-CUPdGUNvYOd8r4gZNGLY0rRJlA5G2rH1kPGX5XdwxxfEVKdITvtL6l73BxEn0ZaUk4xGYGHKcHtCqR5Frf2cCQr2aLLvbNEul4oH4hY0LrJFk",
  locationImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDqkSRVsHBt4tPAeyn0bqUC6mvR-6DaK8I6NPITFK1oJ9LaTTRIOeZwsT517nph4Z16gcV44WohtNDN7aT0hPuDVy3tQa6wyXUgk94xRm6WDpynHCXWWAB6gIrcc7qcc5FOQntVQCn2zP4WXAWwdAN5sPygBtyE9pa8HcCh1ITQ6586Un_sX4WOyVbR0UHWbwTkc1SIIM-7EIredRYVYuIfvUE_Cmi5h5zphCs57NfblBfneQyMLyPluXwBDkuhRdwTcvq-bzw25ac",
};

export const menuItems: MenuItem[] = [
  {
    id: "obsidian-drip",
    name: "The Obsidian Drip",
    price: "$6.50",
    description:
      "Our flagship pour-over. Ethiopian single-origin beans with distinct notes of bergamot and jasmine.",
    tag: "Signature Roast",
  },
  {
    id: "oat-cortado",
    name: "Oat Milk Cortado",
    price: "$5.25",
    description:
      "A perfect 1:1 ratio of silky steamed oat milk and a double shot of our espresso blend.",
    tag: "Vegan Friendly",
  },
  {
    id: "truffle-latte",
    name: "Smoked Truffle Latte",
    price: "$8.00",
    description:
      "A daring fusion of dark chocolate, smoked hickory salt, and a hint of white truffle oil.",
    tag: "Chef's Choice",
  },
  {
    id: "artisanal-toast",
    name: "Artisanal Toast",
    price: "$12.00",
    description:
      "Thick-cut brioche topped with whipped honey ricotta and roasted seasonal figs.",
    tag: "Sweet Pairing",
  },
  {
    id: "tasting-flight",
    name: "The Tasting Flight",
    price: null,
    description:
      "Experience the full spectrum of our roasting profiles. A curated trio of our rarest seasonal harvests served in crystal glassware.",
    tag: "Experience",
    featured: true,
    ctaLabel: "Book a Session",
    ctaHref: "#location",
  },
];

export const locationInfo: LocationInfo = {
  locationName: "The Roastery",
  address: ["124 Artisanal Way, Brew District", "Portland, OR 97204"],
  hours: [
    { days: "Mon — Fri", hours: "07:00 – 19:00" },
    { days: "Sat — Sun", hours: "08:00 – 21:00" },
  ],
};

export const socialLinks: SocialLink[] = [
  { platform: "instagram", href: "#", label: "Instagram", icon: "camera" },
  { platform: "web", href: "#", label: "Website", icon: "public" },
];
