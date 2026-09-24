"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
    let user = await User.findOne({username: to_username})
    const key_id = process.env.NEXT_PUBLIC_KEY_ID || process.env.RAZORPAY_KEY_ID || process.env.KEY_ID || user?.razorpayid
    const secret = process.env.KEY_SECRET || process.env.RAZORPAY_KEY_SECRET || user?.razorpaysecret

    if (!key_id || !secret) {
        throw new Error("Razorpay credentials are not configured in .env.local or user profile")
    }

    var instance = new Razorpay({ key_id: key_id, key_secret: secret })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }

    let x = await instance.orders.create(options)

    // create a payment object which shows a pending payment in the database
    const payerName = paymentform?.name && paymentform.name.trim() !== "" ? paymentform.name : "Anonymous"
    await Payment.create({
        oid: x.id,
        amount: amount / 100,
        to_user: to_username,
        name: payerName,
        message: paymentform?.message || ""
    })

    return x

}


export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username: username })
    if (!u) return null
    let user = u.toObject({ flattenObjectIds: true })
    return user
}

export const fetchpayments = async (username) => {
    await connectDb()
    // find all payments sorted by decreasing order of amount and flatten object ids
    let p = await Payment.find({ to_user: username, done:true }).sort({ amount: -1 }).limit(10).lean()
    return p.map(payment => ({ ...payment, _id: payment._id.toString() }))
}

export const updateProfile = async (data, oldusername) => {
    await connectDb()
    let ndata = Object.fromEntries(data)

    // If the username is being updated, check if username is available
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "Username already exists" }
        }   
        await User.updateOne({email: ndata.email}, ndata)
        // Now update all the usernames in the Payments table 
        await Payment.updateMany({to_user: oldusername}, {to_user: ndata.username})
        
    }
    else{

        
        await User.updateOne({email: ndata.email}, ndata)
    }


}