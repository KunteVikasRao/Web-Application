import { useParams } from "react-router-dom"

function Landing() {
    let params = useParams();
  return (
    <>
        <h1>Welcome {params.username} to Ignite Courses</h1>

    </>
  )
}

export default Landing