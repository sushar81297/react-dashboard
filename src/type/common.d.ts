interface UserForm {
  key: string;
  name?: string;
  email?: string;
  date?: moment.Moment;
  role?: string;
  remember?: boolean; // Corrected to boolean type
}

interface Login {
  username?: string;
  password?: string;
  remember?: string;
}
