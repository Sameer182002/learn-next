import { useState } from "react";
import Card from "../card/card";
import { ThemeUIProvider } from "../themeContext/themeContext";

export default function ThemeBtnWithCard(){
    const [theme,setTheme] = useState('light')
    return(
        <ThemeUIProvider value={{theme,setTheme}}>
            <div style={{
                display:"flex",
                alignItems:"center",
                flexDirection:"column",
                paddingTop:"5rem"
            }}>
                <Card/>
            </div>
        </ThemeUIProvider>
        
    )
}