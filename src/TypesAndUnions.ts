type ID = string;
type PopularTag = string;
type  MaybePopularTag = PopularTag | null;

interface UsersInterface {
    id : ID,
    name: string,
    surname: string
}

let userName: string = "alex";

let pageNumber:string  | number ="1";  //union

let errorMessage: string | null = null;

let newUser : UsersInterface | null = null;

const popularTags: PopularTag[] =["bangladesh", "bangla"];

const dragonTag: MaybePopularTag = 'ruma';
