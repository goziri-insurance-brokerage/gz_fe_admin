import { MetaData } from ".";

export interface FetchAdminsListParams {
  page: number;
  limit: number;
}

export interface FetchAdminsListResponse {
  items: [] | Admin[];
  meta: MetaData;
}

export interface Admin {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  is_super: boolean;
  created_by: CreatedBy;
}

interface CreatedBy {
  first_name: string;
  last_name: string;
  id: string;
  photo_uri: string | null;
  unique_id: string;
  user_type: string;
  gender: string;
  birth_date: string;
}
