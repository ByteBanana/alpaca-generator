import { capitalize } from 'lodash'
import { useContext } from 'react'
import styled from 'styled-components'
import Alpaca from '../assets/alpaca'
import Button from '../shared/Button'
import AppContext from '../store/AppContext'

const Container = styled.div``

const OptionsHolder = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 8px;
  max-width: 300px;
`

const BodyPartStyleOptions = () => {
  const appContext = useContext(AppContext)
  const bodyPartStyles = Alpaca[appContext.selectedBodyPart]

  const selectStyleHandler = (index) => {
    appContext.onSelectBodyPartStyle(index)
  }

  return (
    <Container>
      <h3>STYLE</h3>
      <OptionsHolder>
        {bodyPartStyles.map((style, index) => (
          <Button
            active={index === appContext.bodyPartStyle[appContext.selectedBodyPart]}
            key={style.name}
            onClick={() => {
              selectStyleHandler(index)
            }}
          >
            {capitalize(style.name)}
          </Button>
        ))}
      </OptionsHolder>
    </Container>
  )
}

export default BodyPartStyleOptions
