import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { name, id, price, duration, features } = option;
  return (
    <div className="bg-blue-300 text-black flex flex-col px-3 rounded-xl py-4">
      <h2 className="text-3xl font-bold text-center py-4">Home Pages</h2>
      <h3 className="text-2xl font-bold">home page priceOption {price}</h3>
      <p className="text-2xl font-bold">Id: {id}</p>
      <p className="text-xl">Name: {name}</p>
      <p className="text-xl">Duration: {duration}</p>
      
      <div className="pl-5 py-4 flex-grow">
        {
          features.map(feature => <Feature key={feature.id} feature={feature}></Feature>)
        }
      </div>
      <button className="w-full btn bg-blue-700 text-white hover:bg-blue-900 font-bold text-xl py-2 border-none rounded-2xl">Buy Now</button>
     
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object
}
export default PriceOption;