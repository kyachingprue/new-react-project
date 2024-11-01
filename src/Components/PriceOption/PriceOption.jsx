import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
  const { name, id, price, duration, features } = option;
  return (
    <div className="bg-green-400 text-black px-3 py-4">
      <h3>home page priceOption {price}</h3>
      <p>Id: {id}</p>
      <p>Name: {name}</p>
      <p>Duration: {duration}</p>
      <p>Features: {features}</p>
     
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object
}
export default PriceOption;