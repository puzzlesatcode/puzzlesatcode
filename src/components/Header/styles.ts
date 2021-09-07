import styled, { css } from 'styled-components'

interface NavigationProps {
  openMenu: boolean
}

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  padding: 0 2%;
  background-color: var(--color-gray-50);
`

const ImageHeader = styled.img`
  height: 100px;
  width: 150px;
  object-fit: cover;

  @media only screen and (min-width: 768px) {
    height: 100px;
    width: 200px;
  }
`

const Navigation = styled.nav<NavigationProps>`
  position: fixed;
  top: 0px;
  left: -100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 70vw;
  transition: all 0.3s ease-in-out 0.1s;
  box-shadow: rgb(0 0 0 / 10%) 3px 5px 11px 2px;
  padding: 20px;
  z-index: 99;

  background-color: var(--color-gray-100);

  @media only screen and (min-width: 768px) {
    justify-content: flex-start;

    position: initial;
    height: auto;
    width: 100%;
    background-color: transparent;
    box-shadow: none;
  }

  ${props => props.openMenu && css`
    left: 0;
  `}
`

const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const NavigationListItem = styled.li`
  font-size: 1.8rem;

  a {
    text-decoration: none;
    color: var(--color-gray-600);
    transition: all .2s;

    &:hover {
      color: var(--color-orange-500);
      font-weight: 700;
    }
  }
`

const ContainerButtons = styled.div`
  display: flex;
  gap: 15px;
`

const ButtonToggleTheme = styled.button`
  display: flex;
  align-items: center;
  background-color: var(--color-gray-200);
  color: var(--color-gray-700);
  border: none;
  border-radius: 3px;
  padding: 4px;
  cursor: pointer;
`

const ButtonOpenMenu = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 4px;

  @media only screen and (min-width: 768px) {
    display: none
  }
`

export { Container, ImageHeader, Navigation, NavigationList, NavigationListItem, ContainerButtons, ButtonToggleTheme, ButtonOpenMenu }
