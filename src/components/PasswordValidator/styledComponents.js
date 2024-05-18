import styled from 'styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
`

export const CardContainer = styled.div`
  height: 230px;
  width: 90%;
  max-width: 350px;
  background-color: #383a4e;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  box-shadow: 2px #434451;
  @media screen and (min-width: 768px) {
    height: 350px;
    max-width: 450px;
    border-radius: 20px;
    padding: 48px;
  }
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  color: #ffffff;
  font-weight: 500;
  margin-top: 0;
  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #f8fafc;
  font-weight: 400;
  text-align: center;
  margin-top: 0;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: #edeeff;
  border: none;
  border-radius: 2px;
  outline: none;
  padding: 16px;
  margin-top: 10px;
  color: #475569;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    margin-top: 32px;
  }
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ef4444;
  font-weight: 400;
`
