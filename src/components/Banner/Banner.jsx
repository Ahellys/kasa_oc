function Banner({img, text}) {
    return (
      <div className="banner">
        <img src={img} alt='paysage'/>
        <p>{text}</p>
      </div>
    );
  }
  
  export default Banner;