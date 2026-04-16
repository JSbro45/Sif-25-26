import Header from "./Header";
import Footer from "./Footer";
import '../../styles/home.css'

export default function PageWrapper({children}: {children: React.ReactNode}) {
    return (
        <div className="page-wrapper">
            <Header/>
            { children }
            <Footer/>
        </div>
    )
}