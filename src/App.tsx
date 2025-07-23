import Box from './component/Box'
import Nav from './component/Nav'
import Sub from './component/Sub'
import './index.css'

function App() {
  

  return (
    <>
      <div className='flex flex-col '>
        <Nav />
        <Sub />
        <div className='flex-1'>
          <Box />
        </div>
        
      </div>
    
      
    </>
  )
}

export default App
