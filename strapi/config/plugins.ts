export default () => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
      register: {
        allowedFields: ['username', 'email', 'password'],
      },
      email: {
        resetPassword: {
          emailTemplate: {
            subject: 'Reset your password',
            text: 'Click the link below to reset your password:',
            html: '<p>Click the link below to reset your password:</p>',
          },
        },
      },
    },
  },
});
