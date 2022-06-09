class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.find((existboard) => existboard.name === board.name)) {
            throw Error();
        }
        board.inboard = true;
        this.boards.push(board);
    }

    findBoardByName(name) {
        return this.boards.find((board) => (board.name = name));
    }
}

class Board {
    constructor(name) {
        if (name === null || name === '') {
            throw Error();
        }
        this.name = name;
        this.inboard = false;
        this.articles = [];
    }

    publish(article) {
        if (this.inboard === false) {
            throw Error();
        }
        article.id = `${this.name}-${Math.random()}`;
        article.createdDate = new Date().toISOString();
        this.articles.push(article);
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(article) {
        const { subject, content, author } = article;
        if (
            subject === null ||
            subject === '' ||
            content === null ||
            content === '' ||
            author === null ||
            author === ''
        ) {
            throw Error();
        }

        this.subject = subject;
        this.content = content;
        this.author = author;
        this.comments = [];
    }

    reply(comment) {
        if (!this.id) {
            throw Error();
        }
        comment.createdDate = new Date().toISOString();
        this.comments.push(comment);
    }

    getAllComments() {
        return this.comments;
    }
}

class Comment {
    constructor(comment) {
        const { content, author } = comment;
        if (content === null || content === '' || author === null || author === '') {
            throw Error();
        }
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
