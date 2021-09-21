interface IAlertProps {
  type: "error";
  title: string;
  description: string;
}

const Alert: React.FC<IAlertProps> = ({ title, description }) => {
  return (
    <div className="bg-red-100 text-red-700 rounded-md px-4 py-3 " role="alert">
      <p className="font-medium text-left">{title}</p>
      <p className="text-sm my-2">{description}</p>
    </div>
  );
};

export default Alert;
