export const Pagination = ({ total, perPage, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(total / perPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="who-we-help-pagination">
            {pageNumbers.map(number => (
                <div className="who-we-help-pagination--page" onClick={() => paginate(number)}>{number}</div>
            ))}
        </div>
    )
}