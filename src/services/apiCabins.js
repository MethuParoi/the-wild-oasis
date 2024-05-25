import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error(error);
    throw new Error("An error occurred while fetching cabins");
  }

  return data;
}

//createCabin function
export async function createCabin(newCabin) {
  //generating the image URL for supabase bucket

  const imageName = `${Math.floor(Math.random() * 1000)}-${
    newCabin.image.name
  }`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error("An error occurred while creating the cabin");
  }

  //uploading the image to the supabase bucket
  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //if there is an error uploading the image, delete the cabin
  if (uploadError) {
    console.error(uploadError);
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error("An error occurred while uploading the image");
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("An error occurred while deleting the cabin");
  }
}
