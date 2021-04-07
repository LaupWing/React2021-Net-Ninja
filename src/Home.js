import {useState} from 'react'

const Home = () => {
   const [name, setName] = useState('Laup Wing')

   const handleClick = () =>{
      setName('Hau Wing')
   }

   return (
      <div className="home">
         <h2>Home</h2>
         <p>{name}</p>
         <button onClick={handleClick}>CLick me</button>
      </div>
   )
}

export default Home
