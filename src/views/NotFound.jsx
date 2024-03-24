const NotFound = () => {
  const imagenURL = "https://i.postimg.cc/Qt1zfJ07/image-processing20200710-545-gwa8ox.png";
  return (
    <div className='m-5'>
      <img className='error404' src={imagenURL} alt="error404" />
    </div>
  )
}

export default NotFound
