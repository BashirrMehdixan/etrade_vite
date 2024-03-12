const FilterCard = ({data, type}) => {
    return (
        <>
            <li>
                <label className="custom-radio">
                    <input type="radio" name={type}/>
                    <span className="checkmark"></span>
                    <span className="cat-name">{data}</span>
                </label>
            </li>
        </>
    )
}

export default FilterCard;