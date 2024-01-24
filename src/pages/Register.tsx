import { LockOutlined, MessageOutlined, UserOutlined } from "@ant-design/icons";

import ButtonBox from "@components/ButtonBox";
import CheckBox from "@components/CheckBox";
import { Form } from "antd";
import InputField from "@components/InputField";
import logoImg from "@assets/images/logo_image.png";
import { useNavigate } from "react-router-dom";

interface RegisterForm {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  remember?: string;
}

export default function Register() {
  const navigate = useNavigate();
  const onFinish = (value: RegisterForm) => {
    console.log("Received values of form: ", value);
    navigate("/login");
  };
  return (
    <div className="login-container">
      <div>
        <img src={logoImg} />
        <h2>Sign Up</h2>
        <p>Welcome !! Please enter your details below to sign up.</p>
      </div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <InputField
          Icon={UserOutlined}
          name="username"
          required={true}
          requiredMessage="Please input your Username!"
          placeholder="Username"
        />
        <InputField
          Icon={MessageOutlined}
          name="email"
          type="email"
          required={true}
          requiredMessage="Please input your Email!"
          placeholder="Email"
        />
        <InputField
          Icon={LockOutlined}
          name="password"
          required={true}
          type="password"
          requiredMessage="Please input your Password!"
          placeholder="Password"
        />

        <InputField
          Icon={LockOutlined}
          name="confirmPassword"
          required={true}
          type="password"
          requiredMessage="Please input your Confirm Password!"
          placeholder="Confirm Password"
        />
        <CheckBox name="remember" checked="checked" text="Remember me?" />

        <ButtonBox
          type="submit"
          formCss="button-container"
          styleClass="button-container login-form-button"
          text="Register"
        />
        <p>
          Already have an account?
          <a href="/login" className="signup">
            Sign In
          </a>
        </p>
      </Form>
    </div>
  );
}
