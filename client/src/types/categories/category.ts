import type { SubCategory } from "@/types/categories/sub-category";
import type { LucideIconsEnum } from "@/types/enums/icons";

export type Category = {
  id: string;
  title: string;
  slug: string;
  icon: LucideIconsEnum,
  subtitle?: string;
  description?: string;
  children?: SubCategory[];
};
