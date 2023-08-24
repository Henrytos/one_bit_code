import {
  FiAlertOctagon,
  FiArchive,
  FiEdit3,
  FiFileText,
  FiInbox,
  FiSend,
  FiTrash2,
} from "react-icons/fi";
import WriteButton from "./WriteButton";
import Button from "./Button";

const inlineIcon = "inline mr-1 mb-1";

const Sidebar = () => (
  <aside className="hidden md:flex flex-col items-start gap-2 grow-0 shrink basis-48">
    <WriteButton>
      <FiEdit3 className={inlineIcon} /> Escrever
    </WriteButton>
    <Button active>
      <FiInbox className={inlineIcon} /> Caixa de Entrada
    </Button>
    <Button>
      <FiSend className={inlineIcon} /> Enviados
    </Button>
    <Button>
      <FiFileText className={inlineIcon} /> Rascunhos
    </Button>
    <Button>
      <FiArchive className={inlineIcon} /> Arquivados
    </Button>
    <Button>
      <FiAlertOctagon className={inlineIcon} /> Spam
    </Button>
    <Button>
      <FiTrash2 className={inlineIcon} /> Lixeira
    </Button>
  </aside>
);

export default Sidebar;
