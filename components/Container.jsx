import Navigation from "./Navigation"
import Head from "next/head"

const Container = ({children}) => {
    return (
        <div>
        <Head>
            <title>Next Fazt</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cerulean/bootstrap.min.css"/>
        </Head>              
          <Navigation/>
            <div className="container p-4">
                {children}
            </div>
        </div>
    )
}

export default Container
