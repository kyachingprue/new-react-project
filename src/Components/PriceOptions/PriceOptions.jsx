import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOption =  [
    {
      "id": "1",
      "name": "Basic Plan",
      "price": 29.99,
      "duration": "Monthly",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "1 personal training session per month"
      ]
    },
    {
      "id": "2",
      "name": "Standard Plan",
      "price": 49.99,
      "duration": "Monthly",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "5 personal training sessions per month",
        "Group fitness classes",
        "Access to sauna and steam room"
      ]
    },
    {
      "id": "3",
      "name": "Premium Plan",
      "price": 79.99,
      "duration": "Monthly",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited personal training sessions",
        "Group fitness classes",
        "Access to sauna and steam room",
        "24/7 gym access",
        "Free guest pass each month",
        "Monthly nutrition consultation"
      ]
    },
    {
      "id": "4",
      "name": "Annual Membership",
      "price": 499.99,
      "duration": "Yearly",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "2 personal training sessions per month",
        "Group fitness classes",
        "Access to sauna and steam room",
        "Discounted access to special events",
        "Free guest pass each month"
      ]
    },
    {
      "id": "5",
      "name": "Student Plan",
      "price": 24.99,
      "duration": "Monthly",
      "features": [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "Study-friendly hours access"
      ]
    }
  ]
  return (
    <div>
      <h3 className="text-3xl font-bold text-center ">This is priceOptions pages</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {
        priceOption.map(option => <PriceOption key={option.id} option ={option}></PriceOption>)
      }
      </div>
    </div>
  );
};

export default PriceOptions;