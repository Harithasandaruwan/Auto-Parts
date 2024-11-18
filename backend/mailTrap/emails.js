import { VERIFICATION_EMAIL_TEMPLATE } from './emailTemplates.js'
import { mailTrapClient, sender } from './mailTrapConfig.js'

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{ email }]

    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: 'Verify your email',
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        })

        console.log("Email sent successfully", response);
    }catch (error){
        console.error(`Error sending verification`, error);
        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {

    const recipient = [{ email }];

    try {

        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "da033cba-1db9-468a-9fc6-a874cd51dbd3",
            template_variables: {
                "first_name": name,
            }
        });

        console.log("Welcome email sent successfully", response);

    } catch (error) {
        console.error(`Error sending welcome email`, error);
        throw new Error(`Error sending welcome email: ${error}`);
    }
}