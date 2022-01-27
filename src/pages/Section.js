import React from 'react';
import { useParams } from "react-router-dom";

const Section = () => {
    let params = useParams();
    return <div>{params.slug}</div>;
};

export default Section;
