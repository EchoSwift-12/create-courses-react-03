import { CoursesContextProvider } from "./providers/contextproviders"
import CreateCourse from "./components/createcourse"

const  App = ()=>{

  return<>
  <CoursesContextProvider>
    <CreateCourse/>
  </CoursesContextProvider>
  </>
}
export default App