import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage';
import Header from './Header';,
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <WelcomeMessage />
        <Header /> 
        <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <Footer />
    </>
  )
}

export default App
