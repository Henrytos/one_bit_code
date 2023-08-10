import Button from "./Components/Button";
import Separetor from "./Components/Separetor";
import SubTitle from "./Components/SubTitle";
import Title from "./Components/Title";
import photo from "./assets/imgs/photo-rebeca.png";

export default function Card() {
  return (
    <>
      <main>
        <img src={photo} alt="Foto de Rebecca Young" />
        <Title>Rebecca Young</Title>
        <Separetor></Separetor>
        <SubTitle> Photographer</SubTitle>
        <Button>portifolio</Button>
        <Button>courses</Button>
        <Button>e-books</Button>
        <Button>message me</Button>
      </main>
    </>
  );
}
