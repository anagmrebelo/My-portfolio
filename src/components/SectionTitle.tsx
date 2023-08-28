interface SectionTitleProps {
    text: string;
    nb: number;
}

function SectionTitle({ text, nb }: SectionTitleProps): JSX.Element {
    return (
        <div className="section-title">
            <ol start={nb} className="title-list">
                <li>
                    <span className="title-text">{text}</span>
                </li>
            </ol>
            <hr className="title-line" />
        </div>
    );
}

export { SectionTitle };
