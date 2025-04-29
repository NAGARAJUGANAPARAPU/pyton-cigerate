import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  const handleNavigation = (condition) => {
    if (condition) {
      navigate("/reporting");
       // navigate to the main page
    } else {
      ;
    }
  };

  return (
    <div>
      <h1>This is My Component</h1>
      <button
        className="return-reporting"
        onClick={() => handleNavigation(true)}
      >
        Repoting
      </button>
    </div>
  );
}

export default MyComponent;
