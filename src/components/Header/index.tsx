import { useState } from 'react'
import { Link } from 'react-router-dom'

// styles
import {
  Container,
  ImageHeader,
  Navigation,
  NavigationList,
  NavigationListItem,
  NavigationListItemLink,
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
      <Link to="/">
        <ImageHeader src={LogoPuzzles} alt="" />
      </Link>

      <Navigation openMenu={menu}>
        <NavigationList>
          <NavigationListItem>
            <NavigationListItemLink exact to="/">Overview</NavigationListItemLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavigationListItemLink strict to="/about">About</NavigationListItemLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavigationListItemLink strict to="/projects">Projects</NavigationListItemLink>
          </NavigationListItem>
          <NavigationListItem>
            <NavigationListItemLink strict to="contact">Contact</NavigationListItemLink>
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
