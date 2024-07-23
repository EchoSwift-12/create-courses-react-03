import { useState } from "react"

const CreateCourse = () => {
    const [CourseName, setCourseName] = useState("")
    const [CourseDescription, setCourseDescription] = useState("")

    const changeCourseName = (e) => {
        setCourseName(e.target.value)
    }
    const changeCourseDescription = (e) => {
        setCourseDescription(e.target.value)
    }

    return <>
        <input type="text" placeholder="Course Name"
            onChange={changeCourseName} />

        <input type="text" placeholder="Course Description"
            onChange={changeCourseDescription} />
    </>
}
export default CreateCourse