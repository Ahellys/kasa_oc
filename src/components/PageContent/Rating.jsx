function Rating({score}){
const rating = [1, 2, 3, 4, 5];
return (
    <div className="rating">
        {rating.map(rating => 
            (parseInt(score) >= rating)?(
                <i class="fa fa-star checked"></i>
            ) : (
                <i class="fa fa-star"></i>
            )
            )
        }
    </div>
)

}

export default Rating;