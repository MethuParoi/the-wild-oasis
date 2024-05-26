import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabinForm, isLoading: isEditingData } = useMutation({
    mutationFn: ({ newCabinData, id }) => createCabin(newCabinData, id),
    onSuccess: () => {
      queryClient.invalidateQueries("cabins");
      toast.success("Cabin updated successfully");
    },
    onError: () => {
      toast.error("Failed to create cabin");
    },
  });

  return { editCabinForm, isEditingData };
}
