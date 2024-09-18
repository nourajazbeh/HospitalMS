export const catchAsyncErrors = (theFunction) => {
  return (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch(next);
  };
};
