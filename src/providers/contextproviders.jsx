import { createContext } from "react"

const courseContext = createContext({
    createCourse: async () => { }
})

const CoursesContextProvider = ({ children }) => {

    const createCourse = async (CourseName, CourseDescription) => {
        const response = await fetch('http://localhost:8000/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                courseNameReact: CourseName,
                CourseDescriptionReact: CourseDescription
            })
        })
        const data = await response.json()
        console.log(data.message);
    }
    return <>
        <courseContext.Provider value={{ createCourse }}>
            {children}
        </courseContext.Provider>
    </>
}
export { courseContext, CoursesContextProvider }

