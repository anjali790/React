export const ColorItem = ({ color, setColor }) => 
<div className="color-item" style={{ '--bg-clr': color }} onClick={setColor}></div>