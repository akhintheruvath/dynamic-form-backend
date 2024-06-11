const express = require("express");
const logger = require('morgan');
const cors = require('cors');
const formConfigRoutes = require("./routes/formConfigRoutes");
const app = express();
const PORT = 8000;

app.use(logger('dev'));
app.use(cors());
app.use("/api", formConfigRoutes);

app.listen(PORT, () => {
   console.log(`Server started on port ${PORT}`);
});