export default function SearchBar({setSearchInput}) {
    return (
        <div className="searchbar">
            <input type="text" placeholder="Search.."  onChange={(e)=>setSearchInput(e.target.value)}/>
        </div>
    )
}