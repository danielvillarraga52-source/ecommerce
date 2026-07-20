export default interface IUserDto{
    name:string,
    email:string,
    password:string,
    role:"client"|"admin",
    createdAt:Date
};


