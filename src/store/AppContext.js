import React from 'react'

const AppContext = React.createContext({
  bodyPartStyle: {
    backgrounds: 0,
    ears: 0,
    hair: 0,
    leg: 0,
    neck: 0,
    accessories: 0,
    eyes: 0,
    mouth: 0
  },
  selectedBodyPart: '',
  onSelectBodyPart: (bodyPart) => {},
  onSelectBodyPartStyle: (index) => {}
})

export default AppContext
