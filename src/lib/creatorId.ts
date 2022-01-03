let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function creatorId() {
  id++;
  return id;
}

export default creatorId;