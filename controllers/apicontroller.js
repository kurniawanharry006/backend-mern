const Item = require('../models/Item')
const Treasure = require('../models/Activity')
const Traveler = require('../models/Booking')
const Category = require('../models/Category')


module.exports = {
    landingPage:async (req,res)=>{
        try {
            const mostPicked = await Item.find()
            .select('_id title country city price unit imageId')
            .limit(5)
            .populate({path:'imageId', select:'_id imageUrl'})

            const category = await Category.find()
            .select('_id name')
            .limit(3)
            .populate({
                path:'itemId', 
                select:'_id title country city isPopular imageUrl',
                perDocumentLimit:4,
                option:{sort:{sumBooking:-1}},
                populate:{
                    path:'imageId', 
                    select:'_id imageUrl',
                    perDocumentLimit: 1
                }
            })

            const traveler = await Traveler.find();
            const treasure = await Treasure.find()
            const city = await Item.find()

            for(let i=0; i<category.length; i++){
                for(let j=0; j<category[i].itemId.length; j++){
                    const item = await Item.findOne({_id:category[i].itemId[j]._id})
                    item.isPopular = false
                    await item.save()
                        if(category[i].itemId[0] === category[i].itemId[j]){
                            item.isPopular = true
                            await item.save()
                        }
                }
            }

            res.status(200).json({
                hero:{
                    traveler:traveler.length,
                    treasure:treasure.length,
                    cities:city.length 
                },
                mostPicked,
                category
            })

        } catch (error) {
            console.log(error);
            res.status(500).json({message:'Internal server error'})
        }
    }
}