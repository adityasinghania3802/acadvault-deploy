import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  name?: string;
  description?: string;
  material: string;
  status: string;
  courseCode: string;
};

const MyMaterialContentCards = ({
  name,
  description,
  material,
  status,
  courseCode,
}: Props) => {
  const openInNewTab = () => {
    const fileUrl = `${import.meta.env.VITE_API_BASE_URL}/uploads/${material}`;
    window.open(fileUrl, "_blank");
  };
  const cardBackground =
    status === "Accepted"
      ? "bg-green-600"
      : status === "Rejected"
      ? "bg-red-600"
      : "bg-transparent";

  return (
    <Button
      className={`${cardBackground} hover:bg-slate-700 w-fit p-0 h-full`}
      onClick={openInNewTab}
    >
      <Card
        className={`w-[300px] h-[180px] lg:w-[300px] lg:h-[180px] bg-transparent rounded-xl`}
      >
        <CardHeader>
          <div className="text-center">
            <CardTitle>
              <h1
                className={`text-[25px] sm:text-[25px] lg:text-[35px] text-cyan-50`}
              >
                {name}
              </h1>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-cyan-50 text-[12px] sm:text-[14px] lg:text-[16px] whitespace-normal">
            {courseCode}
          </p>
          <p className="text-cyan-50 text-[12px] sm:text-[14px] lg:text-[16px] whitespace-normal">
            {description}
          </p>
          <br />
          <p className="text-cyan-50 text-[12px] sm:text-[14px] lg:text-[16px] whitespace-normal">
            Status: {status}
          </p>
        </CardContent>
      </Card>
    </Button>
  );
};

export default MyMaterialContentCards;
