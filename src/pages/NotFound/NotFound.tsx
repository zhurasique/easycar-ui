import { Container, Info, BackPropose } from "./NotFound.styled"
import { Link } from "react-router-dom";

export const NotFound = (props) => {

    document.title = props.title;

    return (
        <Container>
            <div>
                <img src={require("../../assets/images/404.png")} alt={"404"} />
            </div>
            <Info>
                <h2>Page not found</h2>
                <p>We're sorry, we couldn't find the page you requested.</p>
                <BackPropose>
                    <div>
                        <p>You can try to go back to
                            <Link to={"/"}>
                                <span>start page.</span>
                            </Link>
                        </p>
                    </div>
                </BackPropose>
            </Info>
        </Container>
    )
}

export default NotFound