import { MetaData } from ".";

export interface FetchUsersListParams {
  page: number;
  limit: number;
  search_text?: string;
}

export interface FetchUsersListResponse {
  items: [] | User[];
  meta: MetaData;
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
