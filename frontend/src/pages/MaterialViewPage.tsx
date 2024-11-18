import { useGetMyMaterial } from "@/api/MyMaterial";
import MyMaterialContentCards from "@/components/MyMaterialContentCards";

export default function MaterialViewPage() {
  const { myMaterial, isLoading: isGetLoading } = useGetMyMaterial();

  if (isGetLoading) {
    return <span className="text-white">Loading...</span>;
  }

  if(!myMaterial) {
    return <span>You have no uploaded Material</span>
  }

  if(myMaterial.length === 0) {
    return <span className="text-white">No Material Available</span>;
  }

  return (
    <div className="flex flex-wrap justify-center lg:justify-start gap-8 m-12">
      {/* <div>Hello </div> */}
      {myMaterial.map((material, index) => (
        <div
          key={index}
          className="flex-1 min-w-[45%] lg:min-w-[30%]"
        >
          <MyMaterialContentCards
            name={material.name}
            description={material.description}
            material={material.material}
            status={material.status}
            courseCode = {material.courseCode}
          />
        </div>
      ))}
    </div>
  );
}
