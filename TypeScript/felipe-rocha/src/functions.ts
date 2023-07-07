const sum = (a: number, b: number): number | string => {
  return (a + b).toString();
};

const value: string | number = sum(1, 2);

const log = (menssage: string | number): void => {
  console.log(menssage);
};

log(sum(2, 2));
log(value);
log("hello world");


