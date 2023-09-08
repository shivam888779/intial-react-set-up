import { useContext } from "react";
import { GlobalContext } from "../../global_context";

const Footer = () =>{
    const { state } = useContext(GlobalContext);
    console.log(state,"footer")

    return <>this is Footer{ state?.type }</>
}
export default Footer;