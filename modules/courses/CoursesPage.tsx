import AddCourseForm from "./components/AddCourseForm/AddCourseForm";
import AddCourseFormContainer from "./components/AddCourseForm/AddCourseFormContainer";
import CoursesList from "./components/CoursesList/CoursesList";
import { Course } from "@/modules/shared/types";

export type CoursesPageProps = {
  courses: Course[]
  loading: boolean
  error: string
}

const CoursesPage: React.FC<CoursesPageProps> = ({ courses, loading, error }) => {
  return (
    <div>
      <h1>Online courses tracker</h1>
      <h2>My courses</h2>
      {!loading && courses.length > 0 && <CoursesList courses={courses} />}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <AddCourseFormContainer />
    </div>
  );
};

export default CoursesPage;
