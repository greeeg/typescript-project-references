import { Pet } from "./types";

export const listPets = async () => {
  const response = await fetch(
    "https://petstore.swagger.io/v2/pet/findByStatus?status=available",
    {
      method: "GET",
    }
  );

  const json = await response.json().catch(() => []);

  return json as Pet[];
};
