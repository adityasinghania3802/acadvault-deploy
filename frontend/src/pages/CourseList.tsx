import { useGetAllCourses } from "@/api/CourseApi";
import CourseCards from "@/components/CourseCards";
import { useParams } from "react-router-dom";

export default function CourseList() {
  const { allCourse, isLoading: isGetLoading } = useGetAllCourses();
  const { category } = useParams();
  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  if (!allCourse) {
    return <span>Unable to load courses</span>;
  }

  const filteredCourses = allCourse.filter(
    (course) => course.category === category
  );

  if (filteredCourses.length === 0) {
    return <span className="text-white">No courses found</span>;
  }

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-8 m-12">
      {filteredCourses.map((course, index) => (
        <div
          key={index}
          className="flex-1 min-w-[45%] lg:min-w-[30%]"
        >
          <CourseCards
            category={course.category}
            code={course.code}
            name={course.name}
          />
        </div>
      ))}
    </div>
  );
}
