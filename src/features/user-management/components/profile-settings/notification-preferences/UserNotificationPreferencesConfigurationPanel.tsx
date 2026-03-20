import React, { useState } from "react";

interface NotificationPreference {
  channel: "email" | "sms" | "push";
  enabled: boolean;
  frequency: "immediate" | "daily" | "weekly";
}

export const UserNotificationPreferencesConfigurationPanel = () => {
  const [preferences, setPreferences] = useState<NotificationPreference[]>([
    { channel: "email", enabled: true, frequency: "immediate" },
    { channel: "sms", enabled: false, frequency: "daily" },
    { channel: "push", enabled: true, frequency: "weekly" },
  ]);

  const togglePreference = (index: number) => {
    const updated = [...preferences];
    updated[index].enabled = !updated[index].enabled;
    setPreferences(updated);
  };

  return (
    <div className="notification-preferences">
      <h2>Notification Preferences</h2>
      {preferences.map((pref, i) => (
        <div key={pref.channel}>
          <label>
            <input type="checkbox" checked={pref.enabled} onChange={() => togglePreference(i)} />
            {pref.channel} — {pref.frequency}
          </label>
        </div>
      ))}
    </div>
  );
};
