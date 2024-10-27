import { useGetAllPendingMaterial } from "@/api/PendingMaterialApi";
import PendingMaterialContentCards from "@/components/PendingMaterialContentCards";

export default function MaterialViewPage() {
  const { AllPendingMaterial, isLoading: isGetLoading } = useGetAllPendingMaterial();

  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  if (!AllPendingMaterial) {
    return <span>You have no status Pending Material</span>;
  }

  if (AllPendingMaterial.length === 0) {
    return <span>No Pending Material Available</span>;
  }

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-8 m-12">
      {AllPendingMaterial.map((material, index) => (
        <div
          key={index}
          className="flex-1 min-w-[45%] lg:min-w-[30%]"
        >
          <PendingMaterialContentCards
            name={material.name}
            description={material.description}
            material={material.material}
            id={material._id}
            courseCode={material.courseCode}
          />
        </div>
      ))}
    </div>
  );
}
