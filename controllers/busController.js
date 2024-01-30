const Bus= require("../models/busModel");


const addBus = async (req, res) => {
    const { numberOfSits, licensePlate, company } = req.body;

    try {
        const existingBus = await Bus.findOne({ licensePlate });

        if (existingBus) {
            return res.status(400).json({ message: "Bus already exists" });
        }

        
        const newBus = new Bus({
            numberOfSits,
            licensePlate,
            company
        });

     
        await newBus.save();

        return res.status(201).json(newBus);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addBus
};


const getBuses=async (req,res)=>{

    const buses= await Bus.find();
    return res.json(buses).status(200)
}


const removeBus=async (req,res)=>{

    const {id}= req.params;

    try {
        await Bus.findByIdAndDelete(id)
        return res.status(200).json({message:"Bus successfully deleted"})
    } catch (error) {
        return res.status(400).json({error: error.message})
    }
   

}

 module.exports= {
    addBus,
    getBuses,
    removeBus
 }