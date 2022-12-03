import "./Button.css";

const Button = ({ variant, label, customClass }) => {
  return <button className={`btn ${variant}`}>{label}</button>;
};

export default Button;
