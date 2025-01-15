import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { setUser } from '../redux/features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';
import { verifyTokens } from '../utils/verifyToken';

type TForm = {
  id: string;
  password: string;
};

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 'A-0001',
      password: 'ph123',
    },
  });
  const [login, { error }] = useLoginMutation();
  console.log(error);

  const onSubmit = async (data: TForm) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyTokens(res.data.accessToken);
    console.log(user);
    dispatch(setUser({ user, token: res.data.accessToken }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">Id</label>
        <input type="text" id="id" {...register('id')} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register('password')} />
      </div>
      <Button htmlType="submit">Submin</Button>
    </form>
  );
};

export default Login;
