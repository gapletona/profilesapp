import type { PostConfirmationTriggerHandler } from "aws-lambda";

export const handler: PostConfirmationTriggerHandler = async (event) => {

    // You can implement any custom logic you want to execute after user confirmation here.
    console.log("Post-confirmation event:", JSON.stringify(event, null, 2));

    // Return the event object to continue the authentication flow.
    return event;
};