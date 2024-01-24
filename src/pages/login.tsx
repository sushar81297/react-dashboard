import { LockOutlined, UserOutlined } from "@ant-design/icons";

import ButtonBox from "@components/ButtonBox";
import CheckBox from "@components/CheckBox";
import { Form } from "antd";
import InputField from "@components/InputField";
import logoImg from "@assets/images/logo_image.png";
import { useNavigate } from "react-router-dom";

interface LoginForm {
  username?: string;
  password?: string;
  remember?: string;
}

export default function Login() {
  const navigate = useNavigate();
  const onFinish = (value: LoginForm) => {
    console.log("Received values of form: ", value);
    console.log("helloing");
    navigate("/home");
  };
  return (
    <div className="login-container">
      <div>
        <img src={logoImg} />
        <h2>Sign in</h2>
        <p>Welcome !! Please enter your details below to sign in.</p>
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
          Icon={LockOutlined}
          name="password"
          required={true}
          type="password"
          requiredMessage="Please input your Password!"
          placeholder="Password"
        />
        <CheckBox name="remember" checked="checked" text="Remember me?" />

        <ButtonBox
          btnType="submit"
          formCss="button-container"
          styleClass="button-container btn-green"
          text="Login"
        />
        <p>
          Don't have an account?
          <a href="/register" className="signup">
            Sign Up
          </a>
        </p>
      </Form>
    </div>
  );
}
