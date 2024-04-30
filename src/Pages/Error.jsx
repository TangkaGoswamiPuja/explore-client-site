import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="text-5xl ">
                404 Not Found


                <img src="https://i.ibb.co/QrWMnDX/Animation-1714435497042.gif" alt="" />
            </div>

            <Link className="underline" to="/"> Go back to home</Link>

       
        </div>
    );
};

export default Error;