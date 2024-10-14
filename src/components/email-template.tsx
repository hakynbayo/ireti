// components/EmailTemplate.tsx
import React from 'react';

interface EmailTemplateProps {
  name: string;
  company: string;
  email: string;
  product: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  company,
  email,
  product,
}) => {
  return (
    <div>
      <h1>Demo Request</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Company:</strong> {company}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Product:</strong> {product}
      </p>
    </div>
  );
};
