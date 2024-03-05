const ErrorComponent = ({ error, resetErrorBoundary }) => {
  if (error === undefined) {
    return <div>알 수 없는 오류 발생</div>;
  }
  return (
    <div>
      {error.message}
      <img src={`https://http.cat/${error.status}`} alt="err img" />
      <button onClick={resetErrorBoundary}>{error.message} 발생</button>
    </div>
  );
};

export default ErrorComponent;
