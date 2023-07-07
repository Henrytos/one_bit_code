type Password = string | number;
//Type

type Description = {
  title: string;
  validate: boolean;
  text: string;
};
type Order = {
  productId: string;
  priece: number;
};
type Product = {
  name: string;
  price: number;
  id: string;
  description?: Description;
};

type User = {
  firstName: string;
  lastName?: string;
  age: number;
  email: string;
  password: Password;
  orders?: Order[];
  products?: Product[];
};

const user: User = {
  firstName: "Henry",
  age: 40,
  email: "henry@gmail.com",
  password: "dadas",
  orders: [
    {
      productId: "1",
      priece: 2000,
    },
    {
      productId: "2",
      priece: 12.5,
    },
  ],
  products: [
    {
      name: "Product 1",
      price: 1000,
      id: "1",
      description: {
        title: "Product 1",
        text: "lorem ipsum dolor",
        validate: true,
      },
    },
    {
      name: "Product 2",
      price: 2000,
      id: "2",
    },
  ],
};

console.log(user);

const printLog = (mensage: string | number) => {
  console.log(mensage);
};

//ele pode ter undefined ou string mas eu quero que não seja undefined
printLog(user.password);

type Author = {
  books: string[];
};

const author: Author & User = {
  firstName: "Henry",
  age: 40,
  email: "henry@gmail.com",
  password: 12,
  books: ["romance", "comedia"],
};

//interface

interface UserInterface {
  readonly firstName: string;
  email?: string;
}

const emailUser: UserInterface & Author = {
  firstName: "Henry",
  email: "henry@gmail.com",
  books: ["romance", "comedia"],
};

console.log(emailUser);
