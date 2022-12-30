export const Message = ({ children, type }) => {
  return <p className={`alert ${type}`}>{children}</p>;
};
