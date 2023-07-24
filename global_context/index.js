import { createContext, useContext } from "react"


const context = createContext();
const ContextProvider = ({children})=>{
    const initialValue ={"name":"shivam","course":"b.tech"}
    const {Provider} = context;

    <Provider value={initialValue}>
        {children}
    </Provider>
      
}
const GlobalValues = useContext(context)

expo