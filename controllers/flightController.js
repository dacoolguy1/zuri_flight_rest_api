//recall Controllers are responsible for handling incoming requests and returning responses to the client

const {Users} = require("../models/Flight");

const {v4: uuid} = require("uuid");

// Add/Book Flight Feature
// create new passengers
exports.createFlight = async (req, res) => {
    try {
       // const { title, price} = await req.body;
       const {price, title , password} = await req.body;
        const newUser = {
            id: uuid(),
            title, 
            time: new Date().toLocaleTimeString(),
            price,
            date : new Date().toLocaleDateString(),
            
            password,
            

        }
        //user1.id = uuid;

        Users.push(newUser);

        res.status(201).json({
            message: "Your flight has been booked",
            newUser,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//get all Flights
exports.getFlight = async (req, res) => {
    try {
        const passengers = await Users;
        res.status(200).json({
            message: "All Passengers",
            users: passengers,
        }
        );
    } catch (err){
        res.status(500).json({message: err});
    };
}

//get single Flights
exports.getSingleFlight = async(req, res) => {
    try {
        let id = req.params.id
        const users = Users.find((users) => users.id === id);
        res.status(200).json({
            message: "Your Flight has been found found",
            users
        });
    } catch (error) {

    }
}

// Update/Edit Flight

exports.updateFlights = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        const {title, price, password } = await req.body;
        user.title = title;
        user.price = price;
        user.password = password;
        res.status(201).json({
            message: "Your Flight  has been updated",
            user,
        }   
        );
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};;


//Delete Flight
exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        Users.splice(Users.indexOf(user), 1);
        res.status(200).json({
            message: "User deleted",
            user
        });

    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
        
    }
}