// styles
import {
  Container,
  Section,
  TitleHeader,
  TextStrong,
  AreaEmail,
  AreaInput,
  Button,
  Text,
  AreaImage,
  ImageContact
} from './styles'

// images
import tech from '../../assets/tech.jpg'

const ContactDetails = () => {
  return (
    <Container>
      <Section>
        <TitleHeader>
          <TextStrong>Easiest Way</TextStrong>
          to Deploy Your Backend Code
        </TitleHeader>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Optio, ullam temporibus.
          Corrupti sit quae enim esse vitae laboriosam dolorem iure harum nihil?
          Sapiente aliquam error veritatis quia enim asperiores pariatur.
        </Text>
        <AreaEmail className='div-email'>
          <AreaInput placeholder="Your E-mail" /><Button>Ship Now for Free</Button>
        </AreaEmail>
        <Text><TextStrong>After first free project.</TextStrong> $5/mo/project</Text>
      </Section>
      <AreaImage>
        <ImageContact src={tech} alt="Imagem dos contados" />
      </AreaImage>
    </Container>
  )
}

export { ContactDetails }
