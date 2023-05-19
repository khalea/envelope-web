interface AccountInfo {
  available_balance: {
    cents: string;
    currency_code: string;
  };
  balances: {
    available_amount: number;
    holding_amount: number;
    locked_amount: number;
    pending_amount: number;
  };
  created_at: string;
  currency_code: string;
  default_account_number: string;
  default_account_number_id: string;
  default_routing_number: string;
  description: string;
  holding_balance: {
    cents: string;
    currency_code: string;
  };
  id: string;
  is_overdraftable: boolean;
  locked_balance: {
    cents: number;
    currency_code: string;
  };
  overdraft_reserve_account_id: string;
  owners: [string];
  pending_balance: {
    cents: number;
    currency_code: string;
  };
  routing_number: string;
  type: string;
}

interface Entity {
  documents: [
    {
      created_at: string;
      description: string;
      document_id: string;
      entity_id: string;
    }
  ];
  id: string;
  is_root: boolean;
  person_details: {
    address: {
      city: string;
      country_code: string;
      line_1: string;
      line_2: string | undefined;
      postal_code: string;
      state: string;
    };
    date_of_birth: string;
    email: string;
    first_name: string;
    last_name: string;
    middle_name: string | undefined;
    ssn: string;
  };
  review_reasons: Array<string>;
  type: string;
  verification_status: string;
  verification_tags: Array<string>;
}
