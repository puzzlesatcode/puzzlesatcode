import { AreaImage, Container, Section } from './styles'
import tech from '../../assets/tech.jpg'

const ContactDetails = () => {
  return (
    <Container>
      <Section>

        <h1><strong>Easiest Way</strong> <br />
          to Deploy Your Backend Code
        </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Optio, ullam temporibus.
          Corrupti sit quae enim esse vitae laboriosam dolorem iure harum nihil?
          Sapiente aliquam error veritatis quia enim asperiores pariatur.
        </p>
        <div className='div-email'>
          <input placeholder="Your E-mail" /><button>Ship Now for Free</button>
        </div>
        <p><strong>After first free project.</strong> $5/mo/project</p>
      </Section>
      <AreaImage>
        <img src={tech} alt="Imagem dos contados" className='img-contact'/>
      </AreaImage>
    </Container>
  )
}

export { ContactDetails }
