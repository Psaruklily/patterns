class Database {
    private static instance: Database;
    data: string;
    ss: string;

    private constructor(data: string) {
        this.data = data;
        this.ss = 'ddd'
    }

    public static getInstance(data: string): Database {
        if (!Database.instance) {
            Database.instance = new Database(data);
        }
        return Database.instance;
    } 
}

const a1 = Database.getInstance('hello');
console.log(a1.data);

const a2 = Database.getInstance('bye');
console.log(a2.data);
