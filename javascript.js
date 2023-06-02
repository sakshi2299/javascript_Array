//Remove duplicates by id
const colorsArray = [
  { id: 1, name: "red" },
  { id: 2, name: "yellow" },
  { id: 2, name: "green" },
  { id: 3, name: "brown" },
  { id: 4, name: "gray" },
  { id: 5, name: "white" },
  { id: 5, name: "red" },
  { id: 6, name: "black" },
];
const AddUniqueId = [];
const uniqueId = colorsArray.filter((element) => {
  const duplicateId = AddUniqueId.includes(element.id);
  if (!duplicateId) {
    AddUniqueId.push(element.id);
    return 1;
  }
  return 0;
});
console.log(uniqueId);
//Remove duplicates by name
const colorsArray2 = [
  { id: 1, name: "red" },
  { id: 2, name: "yellow" },
  { id: 2, name: "green" },
  { id: 3, name: "brown" },
  { id: 4, name: "gray" },
  { id: 5, name: "white" },
  { id: 5, name: "red" },
  { id: 6, name: "black" },
];

const AddUniqueName = [];
const uniqueName = colorsArray2.filter((element) => {
  const duplicateName = AddUniqueName.includes(element.name);
  if (!duplicateName) {
    AddUniqueName.push(element.name);
    return 1;
  }
  return 0;
});
console.log(uniqueName);
//Delete the color with name "green"
const colorsArray3 = [
  { id: 1, name: "red" },
  { id: 2, name: "yellow" },
  { id: 2, name: "green" },
  { id: 3, name: "brown" },
  { id: 4, name: "gray" },
  { id: 5, name: "white" },
  { id: 5, name: "red" },
  { id: 6, name: "black" },
];
const new_array = colorsArray3.filter((element) => {
  return element.name !== "green";
});
//Add color purple at the beginning
console.log(new_array);
const colorsArray4 = [
  { id: 1, name: "red" },
  { id: 2, name: "yellow" },
  { id: 2, name: "green" },
  { id: 3, name: "brown" },
  { id: 4, name: "gray" },
  { id: 5, name: "white" },
  { id: 5, name: "red" },
  { id: 6, name: "black" },
];

colorsArray4.unshift({ id: 1, name: "purple" });
console.log(colorsArray4);
