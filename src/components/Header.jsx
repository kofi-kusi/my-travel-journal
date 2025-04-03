import globe from "../assets/images/globe.png"
export default function Header() {
    return (
        <header>
            <img src={globe} alt="Globe image" />
            <h1>my travel journal</h1>
        </header>
    )
}