import ButtonBox from "@components/ButtonBox";
import DatePickerBox from "@components/DatePickerBox";
import { Form } from "antd";
import InputField from "@components/InputField";
import SelectBox from "@components/SelectBox";
import { dateFormat } from "@utils/constant";
import dayjs from "dayjs";
import { useEffect } from "react";

interface Props {
  labelCol: number;
  wrapperCol: number;
  onFinish: (value: userForm) => void;
  btnText?: string;
  intitalData: userForm;
}

export default function UserForm({
  labelCol,
  wrapperCol,
  onFinish,
  btnText = "create",
  intitalData,
}: Props) {
  const datalist = [
    { name: "Software Engineer", key: "sf" },
    { name: "Programmer", key: "pm" },
    { name: "Developer", key: "de" },
  ];
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(intitalData);
  }, [form, intitalData]);
  return (
    <Form
      form={form}
      initialValues={intitalData}
      labelCol={{ span: labelCol }}
      wrapperCol={{ span: wrapperCol }}
      layout="horizontal"
      onFinish={onFinish}
    >
      <InputField
        label="User Name"
        name="name"
        required={true}
        requiredMessage="Please input your Username!"
        placeholder="Username"
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        required={true}
        requiredMessage="Please input your Email!"
        placeholder="Email"
      />
      <DatePickerBox label="DatePicker" name="date" />
      <SelectBox
        datalist={datalist}
        name="role"
        label="Select"
        placeholder="Please Select ..."
        required={true}
        requiredMessage="Please select.."
      />
      <ButtonBox
        btnType="submit"
        colOffset={labelCol}
        styleClass="btn-green"
        text={btnText}
        handleBtn={() => ""}
      />
    </Form>
  );
}
