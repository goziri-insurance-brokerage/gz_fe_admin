import { MetaData } from ".";

export interface FetchContractsListParams {
  status?: PolicyContractsStatus;
  page: number;
  limit: number;
  search_text?: string;
}

export interface FetchContractsListResponse {
  items: [] | Contract[];
  meta: MetaData;
}

export interface Contract {
  start_date: Date | null;
  end_date: Date | null;
  amount: number;
  status: string;
  id: string;
  unique_id: string;
  created_at: string;
  policy_product: PolicyProduct;
  org: Organization;
  user: User;
}

interface PolicyProduct {
  id: string;
  name: string;
  premium_cost: number;
  category: string;
}

interface User {
  first_name: string;
  last_name: string;
  id: string;
  user_type: string;
  gender: string;
  birth_date: string;
  unique_id: string;
  photo_uri: string | null;
}

interface Organization {
  id: string;
  name: string;
}

export enum PolicyContractsStatus {
  Expired = "EXPIRED",
  Available = "AVAILABLE",
}
