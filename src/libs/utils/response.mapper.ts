import { ClassConstructor, plainToInstance, } from 'class-transformer'
export function Mapper<T>(ClassDto: ClassConstructor<T>, data: Record<string, unknown>): T {
    return plainToInstance(ClassDto, data, {
        excludeExtraneousValues: true
    })
}