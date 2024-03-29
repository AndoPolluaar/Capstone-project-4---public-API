
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/", async (req, res) => {  
    try {
      
      const result = await axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=json");
      
      res.render("index.ejs", {
        insult: result.data.insult,
        
      });
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
      };
    });
  


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
