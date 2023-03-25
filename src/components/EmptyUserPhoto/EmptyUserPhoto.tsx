import { UserPhoto } from "./EmptyUserPhoto.styled";

export const EmptyUserPhoto = ({ nameFirstLetter }) => {
    return (
        <UserPhoto>
            <span>{nameFirstLetter}</span>
        </UserPhoto>
    )
}

export default EmptyUserPhoto