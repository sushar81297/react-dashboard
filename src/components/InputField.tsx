import { Form, Input } from "antd";

interface Props {
  Icon?: any;
  label?: string;
  name: string;
  type?: string;
  required?: boolean;
  requiredMessage?: string;
  placeholder?: string;
}

export default function InputField({
  Icon,
  label,
  name,
  type,
  required,
  requiredMessage,
  placeholder,
}: Props) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: required, message: requiredMessage }]}
    >
      <Input
        prefix={Icon && <Icon className="site-form-item-icon" />}
        type={type}
        placeholder={placeholder}
      />
    </Form.Item>
  );
}
