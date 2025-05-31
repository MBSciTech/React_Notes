function Product2(products) {
    var arr = products.products;
    return(
        <>
            <div className="container">
            {arr.map((v)=><>
                    <div className = 'Card'>
                        <img src={v.pic} alt=""/>
                        <h2>{v.pname}</h2>
                        <h2>Price : {v.price}</h2>
                        <button>Buy now</button>
                    </div>

                </>)}
                </div>
        </>
    );
}

export default Product2