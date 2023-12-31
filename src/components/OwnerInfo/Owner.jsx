import "./Owner.scss"
function Owner({name,photo}){
    return(
        <div className="host">
            <p className="name">{name}</p>
            <img src={photo} alt="propriétaire" />
        </div>
    )
}

export default Owner;