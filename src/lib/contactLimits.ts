export const CONTACT_MESSAGE_LIMIT = 2000;
export const limitContactMessage = (message: string) => message.slice(0, CONTACT_MESSAGE_LIMIT);