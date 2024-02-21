import React, { createContext } from "react";

export const ThemeContext = createContext<null | string>(null);

export function ThemeContextProvider(props: {children : React.ReactNode}) {
    // You need to use the ThemeContext.Provider here and pass a value for the context
    return (
        <ThemeContext.Provider value="light">
            {props.children}
        </ThemeContext.Provider>
    );
}