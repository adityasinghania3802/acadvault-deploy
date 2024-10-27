
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type UploadMaterialRequest = {
  name: string;
  description: string;
  category: string;
  courseCode: string;
  material: File;
};

export const useUploadMaterial = () => {
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const UploadMaterialRequest = async (material: UploadMaterialRequest) => {
    const accessToken = await getAccessTokenSilently();

    const formData = new FormData();
    formData.append("name", material.name);
    formData.append("description", material.description);
    formData.append("category", material.category);
    formData.append("courseCode", material.courseCode);
    formData.append("file", material.material);

    // for (let [key, value] of formData.entries()) {
    //   if (key === "material" && value instanceof File) {
    //     console.log(
    //       `${key}: ${value.name}, ${value.size} bytes, ${value.type}`
    //     );
    //   } else {
    //     console.log(`${key}: ${value}`);
    //   }
    // }

    const response = await fetch(`${API_BASE_URL}/api/material/new`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload Material");
    } else {
      navigate("/");
    }
  };

  const { mutateAsync: uploadMaterial, isLoading } =
    useMutation(UploadMaterialRequest);
  return { uploadMaterial, isLoading };
};
