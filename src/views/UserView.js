import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

const UserView = (props) => {
const {first_name,last_name,email,avatar}=props.item;
    return (
            <div className='d-flex justify-content-center'>
                <Card className='my-2 shadow'>
                    <CardBody>
                        <CardTitle tag="h5">
                            {first_name}&nbsp;{last_name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {email}
                        </CardSubtitle>
                        <CardText>
                            Some quick example text to build on the card title and make up the bulk of the card's
                            content.
                        </CardText>
                        <img src={avatar} className="rounded" alt="Cinque Terre">image</img>
                    </CardBody>
                </Card>
            </div>
    );
}
export default UserView;