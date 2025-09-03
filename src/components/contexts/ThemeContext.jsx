import React, { Children } from 'react'
import { createContext, useState } from 'react'

const ThemeContext = createContext()
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("dark"); //global state
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }