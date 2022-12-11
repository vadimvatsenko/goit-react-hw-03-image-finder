import React from "react";
import ErrorImg from '../../img/404.svg'

export default function Error() {
    return (
        <div role='error message'>
            <img src={ErrorImg } />
        </div>
    )
}