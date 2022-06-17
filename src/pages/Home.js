import ItemListContainer from "../components/ItemListContainer/ItemListContainer"


const Home = () => {
    return(
        <div className='general-container'>
            <ItemListContainer title={'Productos Destacados'} /* products={products} *//>
            <ItemListContainer title={'Productos Recomendados'}/*  products={products} *//>
        </div>
    )
}

export default Home