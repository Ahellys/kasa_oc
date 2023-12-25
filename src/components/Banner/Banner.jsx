function Banner({img, text}) {
    return (
      <div >
        <img src={img} alt='paysage'/>
        <p>{text}</p>
      </div>
    );
  }
  
  export default Banner;