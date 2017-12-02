const express = require("express");
const soap = require("soap");

const router = express.Router();

const url = "http://www.dneonline.com/calculator.asmx?WSDL";

var args = {
    intA: 2,
    intB: 4
};

router.get("/", (req,res)=>{
     
    soap.createClient(url, function(err, client) {
        if(err) console.log(err);
            client.Add(args,function(err, result) {
                
                if(err) console.log(err);
                    res.json(result);
      });
     });
});

module.exports = router;