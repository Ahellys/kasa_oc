import "./Owner.scss"
function Owner({name,photo}){
    return(
        <span className="host">
            {name}
            <img src={photo} alt="propriétaire" />
        </span>
    )
}

export default Owner;