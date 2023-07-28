import { useContext } from "react";
import { ReduxContext } from "../../global_context";

const Footer = () =>{
    const { state } = useContext(ReduxContext);
    console.log(state,"footer")

    return <>this is Footer{ state?.type }</>
}
export default Footer;