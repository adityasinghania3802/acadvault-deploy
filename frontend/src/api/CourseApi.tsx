
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CreateCourseRequest = {
  code: string;
  name: string;
  description: string;
};

export const useCreateCourse = () => {
  const { getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const CreateCourseRequest = async (course: CreateCourseRequest) => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/course/new`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(course),
    });

    if (!response.ok) {
      throw new Error("Failed to create course");
    }
    else {
      navigate("/");
    }
  };

  const {
    mutateAsync: createCourse,
    isLoading,
  } = useMutation(CreateCourseRequest);
  return { createCourse, isLoading };
};

type GetCourseRequest = {
  code: string;
  name: string;
  description: string;
  category: string;
};

type GetAllCourseRequest = GetCourseRequest[];

export const useGetAllCourses = () => {
  const { getAccessTokenSilently } = useAuth0();
  const getAllCourseRequest = async (): Promise<GetAllCourseRequest> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/course`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to create course");
    }
    
    return response.json();
  };
  
  const {
    data: allCourse,
    isLoading,
  } = useQuery("fetchCurrentUser", getAllCourseRequest);

  return { allCourse, isLoading };
}

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

export const useGetAllMaterial = (code: String) => {
  const { getAccessTokenSilently } = useAuth0();
  const getAllMaterialRequest = async (): Promise<GetAllMaterialRequest> => {
    const accessToken = await getAccessTokenSilently();
    const response = await fetch(`${API_BASE_URL}/api/course/${code}`, {
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
    data: allMaterial,
    isLoading,
  } = useQuery("fetchCurrentUser", getAllMaterialRequest);

  return { allMaterial, isLoading };
}