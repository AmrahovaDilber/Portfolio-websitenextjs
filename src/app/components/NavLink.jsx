import Link from "next/link";

function NavLink({ href, title }) {
  return <Link href={href} className='nav'>{title}</Link>;
}
export default NavLink;
