function Product2(products) {
    var arr = products.products;
    return(
        <>
            <div className="container">
            {arr.map((v)=><>
                    <div className = 'Card'>
                        <img src={v.pic} alt=""/>
                        <h2>{v.pname}</h2>
                        <h2>Price : <span style={{color:'green'}}>{v.price}</span></h2>
                        <div className='buttons'>
                            <button id="btn-buy">Buy Now</button>
                            <button id='btn-add'>Add to Cart</button>
                        </div>
                    </div>

                </>)}
                </div>
        </>
    );
}

export default Product2