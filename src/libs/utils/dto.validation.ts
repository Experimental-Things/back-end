import { ValidationArguments, ValidationOptions } from "class-validator";

export const VALIDATION_MESSAGE: Record<string, ValidationOptions> = {
    string: {
        message: (args: ValidationArguments) => `Field '${args.property}' is required`
    },
    email: {
        message: (args: ValidationArguments) => `Field '${args.property} must be a valid email`
    }
}