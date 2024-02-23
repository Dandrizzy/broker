export const data = [
  {
    id: 1,
    name: 'Rice',
    price: 1000,
    img: '/chips.png',
  },
  {
    id: 2,
    name: 'Burger',
    price: 1500,
    img: '/burger.png',
  },
  {
    id: 3,
    name: 'chips',
    price: 800,
    img: '/hamburger.png',
  },
];

export const initialState = [
  {
    id: 1,
    name: 'John Banks',
    age: 17,
    sex: 'male',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
  {
    id: 2,
    name: 'Jenny Banks',
    age: 21,
    sex: 'female',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
  {
    id: 3,
    name: 'John Wells',
    age: 24,
    sex: 'male',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
  {
    id: 4,
    name: 'John Banks',
    age: 17,
    sex: 'male',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
  {
    id: 5,
    name: 'John Banks',
    age: 17,
    sex: 'female',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
  {
    id: 6,
    name: 'John Banks',
    age: 17,
    sex: 'male',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
  {
    id: 7,
    name: 'John Banks',
    age: 17,
    sex: 'male',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
  {
    id: 8,
    name: 'Jenny Banks',
    age: 21,
    sex: 'female',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
  {
    id: 9,
    name: 'John Wells',
    age: 24,
    sex: 'male',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
  {
    id: 10,
    name: 'John Banks',
    age: 17,
    sex: 'male',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
  {
    id: 11,
    name: 'John Banks',
    age: 17,
    sex: 'female',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
  {
    id: 12,
    name: 'John Banks',
    age: 17,
    sex: 'male',
    phoneNumber: '09012345678',
    email: 'jo@gmail.com',
    address: '19th street',
  },
];

export const container = {
  hidden: {
    opacity: 0,
    scale: 0,
    // rotate: '0deg',
  },
  visible: {
    opacity: 1,
    scale: 1,
    // rotate: '360deg',
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.3,
      type: 'spring',
    },
  },
};

export const left = {
  hidden: { x: -90, opacity: 0, scale: 0 },
  visible: { x: 0, opacity: 1, scale: 1 },
};
export const right = {
  hidden: { x: 90, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export const bottom = {
  hidden: { y: 90, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
