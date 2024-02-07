interface UserForm {
  key: string;
  name?: string;
  email?: string;
  date?: moment.Moment;
  role?: string;
  remember?: boolean; // Corrected to boolean type
}
