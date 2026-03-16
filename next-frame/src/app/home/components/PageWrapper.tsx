import Header from "./Header";
import Footer from "./Footer";
import '../../styles/home.css'

export default function PageWrapper({children}: {children: React.ReactNode}) {
    return (
        <body >
            <Header/>
            { children }
            <Footer/>
        </body>
    )
}