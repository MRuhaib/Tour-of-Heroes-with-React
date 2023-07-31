import useFetch from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Dashboard = () => {
    const {data, isPending, error} = useFetch('http://localhost:8000/heroes')
    let top4 = data.slice(0,4);
    return ( 
    <div className="dashboard">
        <h2>Your top heroes:</h2>
        {top4.map(hero => (
          <div className="hero-preview" key={hero.id} >
            <Link to={`/heroes/${hero.id}`}>
            <h2>{ hero.name }</h2>
            </Link>
          </div>
        ))}
    </div> 
    );
}
 
export default Dashboard;