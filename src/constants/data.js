import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '4500rs',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '5789rs',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '4080rs',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '3800rs',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '7200rs',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '1800rs',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '999rs',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '850rs',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '2559rs',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '1799rs',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'shooting star',
    subtitle: 'fascinated enterpreneur',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'fascinated enterpreneur',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'fascinated enterpreneur',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'fascinated enterpreneur',
  },
];

export default { wines, cocktails, awards };
