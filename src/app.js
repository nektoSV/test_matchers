export default function sortDescending(arr) {
    return arr.sort((a, b) => (b.health - a.health));
  
  }