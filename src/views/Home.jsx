const Home = () => {
  const imagenURL = "https://i.postimg.cc/KzfwqMwv/pikachubaile.gif";
  return (
    <div className='m-5'>
      <h1>Bienvenido maestro Pokémon</h1>
      <div className='pika'>
      <img className='pikaimg' src={imagenURL} alt="pikachu" />
      </div>
    </div>
  )
}

export default Home
