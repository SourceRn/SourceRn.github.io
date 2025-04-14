import './LinkButton.css';

export default function LinkButton({websiteLink, text}) {
    return (
        <a href={websiteLink} className='link-button' target="_blank" rel="noopener noreferrer">
            {text}
        </a>
    );
}