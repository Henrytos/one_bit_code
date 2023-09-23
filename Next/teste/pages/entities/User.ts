class User {
  private name: string;
  private message: string;
  private age: number;

  constructor(name: string, message: string, age: number) {
    this.name = name;
    this.message = message;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getMessage(): string {
    return this.message;
  }

  getAge(): number {
    return this.age;
  }
  setName(name: string): void {
    this.name = name;
  }

  setMessage(message: string): void {
    this.message = message;
  }

  setAge(age: number): void {
    this.age = age;
  }
}

export default User;
