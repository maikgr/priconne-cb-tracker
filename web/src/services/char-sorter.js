export function sort(a, b) {
  if (a.tier < b.tier) {
    return -1;
  } else if (a.tier > b.tier) {
    return 1;
  } else {
    if (a._id < b._id) {
      return -1
    } else if (a._id > b._id) {
      return 1;
    }
    return 0;
  }
}