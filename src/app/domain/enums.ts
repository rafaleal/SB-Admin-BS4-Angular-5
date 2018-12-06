export enum ContractTypeEnum {
    Billed,
    Spontaneous
}

export enum CustomerTypeEnum {
    Legal,
    Natural
}

export enum DeliveryStatusEnum {
    Registered,
    Ongoing,
    Completed,
    Canceled
}

export enum PaymentStatusEnum {
    Pending,
    Paid
}

export enum PaymentTypeEnum {
    Money,
    Transfer
}

export enum PhoneTypeEnum {
    LandLine,
    Mobile
}

export const DeliveryStatus = Object.freeze([
    'REGISTERED',
    'ONGOING',
    'COMPLETED',
    'CANCELED'
]);

export const PaymentStatus = Object.freeze([
    'PENDING',
    'PAID'
]);
