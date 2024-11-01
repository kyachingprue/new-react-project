import NavBar from "../NavBar/NavBar";
import { RiMenu2Fill } from 'react-icons/ri';

const DaisyNav = () => {

  const routes = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About Us" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/contact", name: "Contact Us" },
  { id: 5, path: "/blog", name: "Blog" }
];

  return (
    <div>
      <RiMenu2Fill className="text-3xl md:hidden"></RiMenu2Fill>
      <ul className="md:flex justify-around items-center">
        {
          routes.map(route => <NavBar key={route.id} route={route} ></NavBar>)
        }
      </ul>
    </div>
  );
};

export default DaisyNav;