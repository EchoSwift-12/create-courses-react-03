import { createContext } from "react";

const courseContext = createContext({
    createCourse: async () => { }
})

const CoursesContextProvider = ({ children }) => {
    const createCourse = async () => {

    }
    return <>
        <courseContext.Provider value={{ createCourse }}>
            {children}
        </courseContext.Provider>
    </>
}
export { courseContext, CoursesContextProvider }

