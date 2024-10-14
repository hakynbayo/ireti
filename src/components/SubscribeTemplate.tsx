// components/EmailTemplate.tsx
import React from 'react';

interface EmailTemplateProps {
  email: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ email }) => {
  return (
    <div>
      <h1>Subscribe to newsletter</h1>
      <p>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
};
