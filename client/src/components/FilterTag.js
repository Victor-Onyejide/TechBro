export default function FilterTag({ title, setTag, setFilter }) {

    function cancel() {

        setFilter('')
        setTag('')

    }
    return (
        <>
            <button className="filter-btn">{title} <span className="filter-x" onClick={cancel}>&#10005; </span></button>
        </>
    )
}