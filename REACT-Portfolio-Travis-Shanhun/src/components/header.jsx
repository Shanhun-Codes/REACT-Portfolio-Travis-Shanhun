import "../../style/header.css"

const Header = () => {
    const name = "Travis Shanhun"
    const slogan = "~Let's Create Tomorrow~"
    return ( 
        <header>
            <h1 className="title name-main">{name}</h1>
            <p className="slogan">{slogan}</p>
        </header>
     );
}
 
export default Header;
