import github from '../assets/images/mark-github.svg'

export default function Footer() {
    return (
        <footer>
            Made with ❤️ by Kusi
            <span>
                <a href="https://github.com/kofi-kusi/my-travel-journal" target="_blank">
                <img src={github} alt="Github logo" />
                </a>
            </span>
        </footer>
    )
}