import { createContext, useContext } from "react";

const themeContext = createContext({
    theme : 'light',
    setTheme : ()=>{}
})

export const ThemeUIProvider = themeContext.Provider

export default function UseTheme(){
    return useContext(themeContext)
}