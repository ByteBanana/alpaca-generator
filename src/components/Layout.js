import styled from 'styled-components'

const Container = styled.div`
  margin: 48px;
  width: 700px;
  display: flex;
  padding: 32px;
  flex-direction: column;
  border-image-slice: 12 12 12 12;
  border-image-width: 12px 12px 12px 12px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: repeat repeat;
  border-image-source: url('https://mdn.github.io/css-examples/tools/border-image-generator/border-image-5.png');
  border-style: solid;
`

const Layout = (props) => <Container>{props.children}</Container>

export default Layout
