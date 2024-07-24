import React from 'react'

export default function pre(props) {
    return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}