const addId =<T extends  object>(obj: T) => {
  const id = Math.random().toString(16);
  return {
      ...obj, id,
  };
};

const  userG ={
    name: "Jack"
}

interface UserNewinterface {
    name: string
}

const userNEWWW: UserNewinterface ={
    name : "rumaaaa"
}

const result = addId<UserNewinterface>(userNEWWW);
