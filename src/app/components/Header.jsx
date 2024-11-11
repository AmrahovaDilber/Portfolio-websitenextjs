import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="py-4 bg-[black] w-full fixed left-0 right-0 z-50  top-0 bg-opacity-90 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo></Logo>
        <Navbar></Navbar>
      </div>
    </div>
  );
}
export default Header;
