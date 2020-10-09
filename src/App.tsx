import React from 'react';
import styled from '@emotion/styled'
import colors from './colors'
import grad from './assets/grad.png'

const AppContainer = styled.div({
  position: `absolute`,
  top: 0,
  left: 0,
  backgroundColor: colors.paletteOrange,
  height: `100vh`,
  width: `100vw`,
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`,
  margin: 0,
  overflow: `hidden`
})

const AppContent = styled.div({
  display: `flex`,
  alignItems: `center`,
  justifyContent: `center`,
  height: `100%`,
})

const TextBox = styled.div({
  position: `absolute`,
  top: `550px`,
  left: `100px`,
  fontSize: `20px`,
  color: colors.paletteBrown,
  width: `100%`,
  borderRadius: `10px`,
  backgroundColor: colors.paletteYellow,
  border: `8px solid ${colors.palettePink}`,
  padding: `30px`
})

const GradImage = styled.img({
  position: `absolute`,
  left: `-50px`,
  top: `-80px`,
  width: `637px`,
  height: `825px`,
  userSelect: `none`
})

const App = () => {
  return (
    <AppContainer>
      <AppContent>
        <GradImage src={grad} />
        <TextBox>
          henlo it me emjabs
          ▼・ᴥ・▼
        </TextBox>
      </AppContent>
    </AppContainer>
  )
}

export default App
