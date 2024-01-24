import { Button, Form } from "antd";

interface Props {
  colOffset?: number;
  formCss?: string;
  styleClass?: string;
  text: string;
  btnType?: string;
}
export default function ButtonBox({
  colOffset,
  formCss,
  btnType,
  styleClass,
  text,
}: Props) {
  return (
    <Form.Item wrapperCol={{ offset: colOffset }} className={formCss}>
      <Button htmlType={btnType} className={styleClass}>
        {text}
      </Button>
    </Form.Item>
  );
}
