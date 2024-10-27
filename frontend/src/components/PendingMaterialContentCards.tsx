import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useChangeStatus } from "@/api/ChangeStatusApi";

type Props = {
  name?: string;
  description?: string;
  material: string;
  id: string;
  courseCode: string;
};

const PendingMaterialContentCards = ({
  name,
  description,
  material,
  id,
  courseCode,
}: Props) => {
  const { changeStatus, isLoading: isGetLoading } = useChangeStatus();
  const openInNewTab = () => {
    const fileUrl = `${import.meta.env.VITE_API_BASE_URL}/uploads/${material}`;
    window.open(fileUrl, "_blank");
  };

  const handleStatusChange = async (status: string) => {
    try {
      await changeStatus({
        id: id,
        status: status,
      });
      console.log(`Material ${status}:`, material);
    } catch (error) {
      console.error("Failed to change status:", error);
    }
  };

  return (
    <Button
      className={`bg-transparent hover:bg-slate-700 w-fit p-0 h-full`}
      onClick={openInNewTab}
    >
      <Card
        className={`w-[300px] h-[200px] lg:w-[300px] lg:h-[200px] bg-transparent rounded-xl`}
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
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            className="bg-green-500 hover:bg-green-700 text-white w-[80px] lg:w-[100px]"
            onClick={async (e) => {
              e.stopPropagation();
              await handleStatusChange("Accepted");
            }}
          >
            Accept
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-700 text-white w-[80px] lg:w-[100px]"
            onClick={async (e) => {
              e.stopPropagation();
              await handleStatusChange("Rejected");
            }}
          >
            Reject
          </Button>
        </CardFooter>
      </Card>
    </Button>
  );
};

export default PendingMaterialContentCards;
