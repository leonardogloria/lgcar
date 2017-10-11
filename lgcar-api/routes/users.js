module.exports = app =>{
    var User = app.models.user;
    app.route("/user")
        .get((req,res)=>{
            User.find({})
            .then(docs =>{
                res.status(201).json(docs)
            })
        })
        .post((req,res) =>{
           User.create(req.body)
            .then(contato =>{
                res.status(201).json(contato)
            });
        });

    app.route("/user/:id")
        .get((req,res) =>{
            User.find({'_id':req.params.id})
                .then(doc =>{
                    res.status(201).json(doc)
                })
        })
   

}