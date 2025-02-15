import CoursesListItem from "./CoursesListItem";
import { Course } from "@/modules/shared/types";
import CoursesListItemContainer from "./CoursesListItemContainer";

const CoursesList: React.FC<{ courses: Course[] }> = ({ courses }) => {
  return (
    <ul>
      {courses.map((course: Course) => (
        <CoursesListItemContainer key={course.id} id={course.id} course={course} />
      ))}
    </ul>
  );
};

export default CoursesList;
