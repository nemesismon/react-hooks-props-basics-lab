import React from "react";

function Links(props) {
return (
    <div id="links">
        <h3>Links
        <a href={props.github}>github</a> 
        <a href={props.linkedin}>linkedin</a>
      </h3>
    </div>
);
}

export default Links;