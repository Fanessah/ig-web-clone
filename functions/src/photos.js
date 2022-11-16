import dbConnect from "./dbConnect.js";

export async function getAllPhotos(req, res) {
    const db = dbConnect();
    const collection = await db.collection('photos').get()
    const photos = collection.docs.map(doc => ({ ...doc.data(), photoId: doc.id }));

}

export async function addAllPhotos(req, res) {
    const newPhoto = req.body;
    const db = dbConnect();
     await db.collection('photos').add(newPhoto);
     getAllPhotos(req,res)
    

}