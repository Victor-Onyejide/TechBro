export default function FilterTag ({title}) {

    return (
        <>
        <button className="filter-btn">{title} <span className="filter-x" >&#10005; </span></button>
        </>
    )
}