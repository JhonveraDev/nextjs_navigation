import Container from "../components/Container"
import Head from 'next/head'
import fetch from 'isomorphic-fetch'
import Users from "../components/Users"

const index = (props) => {
  console.log(props)  
  return (
      <Container>
        <Head>
          <title>Next Fazt - Home</title>
        </Head>
        <h1>Index</h1>
        <Users DataUsers={props.users}/>
      </Container>
    );
}

index.getInitialProps = async (ctx)=>{
  const rest = await fetch('https://reqres.in/api/users')
  const resJSON = await rest.json();
  return {users: resJSON.data}
}

export default index
