import styled from 'styled-components'
import Button from '../shared/Button'
import Alpaca from '../assets/alpaca'
import { capitalize, isArray } from 'lodash'
import AppContext from '../store/AppContext'
import { useContext } from 'react'

const Container = styled.div`
  padding: 4px;
`

const OptionsHolder = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 8px;
  max-width: 300px;
`

const BodyPartOptions = () => {
  const appContext = useContext(AppContext)

  const options = Object.keys(Alpaca).filter((key) => isArray(Alpaca[key]))

  const selectOptionHandler = (bodyPart) => {
    appContext.onSelectBodyPart(bodyPart)
  }

  return (
    <Container>
      <h3>ACCESSORIZE THE ALPACA'S</h3>
      <OptionsHolder>
        {options.map((option) => (
          <Button
            key={option}
            active={appContext.selectedBodyPart === option}
            onClick={() => {
              selectOptionHandler(option)
            }}
          >
            {capitalize(option)}
          </Button>
        ))}
      </OptionsHolder>
    </Container>
  )
}

export default BodyPartOptions
