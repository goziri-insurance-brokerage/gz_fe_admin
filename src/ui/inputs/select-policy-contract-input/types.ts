export interface PolicyContractItemProps {
  contract: PolicyContractLookup;
  index: number;
  isSelected: boolean;
  onClick: (contract: PolicyContractLookup) => void;
}

export interface PolicyContractLookup {
  id: string;
  start_date: Date | null;
  end_date: Date | null;
  status: string;
  unique_id: string;
  user: User;
  policy_product: PolicyProduct;
}

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  unique_id: string;
  phone_number: string | null;
  photo_uri: string | null;
}

interface PolicyProduct {
  id: string;
  category: string;
}

export interface SelectPolicyContractInputProps {
  delay: number;
  name: string;
  onChange: (
    identifier: PolicyContractsIdentifiers,
    identifierValue: string
  ) => Promise<any>;
  required?: boolean;
}

export interface SelectedPolicyContractItemProps {
  contract: PolicyContractLookup | null;
}

export enum PolicyContractsIdentifiers {
  PolicyCode = "POLICY_CODE",
  Phone = "PHONE",
  UserCode = "USER_CODE",
  Email = "EMAIL",
}
