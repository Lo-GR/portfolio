import MemorySpace from "../assets/img/Memory-Space.png"
import CrudBuddy from "../assets/img/Crud-Buddy.png"
import NationalParks from "../assets/img/National-Parks.png"
import APOD from "../assets/img/APOD.png"

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
    siteDesc: "Created as a capstone for Epicodus. This app can generate a copy-pastable set of code that can be used to generate a full CRUD .NET 5/SQL API. Fun features: includes algorithms that capitalizes inputs to be code accurate and searches other entries for the same namespace",
    siteTech: "React, JavaScript, C#(for reference), .NET 5(for reference)",
    siteLink: "https://crudbuddy-47651.firebaseapp.com/"
  }
  const nationalParks = {
    siteImage: NationalParks,
    siteTitle: "National Parks API",
    siteDesc: "A REST API for tracking States and Parks. This was created as a relational database practice. Designed with a one to many relationship in mind and includes all API vowel endpoints. Interfaces with a SQL database. The image is a UI of Swagger that displays endpoint information and not a UI I designed",
    siteTech: "C#, ASP.NET 5, SQL, Workbench, APIs, SQL",
    siteLink: "https://github.com/Lo-GR/NationalParksAPI.Solution"
  }
  const apod = {
    siteImage: APOD,
    siteTitle: "Astronomy Picture of the Day",
    siteDesc: "An older project used for async and API practice. Using NASA's Astronomy Picture of the Day API, this app will query then pull pictures and information from NASA and display them to the user. Includes multiple query parameters for difference types of searches. Co developed with Ash Porter",
    siteTech: "JavaScript, JQuery, APIs",
    siteLink: "https://github.com/Lo-GR/apodNASA"
  }
  const apod2 = {
    siteImage: APOD2,
    siteTitle: "Astronomy Picture of the Day (React vr.)",
    siteDesc: "WIP: Using NASA's Astronomy Picture of the Day API, this app will query then pull pictures and information from NASA and display them to the user. A remake of a previous project built in JQuery",
    siteTech: "JavaScript, React, APIs, Tailwind",
    siteLink: "https://github.com/Lo-GR/apod"
  }
  return {
    memorySpace,
    crudBuddy,
    nationalParks,
    apod
  }
}