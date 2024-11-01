import PropTypes from "prop-types";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const Feature = ({feature}) => {
  return (
    <div>
      <h4 className="flex items-center gap-3 m-4">
       <TbRosetteDiscountCheckFilled></TbRosetteDiscountCheckFilled> {feature}
     </h4>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string
}
export default Feature;