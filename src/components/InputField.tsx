import { Input } from "antd";

interface Props {
  Icon?: any;
  label?: string;
  name: string;
  type?: string;
  required?: boolean;
  requiredMessage?: string;
  placeholder?: string;
}

export default function InputField({ Icon, type, placeholder }: Props) {
  return (
    <Input
      prefix={Icon && <Icon className="site-form-item-icon" />}
      type={type}
      placeholder={placeholder}
    />
  );
}
