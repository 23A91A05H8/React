import React,{useEffect , useState} from 'react';
import {useParams} from 'react-router-dom';
import IMG from "./assets/react.svg"
function ProductInfo() {
    const Data = [
        {
        Name : "card1",
        Price: '200',
        Brand : 'US Polo',
        },
         {
        Name : "card2",
        Price: '400',
        Brand : 'Rare Rabbit',
        },
         {
        Name : "card3",
        Price: '600',
        Brand : 'Reliance',
        },
        {
        Name : "card4",
        Price: '800',
        Brand : 'Prisma',
        },


    ]
    const ReceivedData = useParams();
    console.log(ReceivedData)
    const [mycard, setmycard] = useState(null)
    useEffect(()=>{
        Data.filter(ele = {
            if(ele.ID == parseInt(ReceivedData.ID)){
                setmycard(ele);
            }
        })
    })
}