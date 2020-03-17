import Link from 'next/link';

export default function Header({ children }) {
    
    return (
        <>
            <div className="banner">

            <div className="name">
                <h1>Farai Matangira</h1>
            </div>

            <ul className="navbar">
                <li><Link href="/"><a>About</a></Link></li>
                <li className="dividers">|</li>
                <li><Link href="/portfolio"><a>Portfolio</a></Link></li>
                <li className="dividers">|</li>
                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>

            </div>

            <hr className="shadow"></hr>

            {children}

        </>
    )
}