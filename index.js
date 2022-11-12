const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    return all.filter((item) => {
      return item.dueDate <= YESTERDAY && item.completed === false;
    });
  };

  const dueToday = () => {
    return all.filter((item) => {
      return item.dueDate === TODAY;
    });
  };

  const dueLater = () => {
    return all.filter((item) => {
      return item.dueDate === TOMORROW;
    });
  };

  const toDisplayableList = (list) => {
    let mylist = [];
    list.forEach((item) => {
      if (item.dueDate === TODAY) {
        if (item.completed === true) {
          mylist.push(`[x] ${item.title}`);
        } else {
          mylist.push(`[ ] ${item.title}`);
        }
      } else {
        if (item.completed === true) {
          mylist.push(`[x] ${item.title} ${item.dueDate}`);
        } else {
          mylist.push(`[ ] ${item.title} ${item.dueDate}`);
        }
      }
    });
    return mylist.join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};
//$$BEAWARE OF CHANGE ANYTHING$$//

const todos = todoList();

const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const TODAY = formattedDate(dateToday);
const YESTERDAY = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const TOMORROW = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

todos.add({ title: "Submit assignment", dueDate: YESTERDAY, completed: false });
todos.add({ title: "Pay rent", dueDate: TODAY, completed: true });
todos.add({ title: "Service Vehicle", dueDate: TODAY, completed: false });
todos.add({ title: "File taxes", dueDate: TOMORROW, completed: false });
todos.add({ title: "Pay electric bill", dueDate: TOMORROW, completed: false });

console.log("My Todo-list\n\n");

console.log("Overdue");
var overdues = todos.overdue();
var formattedOverdues = todos.toDisplayableList(overdues);
console.log(formattedOverdues);
console.log("\n\n");

console.log("Due Today");
let itemsDueToday = todos.dueToday();
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
console.log(formattedItemsDueToday);
console.log("\n\n");

console.log("Due Later");
let itemsDueLater = todos.dueLater();
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
console.log(formattedItemsDueLater);
console.log("\n\n");
