const point: [number, number] = [1, -3];

const [x, y] = point;

console.log(point);
console.log({ x, y });

const user: [
  {
    name: string;
    id: number;
    password: string;
    email: string;
  }
] = [
  {
    name: "user1",
    id: 1,
    password: "1234",
    email: "user@example.com",
  },
];

console.log(user);
