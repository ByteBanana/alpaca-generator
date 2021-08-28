import styled from 'styled-components'
import BodyPartOptions from './BodyPartOptions'
import BodyPartStyleOptions from './BodyPartStyleOptions'

export const Panel = styled.div`
  flex: 1;
  padding: 0 8px;
  max-height: 300px;
  overflow-y: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:vertical {
    width: 11px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 11px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 2px solid white; /* should match background, can't be transparent */
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const CustomizePanel = () => {
  return (
    <Panel>
      <BodyPartOptions />
      <BodyPartStyleOptions />
    </Panel>
  )
}
export default CustomizePanel
