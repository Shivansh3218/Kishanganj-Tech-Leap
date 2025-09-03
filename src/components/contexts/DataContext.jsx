import { createContext, useState } from 'react'

const DataContext = createContext()

function DataProvider({ children }) {
    const [data, setData] = useState("Shivansh"); //global state

    function addContact() {
        console.log("this is the contact")
    }


    return (
        <DataContext.Provider value={{ data, setData, addContact }}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }