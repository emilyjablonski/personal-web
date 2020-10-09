import React from 'react';
import styled from '@emotion/styled'

const AppContainer = styled.div({
  position: `absolute`,
  top: 0,
  left: 0,
  backgroundColor: `#282c34`,
  height: `100vh`,
  width: `100vw`,
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
  margin: 0
})

const AppContent = styled.div({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  height: `100%`,
})

const TextBox = styled.div({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  fontSize: `20px`,
  color: `white`,
})

const App = () => {
  return (
    <AppContainer>
      <AppContent>
        <TextBox>
          henlo it me emjabs
          ▼・ᴥ・▼
        </TextBox>
      </AppContent>
    </AppContainer>
  )
}

export default App
