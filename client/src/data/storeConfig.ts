export const storeConfig = {
  announcements: [
    "Enjoy free shipping on orders above ₦75,000",
    "Lagos delivery in 1 to 3 days"
  ],
  shipping: {
    freeShippingThreshold: 75000,
    zones: [
      {
        name: "Lagos",
        fee: 2500,
        estimatedDays: "1 to 3 business days"
      },
      {
        name: "Outside Lagos",
        fee: 4500,
        estimatedDays: "3 to 7 business days"
      },
      {
        name: "International",
        fee: null, // Calculated at checkout
        estimatedDays: "10 to 14 business days"
      }
    ]
  },
  contact: {
    email: "hello@pennyshop.com",
    phone: "+234 800 000 0000",
    instagram: "@pennyshop",
    twitter: "@pennyshop"
  }
};
