import { Form, Input, Button } from 'antd'
import { FC } from 'react'
import google from '@/assets/img/google.png'
import facebook from '@/assets/img/Facebook.svg'
import { Link, useNavigate } from 'react-router-dom'

type TForm = {
	username: string
	email: string
	name: string
	password: string
}

const SignIn: FC = () => {
	const [form] = Form.useForm()
	const navigate = useNavigate()
	const handleFormSubmit = (form: TForm) => {
		console.log(form)
		navigate('/')
	}

	return (
		<div className='flex items-center justify-center h-screen w-full'>
			<div className='w-[375px] border border-black bg-white rounded-md flex flex-col gap-y-5 px-7'>
				<h2 className='text-[36px] font-bold text-center'>Sign In</h2>
				<div className='flex flex-col gap-y-4'>
					<Button className='flex items-center gap-x-4 justify-center py-[10px]'>
						<img src={google} /> Continue with Google
					</Button>
					<Button className='flex items-center gap-x-4 justify-center py-[10px]'>
						<img src={facebook} /> Continue with Google
					</Button>
				</div>
				<div className='text-center flex justify-center items-center gap-3'>
					<div className='h-[1px] bg-black w-full'></div>
					<div>OR</div>
					<div className='h-[1px] bg-black w-full'></div>
				</div>
				<Form form={form} layout='vertical' onFinish={handleFormSubmit}>
					<Form.Item name='username' label='Your username'>
						<Input required allowClear placeholder='Enter your username' />
					</Form.Item>
					<Form.Item name='email' label='Your email'>
						<Input required allowClear placeholder='Enter your email' />
					</Form.Item>
					<Form.Item name='name' label='Your name'>
						<Input required allowClear placeholder='Enter your name' />
					</Form.Item>
					<Form.Item name='password' label='Your password'>
						<Input required allowClear placeholder='Enter your password' />
					</Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						className='w-full bg-[#6200EE] hover:bg-[#6200EE]'
					>
						Submit
					</Button>
				</Form>
				<p className='text-center mb-2'>
					Don't have account?{' '}
					<Link className='text-[#1B28BC]' to='/sign_up'>
						Go to sign up
					</Link>
				</p>
			</div>
		</div>
	)
}

export { SignIn }
