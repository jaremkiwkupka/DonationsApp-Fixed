export const Pagination = ({ totalFoundations, foundationsPerPage, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalFoundations / foundationsPerPage); i++) {
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