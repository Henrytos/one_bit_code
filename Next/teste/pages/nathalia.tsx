import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
type userDataType = {
  name: string;
  menssage: string;
  age: number;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const severSideData: userDataType = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/persons`
  ).then((res) => res.json());
  return {
    props: { severSideData },
  };
};

const nathalia: NextPage = (props: {
  children?: ReactNode;
  severSideData?: userDataType;
}) => {
  const [dataUser, setDataUser] = useState<userDataType | null>(null);

  useEffect(() => {
    dataFetch();
  }, []);
  const dataFetch = async () => {
    const dataUser: userDataType = await fetch("/api/persons").then((res) =>
      res.json()
    );
    setDataUser(dataUser);
  };
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Gerado lado servidor:</h1>
            <p>nome:{props.severSideData?.name}</p>
            <p>idade:{props.severSideData?.age}</p>
            <p>Menssagen:{props.severSideData?.menssage}</p>
          </Col>
          <Col>
            <h1>Gerado lado Cliente:</h1>
            <p>nome:{dataUser?.name}</p>
            <p>idade:{dataUser?.age}</p>
            <p>Menssagen:{dataUser?.menssage}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default nathalia;
