import React, { useState, useEffect } from "react";
import { generatePageList, formatFooterMessage, formatPagination } from './helper';
import './footer.css';

const RDFooter = ({ numOfItems, numOfRows, onDataRequest, onPageChange, style }) => {
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

    return <div className="rd-footer" style={style.footer}>
        <small>{formatFooterMessage(numOfItems, numOfRows, pageNumber)} </small>
        {formatPagination(numOfItems, numOfRows, pagesList, pageNumber, setPageNumber)}
    </div>
};

export default RDFooter;