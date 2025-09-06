export const emailVerificationTemplate = (otp: string) => `
  <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #ffffff;">
    <!-- Header with logo and social icons -->
    <div style="padding: 40px 40px 20px 40px; background-color: #ffffff;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;">
        <div style="color: #785DBA; font-size: 28px; font-weight: bold;">Naga Collections</div>
        <div style="display: flex; gap: 15px;">
          <div style="width: 24px; height: 24px; background-color: #9CA3AF; border-radius: 50%;"></div>
          <div style="width: 24px; height: 24px; background-color: #9CA3AF; border-radius: 50%;"></div>
          <div style="width: 24px; height: 24px; background-color: #9CA3AF; border-radius: 50%;"></div>
        </div>
      </div>
      
      <!-- Main heading -->
      <h1 style="font-size: 32px; font-weight: 600; color: #374151; margin: 0 0 30px 0; line-height: 1.2;">Welcome to Naga Collections!</h1>
      
      <!-- Main content -->
      <p style="font-size: 16px; color: #374151; line-height: 1.6; margin: 0 0 30px 0;">
        Thank you for signing up with Naga Collections. To complete your registration and verify your email address, please use the OTP below:
      </p>
      
      <!-- OTP Display -->
      <div style="background-color: #F3F4F6; border: 2px solid #E5E7EB; border-radius: 12px; padding: 30px; text-align: center; margin: 30px 0;">
        <div style="font-size: 48px; color: #785DBA; font-weight: bold; letter-spacing: 8px; font-family: monospace;">${otp}</div>
      </div>
      
      <!-- Validity notice -->
      <p style="font-size: 16px; color: #6B7280; line-height: 1.6; margin: 0 0 25px 0;">
        This OTP is valid for the next 15 minutes. Please enter this code in the verification form to activate your account.
      </p>
      
      <!-- Additional instructions -->
      <p style="font-size: 16px; color: #374151; line-height: 1.6; margin: 0 0 25px 0;">
        If you did not create an account with Naga Collections, please ignore this email and no further action is required.
      </p>
      
      <!-- Closing -->
      <p style="font-size: 16px; color: #374151; line-height: 1.6; margin: 30px 0 0 0;">
        Welcome aboard!<br>
        — The Naga Collections Team
      </p>
    </div>
  </div>
`;

export const welcomeUserTemplate = (name?: string) => `
  <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #ffffff;">
    <!-- Header with logo and social icons -->
    <div style="padding: 40px 40px 20px 40px; background-color: #ffffff;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px;">
        <div style="color: #785DBA; font-size: 28px; font-weight: bold;">Naga Collections</div>
        <div style="display: flex; gap: 15px;">
          <div style="width: 24px; height: 24px; background-color: #9CA3AF; border-radius: 50%;"></div>
          <div style="width: 24px; height: 24px; background-color: #9CA3AF; border-radius: 50%;"></div>
          <div style="width: 24px; height: 24px; background-color: #9CA3AF; border-radius: 50%;"></div>
        </div>
      </div>
      
      <!-- Main heading -->
      <h1 style="font-size: 32px; font-weight: 600; color: #374151; margin: 0 0 30px 0; line-height: 1.2;">Account Successfully Created!</h1>
      
      <!-- Thumbs up emoji -->
      <div style="text-align: center; margin: 30px 0;">
        <img 
          src="https://res.cloudinary.com/dixoaggbe/image/upload/v1731841849/thumbs_up_gif.gif" 
          alt="Thumbs up" 
          style="width: 100px; height: auto; margin: 20px 0;" />
      </div>
      
      <!-- Main content -->
      <p style="font-size: 16px; color: #374151; line-height: 1.6; margin: 0 0 30px 0;">
        Congratulations${name ? `, ${name}` : ''}! Your email has been verified and your Naga Collections account is now active. You're all set to explore our amazing collection of products.
      </p>
      
      <!-- Features/Benefits -->
      <div style="background-color: #F3F4F6; border: 2px solid #E5E7EB; border-radius: 12px; padding: 30px; margin: 30px 0;">
        <h2 style="font-size: 20px; font-weight: 600; color: #785DBA; margin: 0 0 20px 0; text-align: center;">What's Next?</h2>
        <p style="font-size: 16px; color: #374151; line-height: 1.6; margin: 0 0 15px 0;">
          🛍️ Browse our exclusive collections<br>
          💎 Discover premium quality products<br>
          🎉 Enjoy member-only deals and discounts<br>
          📦 Track your orders in real-time
        </p>
      </div>
      
      <!-- Call to action -->
      <div style="text-align: center; margin: 30px 0;">
        <div style="background-color: #785DBA; color: #ffffff; padding: 15px 30px; border-radius: 8px; font-size: 16px; font-weight: 600; text-decoration: none; display: inline-block;">
          Start Shopping Now
        </div>
      </div>
      
      <!-- Additional message -->
      <p style="font-size: 16px; color: #6B7280; line-height: 1.6; margin: 0 0 25px 0;">
        Need help getting started? Our support team is here to assist you every step of the way. Simply reply to this email or contact us through our help center.
      </p>
      
      <!-- Closing -->
      <p style="font-size: 16px; color: #374151; line-height: 1.6; margin: 30px 0 0 0;">
        Happy shopping!<br>
        — The Naga Collections Team
      </p>
    </div>
  </div>
`;
