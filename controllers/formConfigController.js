const path = require("path");
const fs = require("fs");

const formConfigurations = (req, res) => {
   try {
      const formConfigurationsFilePath = path.join(__dirname, "../data/formConfigurations.json");
      let formConfigurationsData;

      try {
         formConfigurationsData = fs.readFileSync(formConfigurationsFilePath);
         formConfigurationsData = JSON.parse(formConfigurationsData);
      } catch (err) {
         throw new Error("Something went wrong while reading the form configurations file.");
      }

      return res.status(200).send({
         success: true,
         data: {
            formConfigurations: formConfigurationsData,
         },
      });
   } catch (error) {
      console.log("Error occured in formConfigurations: ", error.message);
      return res.status(500).json({
         success: false,
         message: error.message,
      });
   }
}

module.exports = {
   formConfigurations,
}