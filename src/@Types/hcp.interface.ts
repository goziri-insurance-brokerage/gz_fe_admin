import { MetaData } from ".";

export interface FetchHcpListParams {
  search_text?: string;
  page: number;
  limit: number;
}

export interface FetchHcpListResponse {
  items: [] | HealthcareProvider[];
  meta: MetaData;
}

interface HealthcareProvider {
  name: string;
  phone_number: string;
  phone_code: string;
  about_us: string;
  is_phone_verified: boolean;
  email: string;
  is_email_verified: boolean;
  reg_number: string;
  address: Address;
  hcp_type: "HOSPITAL" | "CLINIC" | "PHARMACY";
  accepted_at: Date | null;
  created_at: Date;
  created_by: User;
  working_hours: WorkingHours[];
  services: Service[];
  is_open: boolean;
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

interface WorkingHours {
  id: string;
  created_at: Date;
  updated_at: Date;
  opening_time: string;
  closing_time: string;
  week_day:
    | "SUNDAY"
    | "MONDAY"
    | "TUESDAY"
    | "WEDNESDAY"
    | "THURSDAY"
    | "FRIDAY"
    | "SATURDAY";
  is_work_day: boolean;
  hcp: {
    id: string;
    created_at: Date;
    updated_at: Date;
  };
}

interface Service {
  id: string;
  created_at: Date;
  updated_at: Date;
  type:
    | "EMERGENCY_CARE"
    | "REGULAR_CHECKUP"
    | "SURGERY"
    | "DIAGNOSTIC_IMAGING"
    | "LABORATORY_TESTS";
  hcp: {
    id: string;
    created_at: Date;
    updated_at: Date;
  };
}
