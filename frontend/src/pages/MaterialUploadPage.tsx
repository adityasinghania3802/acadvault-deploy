import { useUploadMaterial } from "@/api/MaterialUploadApi";
import MaterialForm from "@/forms/material-form/MaterialForm";

export default function MaterialUploadPage() {
  const { uploadMaterial, isLoading } = useUploadMaterial();
  return (
    <MaterialForm
      onSave={uploadMaterial}
      isLoading={isLoading}
    />
  );
}
