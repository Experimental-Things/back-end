import { ValidationArguments, ValidationOptions } from "class-validator";

export const VALIDATION_MESSAGE: Record<string, ValidationOptions> = {
    required: {
        message: (args: ValidationArguments) => `Field '${args.property}' is required`
    },
    string: {
        message: (args: ValidationArguments) => `Field '${args.property}' must be string`
    },
    email: {
        message: (args: ValidationArguments) => `Field '${args.property}' must be a valid email`
    },
    boolean: {
        message: (args: ValidationArguments) => `Field '${args.property}' must be boolean`
    }
    
}