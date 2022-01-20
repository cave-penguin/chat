import React from 'react'
import Head from './head'
import LoginForm from './login'

// import wave from '../assets/images/wave.jpg'

const Home = () => {
  return (
    <div>
      <Head title="Hello" />
      <LoginForm />
    </div>
  )
}

Home.propTypes = {}

export default Home
