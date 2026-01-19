'use client'

export const dynamic='force-dynamic'


export default async function HomePage(){
    //? For simulating load time
     await new Promise((resolve)=>setTimeout(resolve,4000))

     //?  For simulating error
    //* throw new Error("something went wrong")
return(
    <div>This is home component</div>
)
}