import React from 'react';
import {Link} from "react-router-dom";

export function About() {
  return (
    <>
    <h1>About</h1>
    <p>
      <Link to='/about/1'>Content 1</Link>
      <Link to='/about/2'>Content 2</Link>
    </p>
    </>
  )
}