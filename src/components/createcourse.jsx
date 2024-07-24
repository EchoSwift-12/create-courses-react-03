import { useState, useContext } from "react"
import { courseContext} from "../providers/contextproviders"

const CreateCourse = () => {
    const [CourseName, setCourseName] = useState("")
    const [CourseDescription, setCourseDescription] = useState("")

    const {CreateCourse} = useContext(courseContext) 

    const changeCourseName = (e) => {
        setCourseName(e.target.value)
    }
    const changeCourseDescription = (e) => {
        setCourseDescription(e.target.value)
    }
    const createCourseFn =()=>{
        CreateCourse(CourseName, CourseDescription)
        setCourseName("")
        setCourseDescription("")
    }

    return <>
        <input type="text" placeholder="Enter Course Name"
            onChange={changeCourseName}  value={CourseName}/>

        <input type="text" placeholder="Course Description"
            onChange={changeCourseDescription} value={CourseDescription}/>
            <button onClick={createCourseFn}>Create Course</button>
    </>
}
export default CreateCourse