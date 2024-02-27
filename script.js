// 1.Todo List Application:Create a ToDo List application using OOP principles. Design classes for Task, ToDoList, and TaskManager. 
// The Task class should represent individual tasks with properties like taskName, dueDate, and isCompleted. 
// The ToDoList class should manage an array of Task objects and provide methods to add, remove, and update tasks. 
// The TaskManager class should handle the interaction between the UI and the ToDoList, allowing users to create, delete, and mark tasks as completed. 
// Implement methods to store/retrieve tasks using Local Storage for persistence.


// class Task {
//     constructor(taskName, dueDate,isCompleted) {
//       this.taskName = taskName;
//       this.dueDate = dueDate;
//       this.isCompleted = isCompleted;
//     }
// }


// class ToDoList {
//     constructor(tasks) {
//         this.tasks=tasks;
//     }

//     addTask(task) {
//         this.tasks.push(task)
//     }

//     removeTask(removeIndex) {
//         this.tasks.splice(removeIndex, 1);
//     }

//     updateTask(updateIndex,newValue) {
//         if (!(newValue instanceof Task)) {
//             throw new Error('newValue must be an instance of Task');
//         }
//         let task=this.tasks[updateIndex]
//         task.taskName=newValue.taskName;
//         task.dueDate=newValue.dueDate;
//         task.isCompleted=newValue.isCompleted;
//     }

    

// }


// class TaskManager {
//     constructor(todolist) {
//         this.todolist=todolist;
//     }
//     createTask(name,date,isCompleted) {
//         this.todolist.addTask(new Task(name,date,isCompleted))
//     }
//     deleteTask(removeIndex) {
//         this.todolist.removeTask(removeIndex)
//     }
//     markTaskAsCompleted(updateIndex,updateName,updateDate,updateIsCompleted) {
//         this.todolist.updateTask(updateIndex,new Task(updateName,updateDate,updateIsCompleted))
//     }
//     displayAllTasks() {
//         console.log(this.todolist.tasks)
//     }
// }



// let taskmanager=new TaskManager(new ToDoList([]))
// taskmanager.todolist.addTask("Sport",new Date(),false)
// taskmanager.displayAllTasks()
// taskmanager.todolist.removeTask(0)
// taskmanager.displayAllTasks()











// 2.Game Character Creation:Develop a simple game character creation system using OOP. 
// Design classes for Character, Player, and Enemy. The Character class should have properties like name, health, and attackPower. 
// The Player class should represent the user-controlled character with methods for attacking enemies and managing health. 
// The Enemy class should represent computer-controlled enemies with AI behavior for attacking the player. 
// Implement methods for combat resolution and game progression.


// class Character {
//     constructor(name, health,attack) {
//         this.name = name;
//         this.health = health;
//         this.attack = attack;
//     }
// }



// class Player extends Character {
//     attackEnemy(enemy) {
//         enemy.health-=this.attack;
//     }
//     manageHealth() {
//         console.log(this.health)
//     }
// }


// class Enemy extends Character {
//     attackPlayer(enemy) {
//         enemy.health-=this.attack;
//     }
// }

// let A = new Player("Rustem",100,20);
// let B = new Enemy("Hesen",100,5);
// A.attackEnemy(B)
// B.attackPlayer(A)
// A.manageHealth()








// 3.Product Inventory Management:Create a product inventory management system using OOP principles. 
// Design classes for Product, Inventory, and Warehouse. The Product class should represent individual products with properties like name, price, quantity, etc. 
// The Inventory class should manage an array of Product objects and provide methods for adding, removing, and updating product details. 
// The Warehouse class should handle interactions between the inventory and suppliers/customers, allowing for stock replenishment, 
// order processing, and tracking of product availability. 
// Implement methods for managing inventory levels and handling product transactions.


// class Product {
//     constructor(name, price,quantity) {
//         this.name = name;
//         this.quantity = quantity;
//         this.price = price;
//     }
// }

// class Inventory {
//     constructor(products) {
//         this.products=products;
//     }
//     addProduct(product) {
//         this.products.push(product)
//     }

//     removeProduct(removeIndex) {
//         this.products.splice(removeIndex, 1);
//     }

//     updateProduct(updateIndex,newValue) {
//         let product=this.products[updateIndex]
//         product.name=newValue.name;
//         product.quantity=newValue.quantity;
//         product.price=newValue.price;
//     }
// }


// class WareHouse {
//     constructor(inventory) {
//         this.inventory=inventory;
//     }

//     add(product) {
//         this.inventory.addProduct(product)
//     }

//     remove(removeIndex) {
//         this.inventory.removeProduct(removeIndex)
//     }

//     update(updateIndex,newValue) {
//         this.inventory.updateProduct(updateIndex,newValue)
//     }

// }










// 4.Social Media Profile System:Develop a simple social media profile system. 
// Design classes for UserProfile, Post, and Comment. The UserProfile class should represent user profiles with properties like username, bio, followers. 
// The Post class should represent individual posts made by users with properties like content, likes, comments. 
// The Comment class should represent comments made on posts with properties like text, timestamp. 
// Implement methods for creating posts, adding comments, liking posts, and managing user interactions within the social media platform.






// class UserProfile {
//     constructor(username, bio,follower,posts) {
//         this.username = username;
//         this.bio = bio;
//         this.follower = follower;
//         this.posts=posts;
//     }
//     createPost(post) {
//         this.posts.push(post);
//     }

// }

// class Post {
//     constructor(content, like,comments) {
//         this.content = content;
//         this.like = like;
//         this.comments = comments;
//     }
// }


// class Comment {
//     constructor(text,time) {
//         this.text = text;
//         this.time = time;
//     }
// }


// class SocialMedia {
//     constructor(users) {
//         this.users=users;
//     }
//     likePost(postContent, username) {
//         let user = this.users.find(user => user.username === username);
//         if (user) {
//             let post = user.posts.find(post => post.content === postContent);
//             if (post) {
//                 post.likes++; 
//             }
//         }
//     }
//     addComment(postContent,username,comment) {
//         let user = this.users.find(user => user.username === username);
//         if (user) {
//             let post = user.posts.find(post => post.content === postContent);
//             if (post) {
//                 post.comments.push(comment);
//             }
//         }
//     }

// }




// let user1=new UserProfile("rustam","Rustem",76,[])
// user1.createPost(new Post("Sahdag",50,[]))
// let socialmedia=new SocialMedia([user1]);
// socialmedia.likePost("Sahdag","rustam")
// socialmedia.addComment("Sahdag","rustam","vauu")





