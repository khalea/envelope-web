export interface Users {
  id: string;
  email: string;
  username: string;
  password: string;
  first_name: string;
  middle_name: string | undefined;
  last_name: string;
  address_line1: string;
  address_line2: string | undefined;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  phone_number: string;
  ssn: string | undefined;
}
