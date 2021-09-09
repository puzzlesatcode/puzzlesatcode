import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 80vh;
  padding: 0 5%;

  @media only screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80vh;
    padding: 0 5%;
  }
`
const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2% auto;

  h1{
      font-size: 35px;
    }
    strong{
      color: #ff7900;
      font-weight: 700;
    }
    .div-email{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      padding: 0 10px;
      border-radius: 10px;
      background-color: #edf2f7;

      input{
        border: none;
        background-color: transparent;
      }
      button{
        width: 130px;
        padding: 10px;
        border: 2px solid #f77900;
        border-radius: 50px;
        background-color: #ff7900;
        color: #fff;
        font-size: 14px;

        &:hover{
          cursor: pointer;
          filter: brightness(95%);
        }
      }
    } 
    p{
      font-size: 14px;
    }

  @media only screen and (min-width: 768px) {
    width: 50vw;
    padding: 5%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h1{
      font-size: 55px;
    }
    strong{
      color: #ff7900;
      font-weight: 700;
    }
    .div-email{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      padding: 0 10px;
      border-radius: 10px;
      background-color: #edf2f7;

      input{
        width: 70%;
        padding: 10px 0;
        font-size: 18px;
        border: none;
        background-color: transparent;
      }
      button{
        width: 150px;
        padding: 10px;
        border: 2px solid #f77900;
        border-radius: 50px;
        background-color: #ff7900;
        color: #fff;

        &:hover{
          cursor: pointer;
          filter: brightness(95%);
        }
      }
    } 
    p{
      font-size: 16px;
    }
  }
`

const AreaImage = styled.image`
  display: flex;
  flex-direction: column;
  width: 100%;
 
  @media only screen and (min-width: 768px) {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .img-contact{
      width: 90%;
      border-radius: 10px;
    }
  }

`

export { Container, Section, AreaImage }
