import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const dataArray = [
    { data_id: 1, option: 'Option 1', field1: 'Value for Option 1 - Field 1', field2: 'Value for Option 1 - Field 2' },
    { data_id: 2, option: 'Option 2', field1: 'Value for Option 2 - Field 1', field2: 'Value for Option 2 - Field 2' },
    { data_id: 3, option: 'Option 3', field1: 'Value for Option 3 - Field 1', field2: 'Value for Option 3 - Field 2' }
  ];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.render("index.ejs",{dataArray})
})

app.get("/getdropdowndata", (req,res)=>{

    const selectedOption = req.query.selectedOption;

  // Find the corresponding data based on the selected option
  const selectedData = dataArray.find(item => item.option === selectedOption);

  if (selectedData) {
    res.json({ field1: selectedData.field1, field2: selectedData.field2 });
  } else {
    res.status(404).json({ error: 'Data not found' });
  }

})






app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });