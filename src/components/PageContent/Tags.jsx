function Tags({tagArray}){
    let key =0;
    const tags= tagArray.map(tag =>
    <p key={key++} className="tag">{tag}</p>
    )

    return(
        <div className="tags">
            {tags}
        </div>
        
    )
}

export default Tags;