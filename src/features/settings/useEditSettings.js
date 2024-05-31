import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting } from "../../services/apiSettings";

export function useEditSettings() {
  const queryClient = useQueryClient();

  const { mutate: editSettings, isLoading: isEditingSetting } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["settings"] });
      toast.success("setting updated successfully");
    },
    onError: () => {
      toast.error("Failed to create setting");
    },
  });

  return { editSettings, isEditingSetting };
}
