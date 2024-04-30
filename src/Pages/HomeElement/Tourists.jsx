import { useLoaderData } from "react-router-dom";

const Tourists = () => {
  
const tour = useLoaderData();
console.log(tour)
    return (
        <div>
         tourrrr:{tour}
        </div>
    );
};

export default Tourists;