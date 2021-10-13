import MemorySpace from "../assets/img/Memory-Space.png"
import CrudBuddy from "../assets/img/Crud-Buddy.png"
import NationalParks from "../assets/img/National-Parks.png"

//siteImage, siteTitle, siteDesc, siteTech
export default function siteData(){
  const memorySpace = {
    siteImage: MemorySpace,
    siteTitle: "Memory Space",
    siteDesc: "etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc ",
    siteTech: "etc etc etc etc ",
    siteLink: "https://memoryspace.net/"
  }
  const crudBuddy = {
    siteImage: CrudBuddy,
    siteTitle: "_CRUDBuddy",
    siteDesc: "etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc ",
    siteTech: "etc etc etc etc ",
    siteLink: "https://crudbuddy-47651.firebaseapp.com/"
  }
  const nationalParks = {
    siteImage: NationalParks,
    siteTitle: "National Parks API",
    siteDesc: "etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc etc ",
    siteTech: "etc etc etc etc ",
    siteLink: "https://github.com/Lo-GR/NationalParksAPI.Solution"
  }
  return {
    memorySpace,
    crudBuddy,
    nationalParks
  }
}