function placeOrder(callback){
    setTimeout(()=>{
        console.log("1. order is placed")
        return callback ()
    },1000)
}


function makePayment(callback){
    setTimeout(()=>{
        console.log("2. payment is done")
        return callback()
    },1000)
}

function orderConfirmed(callback){
    setTimeout(()=>{
        console.log("3. order is confirmed")
        return callback()
    },1000)
}


function assignDeliveryPartner(callback){
    setTimeout(()=>{
        console.log("4. Delivery partner is assigned")
        return callback()
    },1000)
}

placeOrder(function(){
    makePayment(function(){
        orderConfirmed(function(){
            assignDeliveryPartner(function(){
                console.log("5. order is delivered")
            })
        })
    })
})