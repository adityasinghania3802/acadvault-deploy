import { useCreateCourse } from "@/api/CourseApi";
import CourseForm from "@/forms/course-form/CourseForm";

export default function CoursePage() {
  const { createCourse, isLoading } = useCreateCourse();
  return (
    <CourseForm
      onSave={createCourse}
      isLoading={isLoading}
    />
  );
}
