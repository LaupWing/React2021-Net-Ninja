const Home = () => {
   const handleClick = () =>{
      console.log('handle on click')
   }

   return (
      <div className="home">
         <h2>Home</h2>
         <button onClick={handleClick}>CLick me</button>
      </div>
   )
}

export default Home
