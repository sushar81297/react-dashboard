import { Checkbox, Form } from "antd";

interface Props {
  name: string;
  text: string;
  checked?: string;
}

export default function CheckBox({ name, text, checked }: Props) {
  return (
    <Form.Item name={name} valuePropName={checked} noStyle>
      <Checkbox>{text}</Checkbox>
    </Form.Item>
  );
}
