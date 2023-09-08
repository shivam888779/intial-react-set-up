import { useContext } from "react";
import { GlobalContext } from "../../global_context";
import { Navigate, useNavigate } from "react-router-dom";
const Header = () =>{
    const { state, dispatch } = useContext(GlobalContext);

    const handleIncrement = () => {
      dispatch({ type: 'INCREMENT' });
    };
  
    const handleDecrement = () => {
      dispatch({ type: 'DECREMENT' });
    };

    const navigate = useNavigate();

  function handleRoute() {
    navigate("/lolopopo");
  }

    
    return (
      <div>
        <h1>Counter: {state?.counter}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleRoute}>Route</button>
        {/* Other components that might use the global state */}
      </div>
    );
}
export default Header;