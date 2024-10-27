import CourseContentCards from "@/components/CourseContentCards";
import { useParams } from "react-router-dom";
import {
  NotebookPen,
  BookOpen,
  BookText,
  School,
  NotepadText,
  BookCheck,
} from "lucide-react";

const types = [
  { name: "Lecture Notes", icon: BookOpen },
  { name: "Assignments", icon: NotebookPen },
  { name: "Reference Books", icon: BookText },
  { name: "Exams", icon: School },
  { name: "Quizzes", icon: NotepadText },
  { name: "Solutions", icon: BookCheck },
];



export default function CourseContentPage() {
  const { category, code } = useParams();
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-8 m-12">
      {types.map((item, index) => (
        <div
          key={index}
          className="flex-1 min-w-[45%] lg:min-w-[30%]"
        >
          <CourseContentCards
            category={category}
            code={code}
            type={item.name}
            icon={item.icon}
          />
        </div>
      ))}
    </div>
  );
}
