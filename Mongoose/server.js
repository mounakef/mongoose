const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PersonDb', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
const PersonSchema = new mongoose.Schema({
name:{
    type:String,
required:true},
age:Number,
favoriteFoods:{type:[String],
    default: undefined,
}

});

const Person = mongoose.model('person', PersonSchema);
// create new instance from model person
/*const person= new Person ({name:"mouna fila" ,
age :50,
favoriteFoods:["lablabi","hendi mgacher","l7am rass"] });
person.save(function(err,data){
 if(err){
     console.log(err)
 }
 else {
     console.log(data)
 }
});*/
// many records with model.create()
Person.insertMany([{name:"mouna courtoise" ,
age :72,
favoriteFoods:["mbakbka","karmous","bou5a"] },
{name:"mouna frera" ,
age :50,
favoriteFoods:["legmi","3ssida"] }
],function(err,data){
    if(err){
        console.log(err)
    }
    else {
        console.log(data)
    }
   });
   /*Person.find(function(err,data){
    if(err){
        console.log(err)
    }
    else {
        console.log(data)
    }
   })*/
   /*Person.findOne({name:'mouna'},function(err,data){
    if(err){
        console.log(err)
    }
    else {
        console.log(data)
    }
   })*/
   
   /*Person.findById('610f0d3cdc023b4d645ed873',function(err,data){
    if(err){
        console.log(err)
    }
    else {
        console.log(data)
    }
   })*/
   /*Person.findOne({_id:'610f0d3cdc023b4d645ed873'},function(err,data){
       data.name=data.name;
       data.age=data.age;
       data.favoriteFoods={...data.favoriteFoods,favoriteFoods.push('humberger')};
       data.save(function(error){
           if (error){
               console.log(error)
           }
           else {
               console.log(data)
           }
       })*/
      /*const foodToAdd = 'hamburger';
        Person.findById('610f110ff4615652240b8b2b', function(err, data) {
          data.favoriteFoods.push(foodToAdd);
          data.save();
          if (err) {
         console.log(err);
          }
          else {
            console.log(data);
          }
        });*/
        /*Person.findOneAndUpdate({name:'mouna fila'},{$set:{age:20}},{new : true},function(err,data){
            if(err){
                console.log(err)
            }
            else {
                console.log(data)
            }})*/
            /*Person.findByIdAndRemove('610f0d3cdc023b4d645ed873', function(err,data){
                if(err){
                    console.log(err)
                }
                else {
                    console.log('data removed')
                }})*/
            
               /*const res = Person.deleteOne({ name: 'mouna frera' },(err,res)=>{
                    if (err) {
                      console.log('this name not found')
                    } else {
                      console.log("people removed : ", res.deletedCount) 
                    }
                  });*/
                  /* Person.remove({ name: 'mouna' },(err,res)=>{
                    if (err) {
                      console.log('this name not found')
                    } else {
                      console.log("people removed : ", res.deletedCount) 
                    }
                  });*/

                  /*Person.find({favoriteFoods:"bou5a"})                  
                  .limit(10)                
                  .sort({name: 1})            
                  .select("-age") 
                  .exec()                   
                  .then(data => {
                     console.log(data)
                   })
                  .catch(err => {
                     console.error(err)
                   })*/
