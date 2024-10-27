import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  category?: string;
  code?: string;
  type: string;
  icon: React.ComponentType<{ className?: string }>;
};

const CourseContentCards = ({ category, code, type, icon: Icon }: Props) => {
  const navigate = useNavigate();
  return (
    <Button
      className=" bg-transparent hover:bg-slate-700 w-fit p-0 h-full"
      onClick={() => navigate(`/course/${category}/${code}/${type}`)}
    >
      <Card
        className="w-[200px] h-[140px] lg:w-[300px] lg:h-[180px]
          bg-transparent rounded-xl"
      >
        <CardHeader>
          <div className="flex justify-center items-center h-full">
            <CardTitle>
              <Icon className="w-16 h-16 text-white" />
            </CardTitle>
          </div>
        </CardHeader>
        <br />
        <CardContent>
          <p className="text-cyan-50 text-[16px] sm:text-[18px] lg:text-[20px] whitespace-normal">
            {type}
          </p>
        </CardContent>
      </Card>
    </Button>
  );
};

export default CourseContentCards;
