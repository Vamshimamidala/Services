let express = require("express");
require("./dbconnections/dbConnection");
let cors=require("cors");
const singupRouting = require("./router/signupRoting");
const addcaterogyRouting = require("./router/addcaterogyRouting");
const addofferRouting = require("./router/addofferRouting");
const subcaterogyRouting = require("./router/subcatRouting");
const serviceRouting = require("./router/serviceRouting");
const feedbackRouting = require("./router/feedbackRouting");
const servicefeedRouting = require("./router/servicefeedRouting");
let app = express();
app.use(express.json());
app.use(cors());
app.use("/sigup",singupRouting);
app.use("/addcat",addcaterogyRouting)
app.use("/addoffer",addofferRouting)
app.use("/subcat",subcaterogyRouting);
app.use("/service",serviceRouting)
app.use("/feedback",feedbackRouting);
app.use("/servicefeed",servicefeedRouting)
app.listen(4000,()=>{
    console.log("server started")
})

