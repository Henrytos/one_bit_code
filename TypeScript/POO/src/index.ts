class Spaceship {
  protected Pname: string;
  protected captain: string;
  protected speed: number;

  set name(name: string) {
    this.Pname = name;
  }
  get name(): string {
    return this.Pname;
  }
  constructor(name: string, captain: string) {
    this.name = name;
    this.captain = captain;
    this.speed = 0;
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time;
  }
}

class Fighter extends Spaceship {
  weapons: number;

  constructor(name: string, captain: string, weapons: number) {
    super(name, captain);
    this.weapons = weapons;
  }

  public shoot(): void {
    for (let i = 0; i < this.weapons; i++) {
      console.log("Pew!");
    }
  }

  public erase(): void {
    this.captain = "";
  }
}

let ship = new Fighter("USS Enterprise", "James T. Kirk", 10);

let henry = new Fighter("henry", "isaac", 20);
console.log(henry.name);
henry.name = "Henry franz ramos arcaya";
console.log(henry.name);
