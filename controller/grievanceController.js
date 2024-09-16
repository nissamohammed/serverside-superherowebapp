const complaints = require("../modal/grievanceModel")

//addcomplaint
exports.addComplaintController =async(req,res)=>{
    console.log('inside the complaint submission controller');
    const {fullName,email,character,complaint,urgency,response} = req.body

try{
        const newComplaint = new complaints({
            fullName, 
            email,
            character,
            complaint,
            urgency,
            response
        })
        //save()-to store the data in mongodb
        await newComplaint.save()
        res.status(200).json(newComplaint)
    

}catch(error){
    //client side error-401
    res.status(401).json(`Complaint submission failed due to ${error}`)
}

}

//get all complaints
exports.getAllComplaintsController = async(req,res)=>{
     console.log(req);
    try{
        //to get all complaints
        const allcomplaints = await complaints.find()
        if (allcomplaints) {
            res.status(200).json(allcomplaints)
        } else {
            res.status(406).json('No Projects')
        }

    } catch (error) {
        res.status(401).json(error)
    }
}