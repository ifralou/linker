import React from 'react';

const CurrentThing = ({thing, startTimer}) => {
    const {name, description, links} = thing
    console.log(thing)

    const openInNewWindow = () => {
        let redirectTo = new URL(document.location.href + "redirect.html");
        links.forEach(({title, url}) => redirectTo.searchParams.append(title, url))
        window.open(redirectTo)
    };

    return (
        <section className={"info-wrapper current-thing-wrapper"}>
            <div className="current-thing-wrapper-header">
                <div className={"current-thing-header"}>
                    <h2 className={"info-header"}>{name}</h2>
                    <div>{description}</div>
                </div>
                <button className={"info-button background-gradient"}
                        onClick={() => startTimer(name)}
                >Start session</button>
            </div>
            <div>
                stats right here
            </div>

            <div>

                <ul className="thing-links-list">
                    {links.map(({title, url}, i) =>
                        <li key={i}>
                            <a key={i} target={"_blank"} href={url}>{title}</a>
                        </li>
                    )}
                </ul>
                <button className={"ex-button"} onClick={openInNewWindow}>
                    expand all in new window
                </button>
            </div>

        </section>
    );
};

export default CurrentThing;