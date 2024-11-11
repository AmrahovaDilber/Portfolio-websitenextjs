import NavLink from "./NavLink";
const navLinks = [
  { href: "#home", title: "Home" },
  {href:"#projects",title:"Projects"},
  { href: "#resume", title: "Resume" },
  { href: "#skills", title: "Skills" },
  { href: "#contact", title: "Contact" },

];

function Navbar() {
  return (
    <nav >
      <ul className="flex space-x-6 lg:space-x-12 pr-8">
        {navLinks.map((link) => (
            <li key={link.href}  className="text-white font-semibold text-[18px]">
            <NavLink href={link.href} title={link.title}></NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
