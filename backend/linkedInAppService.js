//aprasyti metodai

const app = require('./index');
const repository = require('./linkedInRepository');

console.log("File opened!");

app.get('/v1/people/:id',(req,res) => {
    console.log(repository.getAllSavedpersons());
    let person = repository.getpersonById((req.params.id));
    if(person == null) {
        res.status(404).send({
            message: 'Person not found'
        });
        return;
    }
    res.status(200).send(person);
});
