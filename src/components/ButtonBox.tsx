import { Button, Form } from "antd";
import { FormEvent, ReactNode } from "react";

interface Props {
  colOffset?: number;
  formCss?: string;
  styleClass?: string;
  text: ReactNode;
  btnType?: "submit" | "button";
  handleBtn?: (e: FormEvent) => void;
}

const ButtonBox: React.FC<Props> = ({
  colOffset,
  formCss,
  btnType = "submit",
  styleClass,
  text,
  handleBtn,
}: Props) => {
  return (
    <Form.Item wrapperCol={{ offset: colOffset }} className={formCss}>
      <Button
        htmlType={btnType}
        className={styleClass}
        onClick={(e) => handleBtn && handleBtn(e)}
      >
        {text}
      </Button>
    </Form.Item>
  );
};

ButtonBox.defaultProps = {
  colOffset: 0,
  formCss: "",
  btnType: "submit",
  styleClass: "",
};

export default ButtonBox;
