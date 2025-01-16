/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';
import { verifyTokens } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PHForm from '../components/form/PHForm';
import PHInput from '../components/form/PHInput';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register } = useForm({
    defaultValues: {
      id: 'A-0001',
      password: 'ph123',
    },
  });
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading('Logging in');
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyTokens(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success(`Login Successful`, { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error('Something Went Wrong', { id: toastId });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" {...register('id')} label="ID" />
        <PHInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Submin</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
