import { Exclude, Expose } from "class-transformer";

@Exclude()
export class CreateUserDto {
    @Expose()
    first_name: string;

    @Expose()
    last_name: string;

    @Expose()
    email: string;
}

