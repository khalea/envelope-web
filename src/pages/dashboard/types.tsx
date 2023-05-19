export interface AccountInfo {
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
