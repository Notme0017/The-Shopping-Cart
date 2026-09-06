import useImageURL from "../api/fetchImageApi"
import '../style/homepage.css'

const HomePage = () =>{
    const {imageURL, error, loading} = useImageURL();

    if(loading) return <p>Loading...</p>
    if(error) return <p>A network error was encountered</p>

    return(
        <div className="homepage">
            <h2>Hi!</h2>
            <h3>Nice to meet you!</h3>
            <img src={imageURL} alt=":smiley:" />

        </div>
    )
}

export default HomePage;