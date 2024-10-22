/**
 * Create a Backpack object.
 */

const deskDrawer = {
  color: "grey", 
  numDrawers: 3,
  lock: true,
  pens: 3,
  mice: 2,
  pencilPouch:  {
    sunblock: true,
    batteries: 3, 
    color: "blue"
  }
}

console.log("Color of Desk:", deskDrawer.color)
console.log("Number of Desk Drawers:", deskDrawer.numDrawers)
console.log("How many batteries in the pencil pouch??", deskDrawer.pencilPouch.batteries)

console.log("Is there a lock on the desk?", deskDrawer["lock"])
console.log("How many mice?", deskDrawer["mice"])
console.log("What color of pencil pouch?", deskDrawer["pencilPouch"]["color"])

console.log("How many mice do you have to use?", deskDrawer.mice)
console.log("Is the drawer locked:", deskDrawer.lock, " And there are", deskDrawer.numDrawers, "mice.")
console.log("Is there sunblock?",deskDrawer["pencilPouch"]["sunblock"])