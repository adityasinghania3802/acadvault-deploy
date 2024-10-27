import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type GetMaterialRequest = {
    name: string;
    description: string;
    courseCode: string;
    category: string;
    status: string;
    material: string;
    user: string;
  };
  
type GetAllMaterialRequest = GetMaterialRequest[];

export const useGetMyMaterial = () => {
    const { getAccessTokenSilently } = useAuth0();
    const getMyMaterial = async (): Promise<GetAllMaterialRequest> => {
      const accessToken = await getAccessTokenSilently();
      const response = await fetch(`${API_BASE_URL}/api/material`, {
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
    
    const {
      data: myMaterial,
      isLoading,
    } = useQuery("fetchMaterial", getMyMaterial);
  
    return { myMaterial, isLoading };
  }