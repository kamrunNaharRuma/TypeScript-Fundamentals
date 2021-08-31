class Admin extends UserClassNew{
    private editor: string
    setEditor(editor:string) : void {
        this.editor = editor
    }
    getEditor(): string {
        return this.editor
    }
}

const admin = new Admin("ruma", "kamrun Nahar");
console.log(admin.getFullName());
