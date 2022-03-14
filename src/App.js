import './App.css'
import * as htmlToImage from 'html-to-image'
import { useState } from 'react'

import Layout from './components/Layout'
import PreviewPanel from './components/PreviewPanel'
import CustomizePanel from './components/CustomizePanel'
import AppContext from './store/AppContext'
import styled from 'styled-components'
import Alpaca from './assets/alpaca'

const Heading = styled.h1`
  @media (max-width: 425px) {
    text-align: center;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
`
const PanelContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 425px) {
    flex-direction: column;
    height: 600px;
  }
`

const GitHubLink = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  a {
    display: flex;
    align-items: center;
  }
`

const ActionHolder = styled.div`
  display: flex;
  padding: 16px 0 0 0;
  gap: 16px;
  > button {
    flex: 1;
    padding: 8px;
    box-shadow: 3px 4px 0px 0px #1564ad;
    background: linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
    background-color: #79bbff;
    border-radius: 5px;
    border: 1px solid #337bc4;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 17px;
    font-weight: bold;
    padding: 12px 44px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #528ecc;
    &:hover {
      background: linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
      background-color: #378de5;
    }
    &:active {
      position: relative;
      top: 1px;
    }
  }
`

function App() {
  const [bodyPartStyle, setBodyPartStyle] = useState({
    backgrounds: 0,
    ears: 0,
    hair: 0,
    leg: 0,
    neck: 0,
    accessories: 0,
    eyes: 0,
    mouth: 0
  })
  const [selectedBodyPart, setSelectedBodyPart] = useState('neck')
  const selectBodyPartHandler = (bodyPart) => {
    setSelectedBodyPart(bodyPart)
  }

  const selectBodyPartStyleHandler = (index) => {
    setBodyPartStyle((prevState) => {
      return {
        ...prevState,
        [selectedBodyPart]: index
      }
    })
  }
  const randomStyles = () => {
    let newBodyPartStyle = {}
    Object.keys(bodyPartStyle).forEach((key) => {
      // const bodyPart = bodyPartStyle[key]
      newBodyPartStyle = {
        ...newBodyPartStyle,
        [key]: parseInt(Math.random() * Alpaca[key].length)
      }
    })

    setBodyPartStyle(newBodyPartStyle)
  }

  const dataUrlToBlob = (dataUrl) => {
    var mimeString = dataUrl.split(',')[0].split(':')[1].split(';')[0]

    const buf = Buffer.from(dataUrl.split(',')[1], 'base64')

    var blob = new Blob([buf], { type: mimeString })
    return blob
  }

  const downloadClickHandler = () => {
    var containerToCapture = document.getElementById('preview-alpaca')

    htmlToImage.toPng(containerToCapture).then(function (dataUrl) {
      const data = URL.createObjectURL(dataUrlToBlob(dataUrl))
      var link = document.createElement('a')
      link.href = data
      link.download = 'alpaca.png'
      link.target = '_blank'
      link.click()
    })
  }

  const randomClickHandler = () => {
    randomStyles()
  }

  return (
    <AppContext.Provider
      value={{
        bodyPartStyle,
        selectedBodyPart: selectedBodyPart,
        onSelectBodyPart: selectBodyPartHandler,
        onSelectBodyPartStyle: selectBodyPartStyleHandler
      }}
    >
      <Container>
        <Layout>
          <Heading>ALPACA GENERATOR</Heading>
          <PanelContainer>
            <PreviewPanel />
            <CustomizePanel />
          </PanelContainer>
          <ActionHolder>
            <button onClick={downloadClickHandler}>Download</button>
            <button onClick={randomClickHandler}>Random</button>
          </ActionHolder>
          <GitHubLink>
            <a href='https://github.com/bytesBanana' target='_blank' rel='noreferrer'>
              <img src='/bytebananalogo.png' alt='Github' width='48' />
              View code in Github
            </a>
          </GitHubLink>
        </Layout>
      </Container>
    </AppContext.Provider>
  )
}

export default App
