import styled from 'styled-components'

const Button = styled.button`
  display: inline-flex;

  padding: 6px 16px;
  font-size: 16px;
  margin: 0;
  background-color: ${(p) => (p.active ? '#19549c' : '#fff')};
  border: 1px solid #19549c;
  color: ${(p) => (p.active ? '#fff' : '#19549c')};
  font-weight: bold;
  border-radius: 100px;
  &:active {
    color: #fff;
    background-color: #19549c;
  }
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
`

export default Button
