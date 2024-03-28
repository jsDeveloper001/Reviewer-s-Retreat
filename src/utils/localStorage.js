import toast from "react-hot-toast";

const ReadDatabase = (DatabaseName) => {
    const CurrentDatabase = localStorage.getItem(DatabaseName);
    if (CurrentDatabase) {
        return JSON.parse(CurrentDatabase);
    }
    return []
}

const UpdateDatabase = (DatabaseName, id) => {
    const storedData = ReadDatabase(DatabaseName)
    const ExistId = storedData.find(bookId => bookId == id);
    if (!ExistId) {
        const ExistId = ReadDatabase("ReadList").find(bookId => bookId == id);
        if (ExistId) {
            toast.error(`Already existed in ReadList`)
        }
        else {
            storedData.push(id)
            localStorage.setItem(DatabaseName, JSON.stringify(storedData))
            toast.success(`Successfully Added to ${DatabaseName}`)
        }
    }
    else {
        toast.error(`Already existed in ${DatabaseName}`)
    }
}

export { ReadDatabase, UpdateDatabase }