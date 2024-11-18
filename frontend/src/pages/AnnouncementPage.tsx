import { useGetAllAnnouncement } from "@/api/CourseApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

export default function AnnouncementPage() {
  const navigate = useNavigate();
  const { allAnnouncement, isLoading: isGetLoading } = useGetAllAnnouncement();

  if (!allAnnouncement) {
    return <span className="text-white">Unable to load Announcements</span>;
  }

  if (allAnnouncement.length === 0) {
    return <span className="text-white">No Announcements found</span>;
  }
  if (isGetLoading) {
    return <span className="text-white">Loading...</span>;
  }
  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-8 m-12">
          <Table>
            <TableCaption>A list of your recent material uploads.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Material Name</TableHead>
                <TableHead>Course Code</TableHead>
                <TableHead>Contributor</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {allAnnouncement.map((announcement) => (
                <TableRow className="text-white" >
                  <TableCell className="font-medium" >
                    {announcement.materialName}
                  </TableCell>
                  <TableCell onClick={() => navigate(`/course/${announcement.courseCode.substring(0,2)}/${announcement.courseCode}`)} className="underline hover: cursor-pointer">{announcement.courseCode}</TableCell>
                  <TableCell>{announcement.uploader}</TableCell>
                  <TableCell>{announcement.createdAt.substring(0,10)} | {announcement.createdAt.substring(12,19)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </div>
  );
}
