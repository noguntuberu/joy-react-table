import React, { useState, useEffect } from "react";
import './footer.css';

const Footer = ({ numOfItems, numOfRows, onPageChange }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const [pagesList] = useState(() => {
        let limit = Math.ceil(numOfItems / numOfRows);
        let list = [];
        for (let i = 0; i < limit; i++) {
            list.push(i);
        }
        return list;
    });

    useEffect(() => {
        onPageChange(pageNumber);
    }, [onPageChange, pageNumber]);

    const createButton = (page) => {
        return <button key={page} onClick={() => setPageNumber(() => page)}>
            {page === pageNumber ? <b>{page + 1}</b> : page + 1}
        </button>;
    }

    const determinePageList = () => {
        let visiblePageNumbers = [];
        if (pageNumber === 0 || pageNumber <= 3 || pagesList.length < 6) {
            visiblePageNumbers = pagesList.slice(0, 5)
        } else {
            visiblePageNumbers = pagesList.slice((pageNumber - 2), (pageNumber + 3))
        }

        return visiblePageNumbers.map(createButton);
    }

    const formatFooterMessage = () => {
        const start = pageNumber ? pageNumber * numOfRows + 1 : 1;
        const end = (numOfRows + start) - 1;
        const emptyDataMessage = `No item(s) to display`;
        const nonEmptyDataMessage = `Showing ${start} to ${end > numOfItems ? numOfItems : end} records of ${numOfItems}`;

        return numOfItems ? nonEmptyDataMessage : emptyDataMessage;
    }

    const formatPagination = () => {
        const high = Math.ceil(numOfItems / numOfRows);

        return (
            <div className="rd-pagination">
                {pageNumber > 0 ? <button onClick={() => setPageNumber(pageNumber => pageNumber - 1)}> {'<'} </button> : <button disabled > {'<'} </button>}
                {determinePageList()}
                {pageNumber < high - 1 ? <button onClick={() => setPageNumber(pageNumber => pageNumber + 1)}> {'>'} </button> : <button disabled > {'>'} </button>}
            </div>
        );
    }

    return <div className="rd-footer">
        <small>{formatFooterMessage()} </small>
        {formatPagination()}
    </div>
};

export default Footer;