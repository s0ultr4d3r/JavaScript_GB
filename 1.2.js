/* Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true. */

"use strict"

//es5

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
}

const post1 = new Post('name', 'text for posting', new Date());
console.log(post1);
post1.edit('edited text');
console.log(post1);


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

const attach1 = new AttachedPost('admin', 'another text for posting', new Date());
console.log(attach1);
attach1.makeTextHighlighted();
attach1.edit('dedited text 2');
console.log(attach1);

//es6

class PostNew {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post2 = new PostNew('name2', 'posting text', new Date());
console.log(post2);
post2.edit('changes');
console.log(post2);


class AttachedPostNew extends PostNew {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const attach2 = new AttachedPostNew('admin', 'another posting text', new Date());
console.log(attach2);
attach2.makeTextHighlighted();
attach2.edit('changes2');
console.log(attach2);