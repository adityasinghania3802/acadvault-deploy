import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type PendingMaterialRequest = {
  name: string;
  description: string;
  courseCode: string;
  category: string;
  status: string;
  material: string;
  user: string;
  _id: string;
};

type GetAllPendingMaterialRequest = PendingMaterialRequest[];

export const useGetAllPendingMaterial = () => {
  const { getAccessTokenSilently } = useAuth0();
  const getAllPendingMaterial = async (): Promise<GetAllPendingMaterialRequest> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/material/statusPending`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to get materials");
    }

    return response.json();
  };

  const { data: AllPendingMaterial, isLoading } = useQuery(
    "fetchAllPendingMaterial",
    getAllPendingMaterial
  );

  return { AllPendingMaterial, isLoading };
};
