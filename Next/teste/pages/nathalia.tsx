import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

interface ApiResponse {
  name: string;
  menssage: string;
  age: number;
}
export const getServerSideProps: GetServerSideProps = async () => {
  const userData: ApiResponse = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/persons`
  ).then((res) => res.json());

  return {
    props: {
      userData,
    },
  };
};

const nathalia: NextPage = (props: {
  children?: ReactNode;
  userData?: ApiResponse;
}) => {
  const [userData, setUserData] = useState<ApiResponse>();
  useEffect(() => {
    fetchDataUser();
  }, []);
  const fetchDataUser = async () => {
    const userData: ApiResponse = await fetch("/api/persons").then((res) =>
      res.json()
    );
    setUserData(userData);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Gerado lado servidor:</h2>
            <p>eu amo a {props.userData?.name}</p>
            <p>tem {props.userData?.age}</p>
          </Col>
          <Col>
            <h2>gerado lado cliente:</h2>
            <p>eu amo a {userData?.name}</p>
            <p>tem {userData?.age}</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default nathalia;
