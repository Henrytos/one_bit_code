function PrimaryBtn() {
  return <button>Meu botão</button>;
}
function NavBar() {
  return (
    <nav>
      <img src="" alt="" />
      <PrimaryBtn />
      <PrimaryBtn />
    </nav>
  );
}
function Container() {
  return (
    <div className="container">
      <h1>Olá</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        voluptatum quo impedit exercitationem provident error ipsam magni nam
        voluptatibus blanditiis!
      </p>
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <div>
        <p>Copyright &copy; 2020</p>
      </div>
    </footer>
  );
}

function Body() {
  return (
    <div>
      <NavBar />
      <Container />
      <Footer />
    </div>
  );
}
