import { Course } from "@/modules/shared/types";
import styles from "./CoursesListItem.module.scss";

export type CoursesListItemProps = {
  course: Course;
  onRemoveCourse: (id: string) => void;
};

const CoursesListItem: React.FC<CoursesListItemProps> = ({ course, onRemoveCourse }) => {
  const handleRemoveCourse = () => {
    onRemoveCourse(course.id)
  }

  return (
    <li className={styles["courses-list-item"]}>
      {course.title}
      <button onClick={handleRemoveCourse}>remove course</button>
    </li>
  );
};

export default CoursesListItem;
