import React from "react";
import { useAuth } from "../../global_context";
const Footer = () =>{
    const {state} = useAuth()
    console.log(state)
    return <>this is Footer</>
}
export default Footer;