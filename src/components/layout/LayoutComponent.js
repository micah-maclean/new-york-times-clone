import "./layout.css";

function LayoutComponent({ children }) {
  return (
    <div className="container">
      <div className="layout">{children}</div>
    </div>
  );
}

export default LayoutComponent;
