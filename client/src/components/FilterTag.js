export default function FilterTag({ title, setTag, setFilter, callSearch, setShowTags }) {

    function cancel() {

        setFilter('')
        setTag('')
        callSearch()
        setShowTags(false);

    }
    return (
        <>
            <button className="filter-btn">{title} <span className="filter-x" onClick={cancel}>&#10005; </span></button>
        </>
    )
}