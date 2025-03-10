export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      message: err.message || "Internal Server Error",
    });
  };
  
  // Middleware to handle 404 errors
  export const notFoundHandler = (req, res, next) => {
    res.status(404).json({ message: "Resource Not Found" });
  };
  