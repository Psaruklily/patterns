var Database = /** @class */ (function () {
    function Database(data) {
        this.data = data;
        this.ss = 'ddd';
    }
    Database.getInstance = function (data) {
        if (!Database.instance) {
            Database.instance = new Database(data);
        }
        return Database.instance;
    };
    return Database;
}());
var a1 = Database.getInstance('hello');
console.log(a1.data);
var a2 = Database.getInstance('bye');
console.log(a2.data);
