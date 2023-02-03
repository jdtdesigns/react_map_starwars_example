function Character(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Birth Year: {props.birth_year}</p>
      <p>Eye Color: {props.eye_color}</p>
    </div>
  )
}

export default Character;