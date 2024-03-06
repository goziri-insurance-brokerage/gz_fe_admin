import { MetaData } from ".";

export interface FetchOrgListParams {
  search_text?: string;
  page: number;
  limit: number;
}

export interface FetchOrgListResponse {
  items: [] | Organization[];
  meta: MetaData;
}

interface Address {
  street: string;
  state: string;
  state_id: number;
  lga: string;
  lga_id: number;
  region: string | null;
  landmark: string;
  town: string;
  building_number: string;
}

interface Organization {
  id: string;
  name: string;
  org_type: "GOVERNMENT" | "PRIVATE" | "UNIVERSITY";
  reg_number: string;
  address: Address;
  created_at: Date | null;
  created_by: User | null;
}

interface User {
  id: string;
  created_at: Date | null;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
  gender: "MALE" | "FEMALE";
  unique_id: string;
  birth_date: Date | null;
}
