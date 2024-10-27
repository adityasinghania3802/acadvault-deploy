import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  courseCode: z.string().min(1, "Coursecode is required"),
  material: z
    .instanceof(File) 
    .refine((file) => file.size > 0, "Material file is required"),
});

type MaterialFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (MaterialData: MaterialFormData) => void;
  isLoading: Boolean;
};

function MaterialForm({
  onSave,
  isLoading,
}: Props) {
  const form = useForm<MaterialFormData>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold">Material Form</h2>
          <FormDescription>Add Material here</FormDescription>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Material Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white"
                ></Input>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white"
                ></Input>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => {
              const [selectedCategory, setSelectedCategory] = useState("");

              const handleSelect = (category: string) => {
                setSelectedCategory(category);
                field.onChange(category);
              };

              return (
                <FormItem className="flex-1">
                  <FormLabel>Category</FormLabel>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <div className="bg-white p-2 mx-5 border rounded cursor-pointer">
                        {selectedCategory || "Select a category"}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {[
                        "Lecture Notes",
                        "Assignments",
                        "Reference Books",
                        "Exams",
                        "Quizzes",
                        "Solutions",
                      ].map((category) => (
                        <DropdownMenuItem
                          key={category}
                          onClick={() => handleSelect(category)}
                        >
                          {category}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <FormMessage />
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="courseCode"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>CourseCode</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white"
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="material"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Material File</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
                  className="bg-white"
                ></Input>
              </FormControl>
              {form.formState.errors.material && (
                <p className="error">
                  {form.formState.errors.material.message}
                </p>
              )}
            </FormItem>
          )}
        />

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button
            className="bg-slate-700"
            type="submit"
          >
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default MaterialForm;
