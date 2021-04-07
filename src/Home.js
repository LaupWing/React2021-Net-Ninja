import { useState } from 'react'

const Home = () => {
   const [blogs] = useState([
      { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
   ])

   const handleClick = () => {
      setName('Hau Wing')
   }

   return (
      <div className="home">
         <h2>Home</h2>
         <p>{blogs.map(x=>(
            <div key={x.id}>
               <h2>{x.title}</h2>
               <p>Written by {x.author}</p>
            </div>
         ))}</p>
         <button onClick={handleClick}>CLick me</button>
      </div>
   )
}

export default Home
