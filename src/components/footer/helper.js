/** */
const createButton = (page, pageNumber, callback) => {
    return <button key={page} onClick={() => callback(() => page)}>
        {page === pageNumber ? <b>{page + 1}</b> : page + 1}
    </button>;
}

const determinePageList = (pagesList, pageNumber, callback) => {
    let visiblePageNumbers = [];
    if (pageNumber === 0 || pageNumber <= 3 || pagesList.length < 6) {
        visiblePageNumbers = pagesList.slice(0, 5)
    } else {
        visiblePageNumbers = pagesList.slice((pageNumber - 2), (pageNumber + 3))
    }

    return visiblePageNumbers.map(page => createButton(page, pageNumber, callback));
}

export const generatePageList = (numOfItems, numOfRows) => {
    let limit = Math.ceil(numOfItems / numOfRows);
    let list = [];
    for (let i = 0; i < limit; i++) {
        list.push(i);
    }
    return list;
}

export const formatFooterMessage = (numOfItems, numOfRows, pageNumber) => {
    const start = pageNumber ? pageNumber * numOfRows + 1 : 1;
    const end = (numOfRows + start) - 1;
    const emptyDataMessage = `No item(s) to display`;
    const nonEmptyDataMessage = `Showing ${start} to ${end > numOfItems ? numOfItems : end} records of ${numOfItems}`;

    return numOfItems ? nonEmptyDataMessage : emptyDataMessage;
}

export const formatPagination = (numOfItems, numOfRows, pagesList, pageNumber, callback) => {
    const high = Math.ceil(numOfItems / numOfRows);

    return (
        <div className="rd-pagination">
            {pageNumber > 0 ? <button onClick={() => callback(pageNumber => pageNumber - 1)}> {'<'} </button> : <button disabled > {'<'} </button>}
            {determinePageList(pagesList, pageNumber, callback)}
            {pageNumber < high - 1 ? <button onClick={() => callback(pageNumber => pageNumber + 1)}> {'>'} </button> : <button disabled > {'>'} </button>}
        </div>
    );
}