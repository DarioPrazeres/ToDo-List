class Task {
  constructor(name, date) {
    this.name = name;
    this.date = date;
    this.status = false;
  }
  getName() {
    return this.name;
  }
  getDate() {
    return this.date;
  }
  getStatus() {
    return this.status;
  }
  setName(value) {
    this.name = value;
  }
  setDate(value) {
    this.date = value;
  }
  setStatus(value) {
    this.status = value;
  }
}

export default Task;
