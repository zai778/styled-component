import "../footer/Footer.css";

export default function Footer() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <p style={RevS}> We hope you like it ^_^</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarlinks">FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="https://www.instagram.com">
            {" "}
            <i className="topIcon fab fa-instagram-square"></i>
          </a>
          <a href="https://pinterest.com">
            {" "}
            <i className="topIcon fab fa-pinterest-square"></i>
          </a>

          <a href="https://twitter.com">
            {" "}
            <i className="topIcon fab fa-twitter-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
const RevS = {
  color: "red",
  fontSize: "1.5rem",
  fontFamily: "Courier New,monospace",
  fontWeight: "900",
};
