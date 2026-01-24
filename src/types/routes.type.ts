// [
//     [
//     {
//       title: "User  Management",

import { title } from "process";

      
//       items: [
//         {
//           title: "Analytics",
//           url: "/analytics",
//         },
       
//       ],
//     },
    
//       ],

// ]


export interface Route {
    title:string,
    items:{
        title:string,
        url:string;
    }[],
}