import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const router = useRouter()

  const LoginHandler = () => {
    console.log(id, pw)
    // 체크상태시 id 저장
    // 추후 id,pw 넘겨 로그인 연동
    // 유저 데이터 저장
    // 화면 넘기기(Link 말고 useRouter 사용)
    router.push('/Annual_Duty')
  }
  // 화면이 처음 로딩될 때 로컬스토리지에 데이터가 있으면 체크표시 만들기
  // 인풋에 내용 넣기
  useEffect(() => {
    setId('222')
  }, [])

  return (
    <Wrap>
      <Container>
        <Left>
          <Img src="/imgs/main-img.png" />
        </Left>
        <Right>
          <LogoArea>
            <Logo src="/imgs/logo.png" />
          </LogoArea>
          <MentArea>
            <Ment>
              안녕하세요.
              <br />
              <Span>RE:POST</Span> 입니다.
            </Ment>
          </MentArea>
          <InputArea>
            <EmailArea>
              <Email>이메일</Email>
              <EmailInput
                onChange={(e) => {
                  setId(e.target.value)
                }}
                value={id}
              />
            </EmailArea>
            <PwArea>
              <Pw>비밀번호</Pw>
              <PwInput
                onChange={(e) => {
                  setPw(e.target.value)
                }}
                type="password"
              />
            </PwArea>
            <CheckboxArea>
              <Checkbox type="checkbox" name="이메일저장" />
              <CheckboxP>이메일 저장</CheckboxP>
            </CheckboxArea>
          </InputArea>
          <ButtonArea>
            <Btn onClick={LoginHandler}>로그인</Btn>
          </ButtonArea>
        </Right>
      </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e4f2ff;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container = styled.div`
  width: 1440px;
  height: 870px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`
const Left = styled.div`
  width: 715px;
  height: 820px;
  border-radius: 20px;
  background-color: #0474e4;
  display: flex;
  justify-content: center;
  align-items: end;
`
const Img = styled.img`
  width: 680px;
  height: 415px;
`
const Right = styled.div`
  width: 680px;
  height: 820px;
`
const Logo = styled.img`
  width: 260px;
  height: 100px;
`
const LogoArea = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: end;
`
const MentArea = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: start;
  align-items: center;
`
const Ment = styled.div`
  margin-left: 100px;
  font-size: 30px;
  font-weight: bold;
`
const Span = styled.span`
  color: #0474e4;
  font-size: 60px;
  font-weight: bold;
`
const SubLogo = styled.img`
  width: 350px;
  margin-right: 100px;
`
const InputArea = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;
`
const EmailArea = styled.div`
  width: 70%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Email = styled.p`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.05rem;
`
const EmailInput = styled.input`
  width: 450px;
  height: 40px;
  border: 1px solid #727272;
  border-radius: 6px;
  padding: 10px;
  outline: none;
`
const PwArea = styled.div`
  width: 70%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Pw = styled.p`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.05rem;
`
const PwInput = styled.input`
  width: 450px;
  height: 40px;
  border: 1px solid #727272;
  border-radius: 6px;
  padding: 10px;
  outline: none;
`

const CheckboxArea = styled.div`
  width: 70%;
  height: 30%;
  display: flex;
  align-items: center;
  gap: 10px;
`
const Checkbox = styled.input`
  width: 30px;
  height: 30px;
`
const CheckboxP = styled.p`
  letter-spacing: -0.05rem;
`
const ButtonArea = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Btn = styled.button`
  background-color: #0474e4;
  width: 450px;
  height: 60px;
  border-radius: 30px;
  color: #ffffff;
  border: none;
  font-size: 16px;
  letter-spacing: -0.05rem;
  cursor: pointer;
  &:hover {
    background-color: #186cc1;
  }
`
export default Login
