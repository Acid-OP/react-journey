import './App.css'
import { Button } from './components/button'
import { PlusIcon } from './icons/plusIcon'
import { ShareIcon } from './icons/shareicon'

function App() {

  return (
    <>
      <Button 
        variant={"primary"}
        startIcon={<PlusIcon size={"lg"} />} 
        endIcon={<ShareIcon size={"lg"} />} 
        size="lg" 
        title={"Share"}
        onClick={() => alert("Button clicked!")}
      ></Button>

      <Button 
        variant={"secondary"}
        startIcon={<PlusIcon size={"lg"} />} 
        endIcon={<ShareIcon size={"lg"} />} 
        size="lg" 
        title={"Share"}
        onClick={() => alert("Button clicked!")}

      ></Button>


      <Button 
        variant={"primary"}
        startIcon={<PlusIcon />} 
        endIcon={<ShareIcon />} 
        size="sm" 
        title={"Share"}
        onClick={() => alert("Button clicked!")}

      ></Button>


      <Button 
        variant={"primary"}
        startIcon={<PlusIcon size={"md"} />} 
        endIcon={<ShareIcon size={"md"} />} 
        size="md" 
        title={"Share"}
        onClick={() => alert("Button clicked!")}

      ></Button>
    </>
  ) 
}

export default App