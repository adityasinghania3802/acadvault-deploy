import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useNavigate } from "react-router-dom";

type Props = {
    materialName: string;
    uploader: string;
    timestamp: string;
  };

const AnnouncementTable = ({ materialName, uploader, timestamp }: Props) => {
    const navigate = useNavigate();
    return (
      <Table>
        <TableCaption>A list of your recent uploads.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Material Name</TableHead>
            <TableHead>Course Code</TableHead>
            <TableHead>Contributor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  
export default AnnouncementTable;