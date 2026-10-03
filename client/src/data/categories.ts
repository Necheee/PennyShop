export interface Subcategory {
  slug: string;
  name: string;
  parent: 'tops' | 'bottoms';
}

export interface Category {
  slug: 'tops' | 'bottoms';
  name: string;
  subcategories: Subcategory[];
}

export const CATEGORIES: Record<'tops' | 'bottoms', Category> = {
  tops: {
    slug: 'tops',
    name: 'Tops',
    subcategories: [
      { slug: 'henleys', name: 'Henleys', parent: 'tops' },
      { slug: 'quarter-zips', name: 'Quarter Zips', parent: 'tops' },
      { slug: 'hoodies', name: 'Hoodies', parent: 'tops' },
      { slug: 'tees', name: 'Tees', parent: 'tops' },
      { slug: 'shirts', name: 'Shirts', parent: 'tops' },
      { slug: 'polos', name: 'Polos', parent: 'tops' },
    ],
  },
  bottoms: {
    slug: 'bottoms',
    name: 'Bottoms',
    subcategories: [
      { slug: 'trousers', name: 'Trousers', parent: 'bottoms' },
      { slug: 'shorts', name: 'Shorts', parent: 'bottoms' },
      { slug: 'joggers', name: 'Joggers', parent: 'bottoms' },
    ],
  },
};

export const getAllSubcategories = (): Subcategory[] => {
  return [
    ...CATEGORIES.tops.subcategories,
    ...CATEGORIES.bottoms.subcategories,
  ];
};

