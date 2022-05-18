
import "./Card.css";


const GithubCard = ({ owner, name, forks_count, size, updated_at, score, stargazers_count , full_name }) => {
    return (
        <div className="container">

            <div> <img style={{ width: "50px", borderRadius: "20px" }} src={owner.avatar_url} alt="" /></div>

            <div className="box">

                <div style={{ fontWeight: "bold", color: "tomato" }}>{owner.login}</div>

                <div>Login : {name}</div>

                <div>Repo : <span style={{color:"blue"}}> {full_name}</span></div>

                <div> Forks : {forks_count}</div>
       

                <div> Size : {size}</div>

                <div> updated_at : {updated_at}</div>

                <div>Stars : {stargazers_count}</div>

                <div>Score: {score}</div>

            </div>

        </div>
    )
}

export default GithubCard;