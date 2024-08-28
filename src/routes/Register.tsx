/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [register, { error }] = useRegisterMutation();
  if ((error as any)?.data?.success == false) {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: `${(error as any)?.data?.message}`,
      showConfirmButton: false,
      timer: 2000,
    });
  }
  const onFinish = async (values: any) => {
    const userInfo = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      password: values.password,
      role: "user",
    };

    const res = await register(userInfo).unwrap();

    if (res.success === true) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Register Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/login");
    }
  };
  return (
    <div className="bg-gray-200 h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mx-auto flex flex-col gap-2 justify-center items-center h-[80vh]">
          <div className="text-2xl font-bold  text-center pb-2">
            <h1>
              Welcome to <span className="text-green-500">Tree Oasis!</span>
            </h1>
            <h1 className="text-xl">Register Page</h1>
          </div>
          <div className="p-10 rounded-md bg-gray-300">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Your Name"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Your Email"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Your Mobile"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <div className="flex items-center gap-3">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button bg-green-500 font-semibold"
                  >
                    Sign Up
                  </Button>
                  <p>
                    Or{" "}
                    <a href="/login" className="text-blue-600">
                      Login now!
                    </a>
                  </p>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
