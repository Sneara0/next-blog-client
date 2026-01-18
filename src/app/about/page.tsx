export default async function HomePage(){

    await new Promise((resolve)=>setTimeout(resolve,4000))


    throw new Error("something went wrong")
return(
    <div>This is home component</div>
)
}