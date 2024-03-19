import "../style/header.css";
import NavBar from "./Navigation";

const Header = () => {
  const name = "Travis Shanhun";
  const slogan = "~Let's Create Tomorrow~";

  return (
    <header>
      <a href="/">
        <h1 className="title name-main">{name}</h1>
        <p className="slogan">{slogan}</p>
      </a>

      <NavBar />
    </header>
  );
};

export default Header;
