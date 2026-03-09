import Header from "./Header";
import Footer from "./Footer";
import '../../styles/home.css'

export default function PageWrapper({children}: {children: React.ReactNode}) {
    return (
        <body className="page-wrapper">
            <Header/>
            { children }
            <Footer/>
        </body>
    )
}