import React, { useState, useEffect } from "react";
import { generatePageList, formatFooterMessage, formatPagination } from './helper';
import './footer.css';

const Footer = ({ numOfItems, numOfRows, onPageChange }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const [pagesList] = useState(() => generatePageList(numOfItems, numOfRows));

    useEffect(() => {
        onPageChange(pageNumber);
    }, [onPageChange, pageNumber]);

    return <div className="rd-footer">
        <small>{formatFooterMessage(numOfItems, numOfRows, pageNumber)} </small>
        {formatPagination(numOfItems, numOfRows, pagesList, pageNumber, setPageNumber)}
    </div>
};

export default Footer;