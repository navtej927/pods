import App from "./app";

const PORT = process.env.PORT || 8000;

App.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});