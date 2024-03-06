interface Address {
  street: string;
  region: string | null;
  landmark: string;
  town: string;
}

interface CreatedBy {}

interface AdminProfile {
  id: string;
  created_at: Date;
  updated_at: Date | null;
  first_name: string;
  last_name: string;
  other_names: string | null;
  email: string;
  user_type: "ADMIN" | "USER";
  is_deactivated: boolean;
  is_deleted: boolean;
  delete_reason: string | null;
  gender: "MALE" | "FEMALE" | null;
  unique_id: string | null;
  device_id: string | null;
  phone_number: string | null;
  phone_code: string;
  is_phone_verified: boolean;
  is_email_verified: boolean;
  photo_uri: string | null;
  last_login: string;
  birth_date: Date | null;
  email_verified_at: string | null;
  phone_verified_at: string | null;
  designation: string | null;
  is_super: boolean;
  accepted_at: Date | null;
  role: string | null;
}
