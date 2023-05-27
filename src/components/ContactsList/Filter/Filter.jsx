export const Filter = ({value, changeFilter}) => (
    <label>Find contacts by name: <input type="text" value={value} onChange={changeFilter} /></label>
);