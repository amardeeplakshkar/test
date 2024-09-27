// /app/components/ReferralSection.tsx
import React from "react";

const ReferralSection: React.FC = () => {
  const referralLink = "https://t.me/cockscryptobot"; // Example referral link

  return (
    <div className="referral-section">
      <h2 className="text-2xl font-bold">Refer & Earn</h2>
      <p>Share your referral link to earn more $COCKS!</p>
      <input
        type="text"
        value={referralLink}
        readOnly
        className="border rounded p-2"
      />
      <p>Reward for each successful referral: 5 $COCKS</p>
    </div>
  );
};

export default ReferralSection;
