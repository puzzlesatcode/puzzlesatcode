import { useState } from 'react'

// styles
import {
  Container,
  ImageHeader,
  Navigation,
  NavigationList,
  NavigationListItem,
  ContainerButtons,
  ButtonToggleTheme,
  ButtonOpenMenu
} from './styles'

// images
import LogoPuzzles from '../../assets/newLogoPuzzles.png'
import { Icon } from '../Icon'

const Header = () => {
  const [menu, setMenu] = useState(false)

  const HandleOpenMenu = () => setMenu(!menu)

  return (
    <Container>
      <a href="/">
        <ImageHeader src={LogoPuzzles} alt="" />
      </a>

      <Navigation openMenu={menu}>
        <NavigationList>
          <NavigationListItem>
            <a href="#">Overview</a>
          </NavigationListItem>
          <NavigationListItem>
            <a href="#">About</a>
          </NavigationListItem>
          <NavigationListItem>
            <a href="#">Projects</a>
          </NavigationListItem>
          <NavigationListItem>
            <a href="#">Contact</a>
          </NavigationListItem>
        </NavigationList>
      </Navigation>

      <ContainerButtons>
        <ButtonToggleTheme>
          <Icon className="material-icons-sharp" iconName="dark_mode" />
        </ButtonToggleTheme>

        <ButtonOpenMenu onClick={HandleOpenMenu}>
          <Icon className="material-icons-outlined" iconName={menu ? 'close' : 'menu'} />
        </ButtonOpenMenu>
      </ContainerButtons>
    </Container>
  )
}

export { Header }
