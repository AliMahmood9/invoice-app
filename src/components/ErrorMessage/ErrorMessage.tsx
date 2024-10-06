import styles from "./ErrorMessage.module.scss";

type ErrorMessageProps = {
  errorMessage?: string;
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  errorMessage = "An error occurred",
}) => {
  return <p className={styles.errorMessage}>{errorMessage}</p>;
};
