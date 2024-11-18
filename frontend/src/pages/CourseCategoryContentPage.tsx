import { useGetAllMaterial } from "@/api/CourseApi";
import MaterialContentCards from "@/components/MaterialContentCards";
import { useParams } from "react-router-dom";

export default function CourseCategoryContentPage() {
  const { code, materialCategory } = useParams();
  if(!code || !materialCategory) {
    return <span className="text-white">Unable to fetch Material</span>;
  }
  const { allMaterial, isLoading: isGetLoading } = useGetAllMaterial(code);

  if(!allMaterial) {
    return <span>No Material Available</span>
  }

  const filteredMaterial = allMaterial.filter(
    (material) => material.category === materialCategory
  );

  if(filteredMaterial.length === 0) {
    return <span className="text-white">No Material Available</span>;
  }

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-8 m-12">
      {/* <div>Hello </div> */}
      {filteredMaterial.map((material, index) => (
        <div
          key={index}
          className="flex-1 min-w-[45%] lg:min-w-[30%]"
        >
          <MaterialContentCards
            name={material.name}
            description={material.description}
            material={material.material}
          />
        </div>
      ))}
    </div>
  );
}
