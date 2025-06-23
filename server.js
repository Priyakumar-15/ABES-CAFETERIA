import dotenv from 'dotenv';
dotenv.config();
import app from "./app.js";
const port = process.env.PORT || 8000;
app.listen(process.env.PORT, ()=>{
    console.log(`Server Running On Port ${process.env.PORT}`);
});

