import { firstMenuOption, secondMenuOption, thirdMenuOption, fourthMenuOption, fiveMenuOption, } from "./options";
export const Planets = [];
let userOption = 0;
while (userOption !== 6) {
    const menu = `Painel Principal
    1 - Adicionar planeta
    2 - Atualizar Situação
    3 - Adicionar satélite
    4 - Remover satélite
    5 - Listar Planetas
    6 - Sair
  `;
    userOption = Number(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            fiveMenuOption();
            break;
        case 6:
            alert("Encerrando programa");
            break;
        default:
            alert("Opção inválida! Retornando ao painel principal...");
            break;
    }
}
