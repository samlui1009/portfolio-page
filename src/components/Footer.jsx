import './Footer.css';

function Footer() {
    return(
        <footer>
            <div className = "footer">
            <p>
                &copy; {new Date().getFullYear()} Sam Lui
            </p>
            </div>
        </footer>
    );
}   

export default Footer