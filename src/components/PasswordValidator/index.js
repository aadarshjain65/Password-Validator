import {useState} from 'react'

import {
  BgContainer,
  CardContainer,
  Heading,
  Description,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => setPassword(event.target.value)

  return (
    <BgContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Description>Check how strong and secure is your password</Description>
        <Input type="password" value={password} onChange={onChangePassword} />
        {password.length < 8 ? (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        ) : null}
      </CardContainer>
    </BgContainer>
  )
}

export default PasswordValidator
