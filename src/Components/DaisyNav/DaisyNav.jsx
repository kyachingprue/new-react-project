import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import { AiOutlineMenu,AiOutlineClose  } from "react-icons/ai";

const DaisyNav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
  { id: 1, path: "/", name: "Home" },
  { id: 2, path: "/about", name: "About Us" },
  { id: 3, path: "/services", name: "Services" },
  { id: 4, path: "/contact", name: "Contact Us" },
  { id: 5, path: "/blog", name: "Blog" }
];

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="md:hidden text-4xl">
        {
          open === true ? <AiOutlineClose></AiOutlineClose>:  <AiOutlineMenu></AiOutlineMenu>
        }
        
     </div>
      <ul className={`md:flex absolute md:static shadow-xl rounded-xl px-4 py-2 ${open ? '' : 'hidden'} bg-green-700 justify-around items-center`}>
        {
          routes.map(route => <NavBar key={route.id} route={route} ></NavBar>)
        }
      </ul>
    </div>
  );
};

export default DaisyNav;