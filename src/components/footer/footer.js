import React, { useState, useEffect } from "react";
import { generatePageList, formatFooterMessage, formatPagination } from './helper';
import './footer.css';

const Footer = ({ numOfItems, numOfRows, onDataRequest, onPageChange }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const [pagesList] = useState(() => generatePageList(numOfItems, numOfRows));

    useEffect(() => {
        onPageChange(pageNumber);
    }, [onPageChange, pageNumber]);

    useEffect(() => {
        if(pageNumber < pagesList.length - 2) return;
        onDataRequest(() => true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNumber, pagesList]);

    return <div className="rd-footer">
        <small>{formatFooterMessage(numOfItems, numOfRows, pageNumber)} </small>
        {formatPagination(numOfItems, numOfRows, pagesList, pageNumber, setPageNumber)}
    </div>
};

export default Footer;