/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MdOutlineAttachEmail } from "react-icons/md";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onFinish = async (values: any) => {
    const userInfo = {
      email: values.email,
      password: values.password,
    };
    const res = await login(userInfo);
    if ((res as any)?.error?.data?.message) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `${(res as any)?.error?.data?.message}`,
        showConfirmButton: false,
        timer: 2000,
      });
    }

    if (res?.data?.data) {
      const { _id, email, role, name, phone } = (res as any)?.data?.data;
      const finalResData = { _id, email, role, name, phone };
      dispatch(
        setUser({ user: finalResData, token: (res as any)?.data?.token })
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  };
  return (
    <div className="bg-gray-200 h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mx-auto flex  flex-col gap-2 justify-center items-center h-[80vh]">
          <div className="text-2xl font-bold  text-center pb-2">
            <h1>
              Welcome to <span className="text-blue-500">Sport Zone!</span>
            </h1>
            <h1 className="text-xl">Login Page</h1>
          </div>
          <div className="p-10 rounded-md bg-gray-300">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  prefix={
                    <MdOutlineAttachEmail className="site-form-item-icon" />
                  }
                  placeholder="email"
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
                <div className="flex gap-2 items-center">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button bg-blue-500 font-semibold"
                  >
                    Log in
                  </Button>
                  <p>
                    Or{" "}
                    <a href="/register" className="text-green-600">
                      register now!
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

export default Login;
