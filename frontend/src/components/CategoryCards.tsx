import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  code: string;
  title: string;
};

const CategoryCards = ({ code, title }: Props) => {
  const navigate = useNavigate();
  return (
    <Button
      className=" bg-transparent hover:bg-slate-700 w-fit p-0 h-full"
      onClick={()=> navigate(`/course/${code}`)}
    >
      <Card
        className="w-[200px] h-[140px] lg:w-[300px] lg:h-[180px]
          bg-transparent rounded-xl"
      >
        <CardHeader>
          <div className="text-center">
            <CardTitle>
              <h1
                className="text-[40px] sm:text-[50px] lg:text-[55px]
                text-cyan-50"
              >
                {code}
              </h1>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-cyan-50 text-[16px] sm:text-[18px] lg:text-[20px] whitespace-normal">
            {title}
          </p>
        </CardContent>
      </Card>
    </Button>
  );
};

export default CategoryCards;
