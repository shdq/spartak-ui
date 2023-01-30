const inputStyles: React.CSSProperties = {
  border: "1px solid #cccccc",
  padding: "5px",
  borderRadius: "5px",
};

export const Input = ({ ...props }) => (
  <input style={inputStyles} {...props}></input>
);
