import PropTypes from 'prop-types';


const NavBar = ({ route }) => {
  return (
    <div>

      <li className="font-bold text-xl text-white py-5" >
            <a href={route.path}>{route.name}</a>
          </li>
    </div>
  );
};

NavBar.propTypes = {
  route: PropTypes.object,
}

export default NavBar;