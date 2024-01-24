import { DatePicker, Form } from "antd";

interface Props {
  label?: string;
  name: string;
}

export default function DatePickerBox({ label, name }: Props) {
  return (
    <Form.Item label={label} name={name}>
      <DatePicker />
    </Form.Item>
  );
}
