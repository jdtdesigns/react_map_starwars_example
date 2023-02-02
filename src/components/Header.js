function Header(props) {
  return (
    <header>
      <h3>{props.title}</h3>
      <div className="count-controls">
        {/* 
          Add the onClick attribute/prop to the two buttons 
          and use setCount from the props object to set the state
          count variable appropriately 
          -- Remember that you should not pass an assignment operator
        */}
        <button>Increase Count</button>
        <button>Decrease Count</button>
      </div>
    </header>
  )
}

export default Header;