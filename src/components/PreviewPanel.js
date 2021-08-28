import Alpaca from '../assets/alpaca'
import { useContext } from 'react'

import AppContext from '../store/AppContext'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  position: relative;
  height: 300px;
`

const Img = styled.img`
  width: 300px;
  position: absolute;
`

const PreviewPanel = () => {
  const appContext = useContext(AppContext)

  const alpacaBodyPart = Object.keys(appContext.bodyPartStyle).map((key, no) => {
    const index = appContext.bodyPartStyle[key]
    const selectedBodyPart = Alpaca[key][index]
    const { image, name } = selectedBodyPart

    return <Img key={name + no} alt={name} src={image}></Img>
  })

  return (
    <Container id='preview-alpaca'>
      {alpacaBodyPart}
      <Img src={Alpaca.nose.image} alt={Alpaca.nose.name} />
    </Container>
  )
}

export default PreviewPanel
