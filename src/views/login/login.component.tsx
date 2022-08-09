import { Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { StringDecoder } from 'string_decoder'
import { FormInput } from '../../components/FormInput'
import { LogInVM } from '../../core/view-models/auth-model/sign-in.model'

interface ComponentProps {
	onLogin: (data: LogInVM) => void
}
type LoginProps = ComponentProps

export const Login: React.FC<LoginProps> = (props) => {
	const [loginReq, setLoginReq] = useState<LogInVM>(new LogInVM())

	const onChangeInput = (type: string, data: string) => {
		setLoginReq((prevState) => ({
			...prevState,
			[type]: data,
		}))
	}

	const loginBtnPress = () => {
		props.onLogin(loginReq)
	}

	return (
		<Flex
			height={'100vh'}
			alignItems={'center'}
			justifyContent={'center'}
			background={'gray.100'}
		>
			<Flex
				direction={'column'}
				background={'white'}
				p={10}
				rounded={6}
				alignItems={'center'}
			>
				<Heading mb={6}>{'Log in'}</Heading>

				<FormInput
					label={'User name'}
					value={loginReq.username}
					onInputChange={(e: string) => onChangeInput('username', e)}
					required
					inputType={'text'}
				/>

				<FormInput
					label={'Password'}
					value={loginReq.password}
					onInputChange={(e: string) => onChangeInput('password', e)}
					isRequired
					inputType={'password'}
				/>

				<Button
					mt={3}
					colorScheme={'teal'}
					width={'100%'}
					onClick={loginBtnPress}
				>
					{'Log in\r'}
				</Button>
			</Flex>
		</Flex>
	)
}
