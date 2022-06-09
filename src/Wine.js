

function Wine({allWine, show}) {
    return ( 
            <div className="products">
                {allWine.map((element=> {
                    const {id, name, image, wine, searchTerm, description, price, showMore} = element;
                  
                    return (
                        <div key = {id} className="product-card">
                        <h3 className="product-card-name">{name}</h3>
                        <div className="product-card-vine">
                        <img src={image} width="50px" alt="wine"/>
                        <div className="product-card-description">
                        <p className="product-card-name"><b>Вино:</b> {wine}</p>
                        <p className="product-card-name"><b>Страна:</b> {searchTerm}</p>
                        <p className="product-card-name">{showMore ? description : description.substring (0, 44) + " "} 
                         <button className="btnWine" onClick = {()=>show(element)}>{showMore ? "свернуть..." : "раскрыть..."}</button>  </p>
                        </div>
                        </div>
                        <h4 className="product-card-name price">{price} ₽</h4>
                       
                    </div>        
                    )
                }))}
            </div>
            
    )
}

export default Wine;