import React from "react";
import style from "./Button.module.scss";

export default function ButtonLoadMore({ onClick }) {
    console.log(onClick)
    return (
        <>
            <button
                className={style.button}
                type='button'
                onClick={onClick}
            >Load More</button>
        </>
    )
}