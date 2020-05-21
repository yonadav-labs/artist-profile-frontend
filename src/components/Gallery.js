import React, {Component} from "react";
import { useRouteMatch } from "react-router-dom";

class Gallery extends Component
{
    constructor(props) {
        super(props);
    }

    render()
    {
        let id =   parseInt(this.props.match.params.id, 10)
        if (!id) {
             throw new Error();
         }

        return (
            <div>sadas</div>
        )
    }
}

export default Gallery