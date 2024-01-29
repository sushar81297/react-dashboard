import { Button, Form } from "antd";

import { FormEvent } from "react";

interface Props {
  colOffset?: number;
  formCss?: string;
  styleClass?: string;
  text: string;
  btnType?: string;
  handleBtn?: (e: FormEvent) => void;
}
export default function ButtonBox({
  colOffset,
  formCss,
  btnType,
  styleClass,
  text,
  handleBtn,
}: Props) {
  return (
    <Form.Item wrapperCol={{ offset: colOffset }} className={formCss}>
      <Button
        htmlType={btnType}
        className={styleClass}
        onClick={(e) => handleBtn(e)}
      >
        {text}
      </Button>
    </Form.Item>
  );
}
