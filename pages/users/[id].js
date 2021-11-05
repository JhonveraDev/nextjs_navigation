import { useRouter } from "next/dist/client/router"
import fetch from "isomorphic-fetch";
import Container from "../../components/Container";
const userProfile = (props) => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            <Container className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center" >
                            <img src={props.user.avatar} alt={props.user.last_name} style={{borderRadius:'50%'}}></img>
                        </div>
                        <div className="card-body text-center">
                            <h3>
                                {props.user.id} {props.user.first_name}{props.user.last_name}
                            </h3>
                            <p>Email: {props.user.email}</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

userProfile.getInitialProps = async(ctx)=>{
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
    const resJSON = await res.json();
    return {user: resJSON.data}
}

export default userProfile
