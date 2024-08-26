/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { useRegisterMutation } from "../../../redux/features/auth/authApi";

const AddAdmin = () => {
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
      role: "admin",
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
    }
  };
  return (
    <div className="">
      <div className=" w-full">
        <div className="mx-auto flex flex-col gap-2 justify-center items-center h-[80vh]">
          <div className="text-xl font-bold  text-center pb-2">
            <h1>
              Add New<span className="text-green-500"> Admin!</span>
            </h1>
          </div>
          <div className="p-10 rounded-md bg-gray-200 glass ">
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
                <div className="flex items-center gap-3 w-fll">
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button bg-green-500 font-semibold w-full"
                  >
                    Add Admin
                  </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
