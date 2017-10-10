

module.exports = app =>{
    var Car = app.models.car;
   app.route("/cars/:id")
    .get((req,res)=>{
        Car.find({'_id':req.params.id})
        .then(doc =>{
            res.status(200).json(doc)
        });
    });
        
   
    app.route("/cars")
    .get((req,res)=>{
        Car.find({})
        .then(docs =>{
            res.status(200).json(docs);
        });
        
    });

   
};