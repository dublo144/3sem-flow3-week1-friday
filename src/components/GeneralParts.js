import React from 'react';

const GeneralPart = () => {
    return (
        <>
            <h2>General Part</h2>
            <h4>
                Describe the term Single Page Application and why it has become so popular for
                modern web-applications
            </h4>
            <p>
                A single page application is a web applicaion that only has one page, but
                dynamically rewrites the page with new data. This eliminates full page refreshes,
                and give smoother overall UX. SPA's are fast, due to most resources being loaded
                once through the the lifecycle of the applicaion, and therefore only sends data back
                and forth to the server.
            </p>
            <h4>
                Explain the “recommended” React way of passing data into Components (at the top, or
                at the bottom or..)
            </h4>
            <p>
                The “recommended” way to pass props to Components is down the tree - so from
                container-components to presentational components.
            </p>
            <h4>
                Explain how JavaScript array methods, like filter, map and (reduce) can be used to
                generate dynamic HTML structures (tables, ul's etc.)
            </h4>
            <p>
                The methods can be used to dynamically produce HTML elements like tables and lists.
                The methods can take in the array and the populate the table with tr's for instance.
            </p>
            <h4>
                Explain about the Observer pattern, and where you have used it, both with Java and
                JavaScript.
            </h4>
            <p>
                React in general relies heavily on the Observer pattern. When an subject, for
                instance state, changes it triggers a rerender of all the observer-components.
            </p>
        </>
    );
};

export default GeneralPart;
