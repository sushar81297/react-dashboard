import { Form, Select } from "antd";

interface DataProps {
  name: string;
  key: string;
}

interface Props {
  label?: string;
  name: string;
  type?: string;
  required?: boolean;
  datalist: DataProps[];
  requiredMessage?: string;
  placeholder?: string;
}

export default function SelectBox({
  label,
  name,
  required,
  requiredMessage,
  datalist,
  placeholder,
}: Props) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required: required, message: requiredMessage }]}
    >
      <Select placeholder={placeholder}>
        {datalist.map((data, idx) => {
          return (
            data.name && (
              <Select.Option key={idx} value={data.key}>
                {data.name}
              </Select.Option>
            )
          );
        })}
      </Select>
    </Form.Item>
  );
}
