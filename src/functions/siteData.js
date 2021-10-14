import MemorySpace from "../assets/img/Memory-Space.png"
import CrudBuddy from "../assets/img/Crud-Buddy.png"
import NationalParks from "../assets/img/National-Parks.png"
import APOD from "../assets/img/APOD.png"

//siteImage, siteTitle, siteDesc, siteTech
export default function siteData(){
  const memorySpace = {
    siteImage: MemorySpace,
    siteTitle: "Memory Space",
    siteDesc: "A full CRUD web application for posting memories on a public community board. You can call it a 'fancy To-Do list'. Includes a serverless backend. Co-developed with Mekinsie Callahan",
    siteTech: "Javascript, Redux, React, Firebase ",
    siteLink: "https://memoryspace.net/"
  }
  const crudBuddy = {
    siteImage: CrudBuddy,
    siteTitle: "_CRUDBuddy",
    siteDesc: "Created as a capstone for Epicodus. This app can generate a copy-pastable set of code that can be used to generate a full CRUD .NET 5/SQL API. Fum features: includes algorithms to handle capitalizes to be code accurate and searches other entries for the same namespace",
    siteTech: "React, JavaScript, C#(for reference), .NET 5(for reference)",
    siteLink: "https://crudbuddy-47651.firebaseapp.com/"
  }
  const nationalParks = {
    siteImage: NationalParks,
    siteTitle: "National Parks API",
    siteDesc: "etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc ",
    siteTech: "etc etc etc etc ",
    siteLink: "https://github.com/Lo-GR/NationalParksAPI.Solution"
  }
  const apod = {
    siteImage: APOD,
    siteTitle: "Astronomy Picture of the Day",
    siteDesc: "etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc ",
    siteTech: "etc etc etc etc ",
    siteLink: "https://github.com/Lo-GR/apodNASA"
  }
  return {
    memorySpace,
    crudBuddy,
    nationalParks,
    apod
  }
}