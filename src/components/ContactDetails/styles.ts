import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
  padding: 0 5%;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2% auto;

  @media only screen and (min-width: 768px) {
    width: 50vw;
    padding: 5%;
  }
`
const TitleHeader = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 35px;

  @media only screen and (min-width: 768px) {
    font-size: 55px;
  }
`
const TextStrong = styled.strong`
  color: var(--color-orange-500);
`
const AreaEmail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 10px 5px 10px 10px;
  margin: 10px 0;
  border-radius: 10px;
  background-color: var(--color-gray-200);
`
const AreaInput = styled.input`
  border: none;
  background-color: transparent;
  width: 65%;
  
  @media only screen and (min-width: 768px) { 
    padding: 10px 0;
    font-size: 18px;
  }
`
const Button = styled.button`
  width: 130px;
  padding: 10px;
  border: 2px solid var(--color-orange-500);
  border-radius: 10px;
  background-color: var(--color-orange-500);
  color: var(--color-gray-50);
  font-size: 14px;

  &:hover{
    cursor: pointer;
    filter: brightness(95%);
  }

  @media only screen and (min-width: 768px) {
    width: 150px;
  }
`
const Text = styled.p`
  font-size: 14px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
`
const AreaImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
 
  @media only screen and (min-width: 768px) {
    width: 50%;
    justify-content: center;
    align-items: center;
  }
`
const ImageContact = styled.img`
  width: 100%;
  border-radius: 10px;
`
export { Container, Section, TitleHeader, TextStrong, AreaEmail, AreaInput, Button, Text, AreaImage, ImageContact }
