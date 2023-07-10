const Users = [];

interface User {
  id: number;
  login: string;
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
}
interface Repository {
  name: string;
  description: string;
  fork: boolean;
  stargazers_cout: number;
}

async function getUser(name: string) {
  const response = await fetch(`https://api.github.com/users/${name}`);
  const data = await response.json();

  if (data.message !== "Not Found") {
    const user: User = {
      id: data.id,
      login: data.login,
      name: data.name,
      bio: data.bio,
      public_repos: data.public_repos,
      repos_url: data.repos_url,
    };
    Users.push(user);
  } else {
    alert(`Usuario:${name} não encontrado`);
  }
}

function findUser(name: string): User {
  return Users.find((user) => user.login === name) ?? false;
}
function showRepos(result, nameUser: string): void {
  let repos: string = `Repositorio de ${nameUser}`;
  for (let i = 0; i < 4; i++) {
    const repo: Repository = {
      name: result[i].name,
      description: result[i].description,
      fork: result[i].fork,
      stargazers_cout: result[i].stargazers_count,
    };
    repos += `
------------------------------------------
Nome: ${repo.name}
Descrição: ${repo.description ?? "Não poossui descrição"}
Fork: ${repo.fork}
Stars: ${repo.stargazers_cout}`;
  }
  alert(repos);
}
async function getData(name: string) {
  const user: User = findUser(name);
  if (user) {
    const reponse = await fetch(user.repos_url);
    const result = await reponse.json();
    showRepos(result, name);
  } else {
    alert(`Usuario:${name} não encontrado`);
  }
}
function showUsers(): void {
  let users: string = "Usuarios:\n";
  for (let i = 0; i < Users.length; i++) {
    users += `------------------------------------------  
Nome: ${Users[i].name}
Login: ${Users[i].login}
Bio: ${Users[i].bio}
Repositórios: ${Users[i].public_repos}
`;
  }
  alert(users);
}
function calculetRepos(): void {
  const totalRepos = Users.reduce(
    (acum, target) => (acum += target.public_repos),
    0
  );
  alert(`O total de repositorios é : ${totalRepos}`);
}
function topFiveUsers(): void {
  const orderUsers = Users.sort((a, b) => b.public_repos - a.public_repos);
  const topFive = orderUsers.slice(0, 5);
  const topFiveUsers = topFive.reduce(
    (acum: string, target: User, i: number) =>
      (acum += `${i + 1}-${target.name} 
Total: ${target.public_repos}
`),
    ""
  );
  alert(topFiveUsers);
}
async function main() {
  await getUser("Henrytos");
  await getUser("isaacpontes");
  await getUser("felipemotarocha");
  await getUser("lucasmontano");
  await getUser("leonardoscorza");
  await getUser("julianaconde");
  await calculetRepos();
  await topFiveUsers();
}
main();
