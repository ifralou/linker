import React from 'react';

const CurrentThing = ({thing}) => {
    const {name, description, links} = thing
    console.log(thing)

    const openInNewWindow = () => {
        let redirectTo = new URL(document.location.href + "redirect.html");
        links.forEach(({title, url}) => redirectTo.searchParams.append(title, url))
        window.open(redirectTo)
    };

    return (
        <section className={"info-wrapper"}>
            <div className={"info-wrapper background-gradient"}>
                <h2 className={"info-header"}>{name}</h2>
                <div>{description}</div>
            </div>
            <div>
                stats right here
            </div>
            <div>
                <button onClick={openInNewWindow}>
                    expand all in new window
                </button>
                <ul>
                    {links.map( ({title, url}, i) =>
                        <li key={i}>
                            <a key={i} target={"_blank"} href={url}>{title}</a>
                        </li>
                    )}
                </ul>
            </div>
        </section>
    );
};

export default CurrentThing;