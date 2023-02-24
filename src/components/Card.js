function Card(props) {
    const { value, className, name } = props;

    return (<button value={value} className="hvr-pulse"><div className={className}></div><span>{name}</span></button>)
}

export default Card;

export const cards = [{ name: "red", className: "red", id: 1 },
{ name: "Blue", className: "blue", id: 2 },
{ name: "Yellow", className: "yellow", id: 3 },
{ name: "Black", className: "black", id: 4 },
{ name: "Green", className: "green", id: 5 },
{ name: "Purple", className: "purple", id: 6 },
{ name: "Orange", className: "orange", id: 7 },
{ name: "Light Blue", className: "light-blue", id: 8 },
{ name: "Petrol", className: "petrol", id: 9 },
{ name: "Pink", className: "pink", id: 10 },
{ name: "Light green", className: "light-green", id: 11 },
{ name: "Sand", className: "sand", id: 12 }]