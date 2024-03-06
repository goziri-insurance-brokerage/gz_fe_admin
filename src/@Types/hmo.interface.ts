import { MetaData } from ".";

export interface FetchHmoListParams {
  search_text?: string;
  page: number;
  limit: number;
}

export interface FetchHmoListResponse {
  items: [] | HMO[];
  meta: MetaData;
}

interface HMO {
  id: string;
  name: string;
  phone_number: string;
  phone_code: string;
  logo_url: string | null;
  is_phone_verified: boolean;
  email: string;
  is_email_verified: boolean;
  reg_number: string;
  address: Address;
  accepted_at: Date | null;
  created_at: Date;
  created_by: User;
}

interface Address {
  street: string;
  state: string;
  state_id: number;
  lga: string;
  lga_id: number;
  region: string;
  landmark: string;
  building_number: string;
  town: string;
}

interface User {
  first_name: string;
  last_name: string;
  id: string;
  photo_uri: string;
  unique_id: string;
  user_type: "ADMIN";
  gender: "MALE" | "FEMALE" | "OTHER";
  birth_date: Date;
}
