export type PetStatus = "available" | "pending" | "sold";

export interface Tag {
  id: number;
  name: string;
}

export interface Pet {
  id: number;
  category: {
    id: number;
    name: string;
  };
  name: string;
  photoUrls: string[];
  tags: Tag[];
  status: PetStatus;
}
