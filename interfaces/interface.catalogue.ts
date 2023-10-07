export type IAnalyses = IAnalysesItem[];

export interface IAnalysesItem {
  id: string;
  name: string;
  code: string;
  deadline: string;
  price: number;
  discount_price: number;
  has_discount: boolean;
  amount: number;
}

export interface IAnalysesDetail extends IAnalysesItem {
  method: string;
  category: string;
  created_at: string;
  updated_at: string;
  description: string;
  notes: string;
  diseases: string;
  materials: string;
  preparation: string;
}

export type ICategories = ICategoriesItem[];

export interface ICategoriesItem {
  id: string;
  name: string;
  children: ICategoriesItem[];
}
export interface ICategoryWithAnalyses {
  id: string;
  name: string;
  analyses: IAnalysesItem[];
}
export type ICategoriesWithAnalyses = ICategoryWithAnalyses[];
