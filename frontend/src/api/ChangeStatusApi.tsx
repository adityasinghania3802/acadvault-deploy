import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type ChangeStatusRequest = {
  id: string;
  status: string;
};

export const useChangeStatus = () => {
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const ChangeStatusRequest = async (material: ChangeStatusRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/material/changeStatus`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(material),
    });

    if (!response.ok) {
      throw new Error("Failed to change material status");
    } else {
      navigate("/");
    }
  };

  const { mutateAsync: changeStatus, isLoading } =
    useMutation(ChangeStatusRequest);
  return { changeStatus, isLoading };
};