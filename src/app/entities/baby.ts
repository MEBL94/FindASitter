export class Baby {
  _id?: number;
  username: string;
  password: string;
  name: string;
  gender: string; // Female, Male, Other...
  birthDate: Date; // We learn about js dates...
  specialNeeds?: string; // communication between baby and sitter
  address: string;
  zipCode: string;
  city: string;

  customerId?: string;
}
