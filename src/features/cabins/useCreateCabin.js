import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabinForm, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      queryClient.invalidateQueries("cabins");
      toast.success("Cabin created successfully");
    },
    onError: () => {
      toast.error("Failed to create cabin");
    },
  });

  return { createCabinForm, isCreating };
}
