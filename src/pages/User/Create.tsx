import ButtonBox from "@components/ButtonBox";
import DatePickerBox from "@components/DatePickerBox";
import { Form } from "antd";
import InputField from "@components/InputField";
import SelectBox from "@components/SelectBox";

interface userForm {
  username?: string;
  password?: string;
  select?: string;
}

export default function CreateUser() {
  const onFinish = (value: userForm) => {
    console.log("Received values of form: ", value);
  };
  const datalist = [
    { name: "Khin", key: "khin" },
    { name: "Su", key: "Su" },
    { name: "Shar", key: "Shar" },
  ];
  return (
    <>
      <h2 className="title">Create User</h2>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        layout="horizontal"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <InputField
          label="User Name"
          name="username"
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
        <DatePickerBox label="DatePicker" name="datepicker" />
        <SelectBox
          datalist={datalist}
          name="select"
          label="Select"
          placeholder="Please Select ..."
          required={true}
          requiredMessage="Please select.."
        />
        <ButtonBox
          btnType="submit"
          colOffset={2}
          styleClass="btn-green"
          text="Create"
        />
      </Form>
    </>
  );
}
