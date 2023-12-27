function Tags({tagArray}){
    
    const tags= tagArray.map(tag =>
    <p className="tag">{tag}</p>
    )

    return(
        <div className="tags">
            {tags}
        </div>
        
    )
}

export default Tags;